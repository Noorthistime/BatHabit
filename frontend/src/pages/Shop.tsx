import React, { useEffect, useState } from 'react';
import { api } from '../api';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function Shop() {
  const [tab, setTab] = useState<'MARKET' | 'VAULT'>('MARKET');
  const [items, setItems] = useState<any[]>([]);
  const [inventory, setInventory] = useState<any[]>([]);
  const [currency, setCurrency] = useState(0);

  const fetchData = async () => {
    try {
      const [itemsRes, invRes, meRes] = await Promise.all([
        api.get('/shop/items'),
        api.get('/shop/inventory'),
        api.get('/auth/me')
      ]);
      setItems(itemsRes.data);
      setInventory(invRes.data);
      setCurrency(meRes.data.currency?.balance || 0);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [tab]);

  const handlePurchase = async (itemId: string) => {
    try {
      await api.post('/shop/purchase', { itemId });
      fetchData();
    } catch (e: any) {
      alert(e.response?.data?.error || 'Purchase failed');
    }
  };

  const handleEquip = async (itemId: string) => {
    try {
      await api.post('/shop/equip', { itemId });
      fetchData();
    } catch (e: any) {
      alert(e.response?.data?.error || 'Equip failed');
    }
  };

  const ownedItemIds = new Set(inventory.map(i => i.itemId));

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-primary">The Night Market</h1>
          <p className="text-muted-foreground mt-2">Spend your hard-earned gold on artifacts and titles.</p>
        </div>
        <div className="text-left md:text-right bg-background p-4 rounded-xl border border-muted min-w-[200px]">
          <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Treasury</p>
          <p className="text-4xl font-serif text-yellow-500 mt-1">{currency} <span className="text-lg text-muted-foreground">Coins</span></p>
        </div>
      </header>

      <div className="flex gap-4 border-b border-muted pb-4">
        <Button variant={tab === 'MARKET' ? 'default' : 'ghost'} onClick={() => setTab('MARKET')} className="font-bold tracking-widest uppercase">The Market</Button>
        <Button variant={tab === 'VAULT' ? 'default' : 'ghost'} onClick={() => setTab('VAULT')} className="font-bold tracking-widest uppercase">The Vault</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tab === 'MARKET' && items.map(item => (
          <Card key={item.id} className="border-primary/20 bg-card/80 backdrop-blur hover:border-primary/50 transition-colors shadow-lg">
            <CardContent className="p-6 text-center space-y-4 flex flex-col h-full">
              <div className="w-full aspect-square bg-background/50 rounded-lg flex items-center justify-center border border-muted overflow-hidden">
                 {item.category === 'AVATAR' ? (
                   <img src={item.name} alt="Avatar" className="w-full h-full object-cover" />
                 ) : (
                   <span className="text-muted-foreground font-serif text-xl">{item.name}</span>
                 )}
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="font-bold text-lg text-primary uppercase tracking-wider">{item.category}</h3>
                <p className="text-sm text-muted-foreground mt-1 flex-1">{item.description}</p>
                <div className="mt-4 text-yellow-500 font-bold font-serif text-2xl">{item.price} Coins</div>
              </div>
              <Button 
                className="w-full mt-4" 
                variant={ownedItemIds.has(item.id) ? "outline" : "default"}
                disabled={ownedItemIds.has(item.id) || currency < item.price}
                onClick={() => handlePurchase(item.id)}
              >
                {ownedItemIds.has(item.id) ? 'Owned' : currency < item.price ? 'Too Poor' : 'Purchase'}
              </Button>
            </CardContent>
          </Card>
        ))}

        {tab === 'VAULT' && inventory.map(inv => (
          <Card key={inv.id} className={`bg-card/80 backdrop-blur transition-all shadow-lg ${inv.isEquipped ? 'border-primary ring-1 ring-primary' : 'border-primary/20'}`}>
            <CardContent className="p-6 text-center space-y-4 flex flex-col h-full">
              <div className="w-full aspect-square bg-background/50 rounded-lg flex items-center justify-center border border-muted overflow-hidden">
                 {inv.item.category === 'AVATAR' ? (
                   <img src={inv.item.name} alt="Avatar" className="w-full h-full object-cover" />
                 ) : (
                   <span className="text-muted-foreground font-serif text-xl">{inv.item.name}</span>
                 )}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-primary uppercase tracking-wider">{inv.item.category}</h3>
              </div>
              <Button 
                variant={inv.isEquipped ? "outline" : "default"}
                className="w-full mt-4"
                onClick={() => handleEquip(inv.itemId)}
                disabled={inv.isEquipped}
              >
                {inv.isEquipped ? 'Equipped' : 'Equip'}
              </Button>
            </CardContent>
          </Card>
        ))}
        
        {tab === 'VAULT' && inventory.length === 0 && (
          <div className="col-span-full text-center py-20 text-muted-foreground font-serif text-xl">
            Your vault is empty. Seek artifacts in the market.
          </div>
        )}
      </div>
    </div>
  );
}

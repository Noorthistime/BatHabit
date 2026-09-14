import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = 'demo@bathabit.com';
  const password = 'password';

  const existing = await prisma.user.findUnique({ where: { email } });
  
  if (!existing) {
    const passwordHash = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        email,
        passwordHash,
        character: { create: {} },
        attribute: { create: {} },
        streak: { create: {} },
        currency: { create: {} },
      },
    });
    console.log('Demo user created');
  } else {
    console.log('Demo user already exists');
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

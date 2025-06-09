import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const countries = [
    { id: 1, name: 'Nigeria', code: 'NG' },
    { id: 2, name: 'Ghana', code: 'GH' },
    { id: 3, name: 'Kenya', code: 'KE' },
    { id: 4, name: 'South Africa', code: 'ZA' },
    { id: 5, name: 'Egypt', code: 'EG' },
    { id: 6, name: 'United Kingdom', code: 'GB' },
    { id: 7, name: 'United States', code: 'US' },
    { id: 8, name: 'Canada', code: 'CA' },
    { id: 9, name: 'France', code: 'FR' },
    { id: 10, name: 'Germany', code: 'DE' },
  ];

  for (const country of countries) {
    await prisma.country.upsert({
      where: { id: country.id }, // Ensure 'id' is provided in the 'countries' array
      update: {},
      create: {
        name: country.name,
        code: country.code,
      },
    });
  }

  console.log('✅ Country seed complete');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

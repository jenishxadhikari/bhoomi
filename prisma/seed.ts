import { PrismaClient, Role } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create an admin user
  await prisma.user.create({
    data: {
      fullName: 'Admin User',
      email: 'admin@example.com',
      password: 'adminpassword', // In a real application, use hashed passwords!
      role: Role.ADMIN,
    },
  })

  // Create a regular user
  await prisma.user.create({
    data: {
      fullName: 'Regular User',
      email: 'user@example.com',
      password: 'userpassword', // In a real application, use hashed passwords!
      role: Role.USER,
    },
  })

  console.log('Seed data has been inserted!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

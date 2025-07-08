import db from "#db/client";

import { createTask } from "#db/queries/tasks";
import { createUser } from "#db/queries/users";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
  for (let i = 0; i <= 2; i++) {
    const user = await createUser("user" + i, "password");
    for (let j = 1; j <= 3; j++) {
      await createTask(`Task ${j}`, false, user.id);
    }
  }
}

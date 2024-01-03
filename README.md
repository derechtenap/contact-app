# Contact App

Lightweight and user-friendly Electron application designed to help you efficiently manage your personal contacts and appointments.

## Setting up the App in Development Mode

Follow these steps to set up the App:

1. **Install Dependencies:** Open your terminal and run the following command to install all the required dependencies.

```bash
npm run i
```

2. **Generate Local Database:** Create a local database for the app by executing the following command:

```bash
npm run push
```

3. **Explore Databases with Drizzle Studio:** Use Drizzle Studio to visualize and interact with the local databases. Open it with:

```bash
npm run studio
```

**Optional: Database Migration:** If you make changes to the databases, generate a migration by running:

```bash
npm run generate
```

**Optional: Connect the App to a non-local Database:**
Update the client configuration inside the `db/index.ts` file.

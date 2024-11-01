# lift labs

![Made with React Native](https://img.shields.io/badge/made%20with-react%20native-61DAFB?logo=react)
![Made with Expo](https://img.shields.io/badge/made%20with-expo-1f72ff?logo=expo)
![Made with TypeScript](https://img.shields.io/badge/made%20with-typescript-007ACC?logo=typescript)

> **lift labs** is currently in Beta. To join as an early adopter and help shape the technology, sign up for the waitlist on our
[landing page](https://www.liftlabs.dev).

Build, Track and Analyze your training programs to achieve your goals.

## Features

- **Build**
    - Custom Exercises
    - Custom Workouts
    - Custom Programs

- **Track**
    - Track Every Workout
    - Track Every Set
    - Track Every Goal

- **Analyze**
    - Custom Dashboard
    - Custom KPIs
    - Custom Visualizations

## Installation
To install the project, follow these steps:
1. **Clone the Repository**  
First, clone the project from the GitHub repository: 
 
    ```
    git clone https://github.com/antpie530/liftlabs.git
    ```
2. **Navigate to the Project Directory**  
Move into the project folder:

    ```
    cd liftlabs
    ```
3. **Install Dependencies**  
Install the dependencies:
    ```
    npm i
    ```
4. **Install the Expo Go App**  
Download and install the Expo Go app on your mobile device. You can find it on the [App Store](https://apps.apple.com/us/app/expo-go/id982107779) or [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&pli=1).

5. **Run the App**  
There are two ways to run the app, depending on your network setup:  
    - Same Network:
    If both your development machine and mobile device are on the same network, run:  
        ```
        npx expo start
        ```  
    - Different Networks:
    If your devices are on different networks, run:
        ```
        npx expo start --tunnel
        ```
6. **Scan the QR Code**  
Once the project is running, scan the QR code displayed in your terminal using the Expo Go app. This will download the project to your device, allowing you to start using the app.

## Tech Stack
**lift labs** uses the following stack to build the app:

- **[React Native](https://reactnative.dev/)**
    - Powers the app as a native, cross-platform solution, using a component-based architecture that simplifies development and makes it easier to scale.

- **[Expo](https://docs.expo.dev/)**
    - Handles the complexities of mobile development, simplifying configurations for native modules, deployment, and testing distribution. Expo offers specific native bindings and streamlines many tasks that would otherwise take considerable time to implement manually.

- **[TypeScript](https://www.typescriptlang.org/)**
    - Adds static typing to JavaScript, helping to catch errors early and reducing bugs. It encourages a more thoughtful approach to code structure, making development smoother and the codebase more reliable.

- **[SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)**
    - Provides an on-device relational database solution, ensuring rapid data access and user data privacy. With SQLite, all data is stored locally, giving users full control over their information without any external dependencies.

- **[Drizzle](https://orm.drizzle.team/)**
    - A headless ORM that accelerates and simplifies data management, making it easier to handle, build, and debug data interactions efficiently.
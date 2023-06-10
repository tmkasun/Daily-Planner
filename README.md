
# Daily Tasks Manager

The Daily Tasks Manager is an open-source application that allows users to manage their daily tasks. It provides a user-friendly interface for managing tasks, including features such as drag-and-drop task migration and filtering tasks by status. The application is built using ReactJS and can be integrated with either a GraphQL or REST API backend.

[Demo](https://days.knnect.com)

![image](https://github.com/tmkasun/Daily-Planner/assets/3313885/c17eabd5-6454-4ea0-9a59-bd12fb918d43)

![image](https://github.com/tmkasun/Daily-Planner/assets/3313885/aa23937a-a553-4a25-b5e1-bab8834154a5)

## Features

* Create, update, and delete tasks
* Drag-and-drop task migration between different task statuses
* Filter tasks based on their status
* User-friendly interface with intuitive design
* Integration with a backend API for data management

## Installation

To install and run the Daily Tasks Manager locally, follow these steps:

1. Clone the repository:

<pre>
git clone [https://github.com/your-username/daily-tasks-manager.git](https://github.com/tmkasun/Daily-Planner.git)
</pre>

2. Navigate to the project directory:

<pre>
cd Daily-Planner
</pre>

3. Install the dependencies using npm or yarn:

<pre>
npm install
</pre>

or

<pre>
yarn install</pre>

4. Start the development server:

<pre>
npm start</pre>

or

<pre>
yarn start
</pre>

5. Open your browser and visit `http://localhost:3000` to access the Daily Tasks Manager.

## Backend Integration

The Daily Tasks Manager can be integrated with either a GraphQL or REST API backend to manage task data. You can choose the approach that suits your needs. To integrate the backend, follow these steps:

1. Configure the backend API endpoint in the project. In the source code, locate the file responsible for API configuration, such as `hooks.tasks.js`.
2. Replace the default API endpoint with your own backend API URL.
3. Modify the API requests and responses to match the specifications of your backend API.

Make sure your backend API provides the necessary endpoints to perform CRUD operations on tasks and supports the required data structure.

## Contributing

Contributions are welcome! If you would like to contribute to the Daily Tasks Manager, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Implement your changes.
4. Test your changes thoroughly.
5. Commit and push your changes to your forked repository.
6. Create a pull request to the main repository, explaining the purpose and details of your changes.

Please make sure to adhere to the existing code style and conventions.

## License

The Daily Tasks Manager is released under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

The Daily Tasks Manager project is built upon the contributions of many individuals. We would like to thank all the contributors for their valuable input.

## Contact

Simply create an issue

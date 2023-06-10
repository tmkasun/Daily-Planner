
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

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>shell</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-shell">git clone https://github.com/your-username/daily-tasks-manager.git
</code></div></div></pre>

2. Navigate to the project directory:

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>shell</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-shell">cd daily-tasks-manager
</code></div></div></pre>

3. Install the dependencies using npm or yarn:

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>shell</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-shell">npm install
</code></div></div></pre>

or

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>shell</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-shell">yarn install
</code></div></div></pre>

4. Start the development server:

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>shell</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-shell">npm start
</code></div></div></pre>

or

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>shell</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-shell">yarn start
</code></div></div></pre>

5. Open your browser and visit `http://localhost:3000` to access the Daily Tasks Manager.

## Backend Integration

The Daily Tasks Manager can be integrated with either a GraphQL or REST API backend to manage task data. You can choose the approach that suits your needs. To integrate the backend, follow these steps:

1. Configure the backend API endpoint in the project. In the source code, locate the file responsible for API configuration, such as `api.js` or `graphql.js`.
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

If you have any questions or suggestions regarding the Daily Tasks Manager, please feel free to reach out to us at [project_email@example.com](mailto:project_email@example.com).

Setup:
Initialize a new React project.
Add necessary dependencies: Redux Toolkit, RTK Query, Ant Design.
Must use Typescript and discouraged from using “any” for declaring type
Product List View:
API ENDPOINT:  https://dummyjson.com/products (GET)
Use RTK Query to define endpoints for fetching projects.
Display the list of products in a table using Ant Design's Table component also add your style to make the list beautiful.
Implement pagination pass limit and skip params to limit and skip the results for pagination, and use limit=0 to get all items.
Include a button to navigate to the Project Detail View for each product.
Product Detail View:
Display the details of the selected product, using this API ENDPOINT: https://dummyjson.com/products/:id (GET)
Make Details page design on your own with CSS, and Ant Design.
Fetch the project details using RTK Query.
Edit Product:
Create a form to update the product using Ant Design's Form component based on product details.
Add necessary fields for API RESPONSE, using this API ENDPOINT: https://dummyjson.com/products/:id. (GET)
Implement functions to add and remove reviews(you get the reviews array from the API response)dynamically using <Form.List> from Ant Design.
Make a Select Component here for Category Select and you get all categories from this API ENDPOINT: https://dummyjson.com/products/categories (GET)
After completing the editing submit the edited product and you need to console.log the final output, and a PATCH request to this API ENDPOINT: https://dummyjson.com/products/:id (PATCH)
Styling and Layout:
Use Ant Design's layout components to create a user-friendly and responsive interface.
Apply custom styling as required.
Make Sure to organize the code and make sure proper code splitting 
Must use Ant Design Form, Input, Select
Bonus
Folder structure
Clean code
Information structure of the application

Note : (Git commit story would like you to commit right from the design to the final closure, to know your thought process)


  # Klassy resturant:
  # link:
  Git-hub Link : [https://github.com/fwsa-batch2/mahalakshmi.palani__web_project/](https://github.com/fwsa-batch2/mahalakshmi.palani__web_project/)

  Netlify link : [https://fwsa-batch2.github.io/mahalakshmi.palani__web_project/](https://fwsa-batch2.github.io/mahalakshmi.palani__web_project/)
  
  Sonarcloud link : [https://sonarcloud.io/project/overview?id=fwsa-batch2_mahalakshmi.palani__web_project](https://sonarcloud.io/project/overview?id=fwsa-batch2_mahalakshmi.palani__web_project)
  

  # Features:
    1. Register ( Completed )
    2. Login ( Completed )
    3. Add menu (Completed)
    4. Add comment (Completed)
    5. Add to cart (In progress)

# Register:

  * Registration Fields:
    1. User name
    2. User mail id
    3. Password
    5. Confirm Password
  * Acceptance Criteria:
    1. All input fields are required.
    2. User name must contain 3 characters and must not be empty.
    No special characters are allowed.
    3. Email id must include an '@' in the email address.
    4. Email id entered must not exist in local storage already.
    5. Password and Confirm password fields must contain minimum 8 and maximum 15 characters with atleast 1     lowercase, 1 uppercase , 1 special character except "space".
    6. Password and Confirm password fields must contain same value.
    7. If everything is validated, redirect to login page.

# Login:
  * Fields
      1. Email id
      2. Password
  * Acceptance Criteria
      1. All input fields are required.
      2. Email id and password should match with the local storage content.
      3. If everything is validated, redirect to home page.

# List of menu:
  1. Only logged in user can get access to view the page .
  2. Click the add to cart button then the prompt will be displayed and enter the number of quantity in the box. 
  3. After giving the requeast credential data will be local storage and will be displayed in the cart page.

  * Addmenu button
    1. when click the addmenu button then the prompt will be displayed. enter the secret code.
    2. Only admin know that secret code(ImMaha). If you are not an admin , it will throw errors message.
    3. If you are admin it will redirect to addmenu page.
# Add menu:
  * Fields
    1. Food name
    2. Image url
    3. Rate
  * Acceptance Criteria
      1. All input fields are required.
      2. food name should not match with the local storage content.
      4. Only admin can get the access for this page.
      5. If everything is validated, added menu will be display in the menu page.    

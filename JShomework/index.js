// firstname,lastname,username,email,gender,age,password.
<form class="js-form">
  <div>
    <label for="firstname">First Name:</label>
    <input type="text" id="firstname" class="js-firstname-inp" placeholder="Enter your first name" />
  </div>

  <div>
    <label for="lastname">Last Name:</label>
    <input type="text" id="lastname" class="js-lastname-inp" placeholder="Enter your last name" />
  </div>

  <div>
    <label for="username">Username:</label>
    <input type="text" id="username" class="js-username-inp" placeholder="Enter your username" />
  </div>

  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" class="js-useremail-inp" placeholder="Enter your email" />
  </div>

  <div>
    <label for="gender">Gender:</label>
    <select id="gender" class="js-gender-inp">
      <option value="">-- Select gender --</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" class="js-password-inp" placeholder="Enter your password" />
    <button type="button" class="js-show-password">Show</button>
  </div>

  <button type="submit">Submit</button>
</form>
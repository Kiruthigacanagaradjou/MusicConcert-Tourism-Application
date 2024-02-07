const path = require('path')
const User = require('../model/user');
//const Users = require('../model/user');
class UserController {

  async signupUser(req, res) {
    const { name, email, password, country, state } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists.' });
      }
      const newUser = new User({
        name,
        email,
        password,
        country,
        state,
        role: 'user',
        isActive: true,
      });
      await newUser.save();
      res.status(200).json({ message: "Signup successful!", role: newUser.role });
    }
    catch (error) {
      console.error('Error', error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async loginUser(req, res) {
    console.log("login in")
    const { email, password } = req.body;
    try {
      const userData = await User.find({}).lean();
      const user = userData.find(user => user.email === email && user.password === password);
      if (user) {
        const authdata = user.email + ":" + user.password + ":" + user.role
        // req.session.email=user.email
        // req.session.password=user.password
        // req.session.role=user.role
        // console.log({sessiondata:req.session})
        res.json({ token: btoa(authdata), user: user });
        //res.json({auth:btoa(authdata)});
      } else {
        res.status(401).json({ message: 'Not a valid user.' });
      }
    } catch (error) {
      console.error('Error finding user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  async updatePassword(req, res) {
    const { email, password } = req.body
    try {
      console.log("im in try")
      const updatedpassword = await User.findOneAndUpdate(
        { email: email },
        {
          password: password
        },
        { new: true }
      )
      console.log("im in next")
      res.json({ message: 'password details updated successfully', password: updatedpassword });
    }
    catch (error) {
      res.status(500).json({ error: 'Error updating user details' });
    };
  }

  // async loginUser(req, res) {
  //   const { email, password } = req.body;
  //   try {
  //     const user = await User.findOne({ email, password }).lean();
  //     if (!user) {
  //       return res.status(400).json({ message: 'Invalid email or password.' });
  //     }
  //     //res.status(200).json({ message: 'Login successful!', role: user.role });
  //     res.status(200).json(user);
  //   } catch (error) {
  //     console.error('Error finding user:', error);
  //     res.status(500).json({ message: 'Internal server error' });
  //   }
  // }
  // async getUser(req, res) {
  //   try {
  //     const users = await User.find({}); 
  //     res.json(users);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //     res.status(500).json({ message: 'Internal server error' });
  //   }
  // }



}

module.exports = new UserController();
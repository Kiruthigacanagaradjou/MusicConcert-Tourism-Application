const path=require('path')
//const User = require('../model/user');
const Users = require('../model/user');

class adminController {
    
  async loginUser(req, res) {
    console.log("login in")
    const { email, password } = req.body;
    try {
      const userData = await Users.findOne({}).lean();
      // if (!user) {
      //   return res.status(400).json({ message: 'Invalid email or password.' });
      // }
      // //res.status(200).json({ message: 'Login successful!', role: user.role });
      // res.status(200).json(user);
      const user = userData.find(user => user.email === email && user.password === password);
        if (user) {
            req.session.email=user.email
            req.session.password=user.password
            req.session.role=user.role
            console.log({sessiondata:req.session})
            res.json(user);
        } else {
            res.status(401).json({ message: 'Not a valid user.' });
        }
    } catch (error) {
      console.error('Error finding user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  async getUser(req, res) {
    try {
      const users = await Users.find({}); 
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

    // async updateUser(req, res) {
    //   //console.log("hh")
    //   const  Userid  = req.params.id;
    //   //console.log(Userid)
    //     const { email, password, name, country, state } = req.body;
    //     try {
    //       const updatedUser = await Users.findByIdAndUpdate(
    //         Userid,
    //         {
    //           name: name,
    //           email: email,
    //           password: password,
    //           country: country,
    //           state: state,
    //           updatedAt: Date.now(),
    //         },
    //         { new: true }
    //       );
    //       //console.log("in")
    //       res.status(200).json({ message:"Updated", user:updatedUser });
    //     } catch (error) {
    //       res.status(500).json({ error: "Error in updation", error });
    //     }
    //   }
    async updateUser(req, res) {
      //console.log("hh")
      //const  Userid  = req.params.id;
      //console.log(Userid)
      
        const { email, password, name, country, state } = req.body;
        try {
          const updatedUser = await Users.findOneAndUpdate(
            { email: email },
            {
              name: name,
              email: email,
              password: password,
              country: country,
              state: state,
              updatedAt: Date.now(),
            },
            { new: true }
          );
          console.log(updatedUser)
          res.json({ message:"Updated", user:updatedUser });
        } catch (error) {
          res.status(500).json({ error: "Error in updation", error });
        }
      }


      async deleteUser(req, res) {
        //console.log("del")
        const Userid  = req.params.id;
        try {
          //console.log("im in del")
          // const Userid  = req.params.id;
          console.log(Userid)
          let deletedUser = await Users.findByIdAndDelete(Userid);
          res.status(200).json({ message: 'User deleted successfully',user: deletedUser });
        } catch (error) {
          console.error('Error deleting user:', error);
          res.status(500).json({ error: 'Failed to delete user' });
        }
      }
    
    }

   
    

    module.exports = new adminController();
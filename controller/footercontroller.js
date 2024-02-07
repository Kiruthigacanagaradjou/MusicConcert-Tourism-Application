const path=require('path')
const Master = require('../model/master');

class FooterController{

    async storeFooter(req, res) {
        //const { about,location} = req.body;
        //const {email,phone}=req.body.contact;
        const {contenttype,content}=req.body;
        try {
          const footerdata=await Master.findOne({contenttype})
            let masterdata;
            if(footerdata && footerdata.content){
                 await Master.updateOne({contenttype},{$set:{content}})
                 masterdata=await Master.findOne({contenttype})
            }else{
                const master=new Master({contenttype,content})
                masterdata=await master.save();
            }
          // const footer = new Footer({ about,location,contact:{email,phone} });
          // await footer.save();
          console.log(masterdata)
          res.status(200).json({ success: true, message: 'Footer content stored',masterdata });
        } catch (error) {
          console.error('Error storing footer content:', error);
          res.status(500).json({ success: false, message: 'Failed' });
        }
      }
    
      async getFooter(req, res) {
        try {
          
          let footerData = await Master.find({}).lean();
          //console.log(footerData)
          res.status(200).json(footerData[0]);
        
        } catch (error) {
          console.error('Error fetching footer:', error);
          res.status(500).json({ message: 'Internal server error' });
        }
      }

      
    

}


module.exports = new FooterController();
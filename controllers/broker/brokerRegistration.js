import registeredUsers from '../../schema/broker_registration/brokerregistration-schema'
import brokers from '../../schema/broker/db-schema'
import brokerfirms from '../../schema/brokerFirm/db-schema'

/* ++++++++++++++++++++++++++++ 
    Created by:RAJAT JOSHI
    Created at: 15/04/2021
    +++++++++++++++++++++++++++++ */
// Function to save user data.

let register = function (req, res) {
    brokers.aggregate([{
        $lookup: {
            from: 'brokerfirms',
            localField: '_id',
            foreignField: 'sac._id',
            as: 'accessscode'
        }
    }, { $project: { accessscode: 1 } }, { $unwind: "$accessscode" }]).exec((err, result) => {
        if (result) {
            let availableAccessCode = result.map(ele => {
                if (ele._id === ele.accessscode.sac[1]._id) {
                    return ele.accessscode.sac[1].access_code
                }
                else if (ele._id === ele.accessscode.sac[0]._id) {
                    return ele.accessscode.sac[0].access_code
                }
            })
            let data = req.body
            if(data && availableAccessCode.includes(data.authCode)){
        
                let details = new registeredUsers({
                    firstName: data.firstName,
                    middleName: data.middleName,
                    lastName: data.lastName,
                    address1: data.address1,
                    address2: data.address2,
                    phone: data.phone,
                    country: data.country,
                    state: data.state,
                    city: data.city,
                    email: data.email,
                    password: data.password,
                    bankaccountName: data.bankaccountName,
                    bankAccountNumber: data.bankAccountNumber,
                    zipcode: data.zipcode,
                    authCode: data.authCode
                })
                // console.log(details.authCode)
                details.save(function (err, result) {
                    if (err) {
                        res.json({ status: 400, data: err, message: 'error' })
                    }
                    else {
                        res.json({ status: 200, data: result, message: 'Broker registered successfully' })
                    }
                })
            }
            else {
                res.json({ status: 400, message: 'Wrong auth code' })

            }
        


        }
    })

}


exports.register = register;

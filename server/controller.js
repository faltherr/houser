module.exports = {
    getHouses: (req, res) => {
        // console.log(req)
        const db =req.app.get('db')
        // console.log(db)
        db.get_houses().then( results => {
            res.status(200).send(results)
        }).catch(er => {
            console.log(er)
            res.status(500).send('Cannot Get House List')
        })
    },
    addHouse: (req, res) => {
        const db = req.app.get('db')
        // console.log(req.body)
        let {name, address, city, state, zip} = req.body
        db.create_house([name, address, city, state, zip]).then(results => {
            res.status(200).send(results)
        }).catch((error) => {
            res.status(500).send("Could not PUT", error)
        })
    },
    deleteHouse: (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_house(id).then( results => {
            res.status(200).send(results)
        })
    }
}
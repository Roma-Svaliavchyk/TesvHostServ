import OrderModel from '../models/Text.js';

export const update = async (req, res) => {
    try{
        const productsId = req.params.id;

        await OrderModel.updateOne(
            {
                _id: orderId,
            },
            {
                Text: req.body.fullName,                        
            },
        );
        res.json({
            massage: "допис оновлено!",
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Не вдалось оновити допис!',           
        })
    }
};

export const getOne = async (req, res) =>{
    try{
        const orderId = req.params.id;

        const doc = await OrderModel.findOne({_id: orderId});

        if (!doc) {
            return res.status(404).json({ message: 'Допис не знайден' });
        }

        res.json(doc);

    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Не вдалось отримати допис!',           
        })
    }
}

export const remove = async (req, res) =>{
    try{
        const orderId = req.params.id;

        const doc = await OrderModel.deleteOne({_id: orderId});

        res.json({
            message: "Успішно видалено"
        });

    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Не вдалось видалити допис!',           
        })
    }
}


export const getAll = async (req, res) =>{
    try{
        const text = await OrderModel.find().populate('text').exec();

        res.json(text);

    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Не вдалось отримати тексти!',
           
        })
    }
}


export const create = async (req, res) => {
    try{
        const doc = new OrderModel({
            text: req.body.text,            
        })

        const order = await doc.save();

        res.json(order);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалось додати текст! Заповніть всі поля!'            
        })
    }
}

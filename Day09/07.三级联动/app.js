const express = require('express');
const db = require('./db');
const Cities = require('./models/cites');

const app = express();

app.use(express.static('public'));

db.then(() => {
	app.get("/province", async (req, res) => {
		try { //直接寻找所有的省份 并响应
			const cities = await Cities.find({
				level: 1
			}, {
				name: 1,
				_id: 0
			})
			// console.log(cities);

			//响应数据
			res.json({
				status: 0,
				data: cities
			})
		} catch (e) {
			res.json({
				status: 1,
				err: "哎呀 网络有问题了，请刷新后再试"
			})
		}
	})


	app.get("/city", async (req, res) => {
		try {
			//先接受ajax请求发送过来的省份名称
			const {
				province
			} = req.query;
			// console.log(province)

			const a = await Cities.find({
				name : province,
			})
			const ctPro = a[0].province
			// console.log(ctPro);

			

			const cities = await Cities.find({
				province:ctPro,
				level: 2
			}, {
				name: 1,
				_id: 0
			})
			// console.log(cities);

			//响应数据
			res.json({
				status: 0,
				data: cities
			})
		} catch (e) {
			res.json({
				status: 1,
				err: "哎呀 网络有问题了，请刷新后再试"
			})
		}
	})

	app.get("/county", async (req, res) => {
		try {
			//先接受ajax请求发送过来的省份名称
			const {
				province,
				city
			} = req.query;
			console.log(province,city)



			const a = await Cities.find({
				name : province,
			})
			// console.log(a);
			const ctPro = a[0].province  // 13
			// console.log(ctPro);


			const b = await Cities.find({
				name :city,
			})
			const ctPct = b[0].city  // 13
			console.log(ctPro,ctPct);

			const cities = await Cities.find({
				province:ctPro,
				city:ctPct,
				level: 3
			})
			console.log(cities);
			//响应数据
			res.json({
				status: 0,
				data: cities
			})
		} catch (e) {
			res.json({
				status: 1,
				err: "哎呀 网络有问题了，请刷新后再试"
			})
		}
	})

}).catch(() => {
	console.log("数据库连接失败~")
})


app.listen(4000, err => {
	if (!err) console.log('服务器启动成功了~ http://127.0.0.1:4000');
	else console.log(err);
})
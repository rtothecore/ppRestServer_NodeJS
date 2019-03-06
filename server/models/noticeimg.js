var mongoose = require("mongoose")
var Schema = mongoose.Schema

var NoticeImgSchema = new Schema({
	img_file_name: String,
	display: String,	
	start_date: String,
	end_date: String,
	link_url: String
})

var NoticeImg = mongoose.model("NoticeImg", NoticeImgSchema)
module.exports = NoticeImg
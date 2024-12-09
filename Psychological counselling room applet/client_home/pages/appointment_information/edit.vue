<template>
	<view class="diy_edit page_appointment_information" id="appointment_information_edit">
		<view class='warp'>
			<view class='container'>
				<view class='row'>
						<view v-if="$check_field('set','user_information') || $check_field('add','user_information') || $check_field('get','user_information')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								用户信息:
							</text>
						</view>
						<view class="diy_field diy_down diy_text_row diy_select_flex">
							<uni-data-select
									id="form_user_information"
									v-model="form['user_information']"
									:localdata="list_user_user_information"
									:clear="!disabledObj['user_information_isDisabled']"
									:disabled="disabledObj['user_information_isDisabled']"
									v-if="(form['user_information'] && $check_field('set','user_information')) || (!form['user_information'] && $check_field('add','user_information'))"
							></uni-data-select>
							<text v-else-if="$check_field('get','user_information')">{{ form['user_information'] }}</text>
						</view>
					</view>
							<view v-if="$check_field('set','user_name') || $check_field('add','user_name') || $check_field('get','user_name')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								用户姓名:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_user_name" v-model="form['user_name']" placeholder="请输入用户姓名" v-if="(form['user_name'] && $check_field('set','user_name')) || (!form['user_name'] && $check_field('add','user_name'))" :disabled="disabledObj['user_name_isDisabled']" />
							<text v-else-if="$check_field('get','user_name')">{{ form['user_name'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','user_gender') || $check_field('add','user_gender') || $check_field('get','user_gender')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								用户性别:
							</text>
						</view>
								<!-- 选项 -->
						<view class="diy_field diy_down diy_text_row diy_select_flex">
							<uni-data-select
									id="form_user_gender"
									v-model="form['user_gender']"
									:localdata="list_user_gender"
									v-if="(form['user_gender'] && $check_field('set','user_gender')) || (!form['user_gender'] && $check_field('add','user_gender'))"
							></uni-data-select>
							<text v-else-if="$check_field('get','user_gender')">{{ form['user_gender'] }}</text>
						</view>
							</view>
							<view v-if="$check_field('set','user_age') || $check_field('add','user_age') || $check_field('get','user_age')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								用户年龄:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_user_age" v-model="form['user_age']" placeholder="请输入用户年龄" v-if="(form['user_age'] && $check_field('set','user_age')) || (!form['user_age'] && $check_field('add','user_age'))" :disabled="disabledObj['user_age_isDisabled']" />
							<text v-else-if="$check_field('get','user_age')">{{ form['user_age'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','consultant_information') || $check_field('add','consultant_information') || $check_field('get','consultant_information')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								咨询师信息:
							</text>
						</view>
						<view class="diy_field diy_down diy_text_row diy_select_flex">
							<uni-data-select
									id="form_consultant_information"
									v-model="form['consultant_information']"
									:localdata="list_user_consultant_information"
									:clear="!disabledObj['consultant_information_isDisabled']"
									:disabled="disabledObj['consultant_information_isDisabled']"
									v-if="(form['consultant_information'] && $check_field('set','consultant_information')) || (!form['consultant_information'] && $check_field('add','consultant_information'))"
							></uni-data-select>
							<text v-else-if="$check_field('get','consultant_information')">{{ form['consultant_information'] }}</text>
						</view>
					</view>
							<view v-if="$check_field('set','name_of_consultant') || $check_field('add','name_of_consultant') || $check_field('get','name_of_consultant')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								咨询师姓名:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_name_of_consultant" v-model="form['name_of_consultant']" placeholder="请输入咨询师姓名" v-if="(form['name_of_consultant'] && $check_field('set','name_of_consultant')) || (!form['name_of_consultant'] && $check_field('add','name_of_consultant'))" :disabled="disabledObj['name_of_consultant_isDisabled']" />
							<text v-else-if="$check_field('get','name_of_consultant')">{{ form['name_of_consultant'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','time_of_appointment') || $check_field('add','time_of_appointment') || $check_field('get','time_of_appointment')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								预约时间:
							</text>
						</view>
								<!-- 日长 -->
						<view class="diy_field diy_datetime diy_text_row">
							<uni-datetime-picker :disabled="disabledObj['time_of_appointment_isDisabled']" type="datetime" id="form_time_of_appointment" v-model="form['time_of_appointment']" placeholder="请输入预约时间" v-if="(form['time_of_appointment'] && $check_field('set','time_of_appointment')) || (!form['time_of_appointment'] && $check_field('add','time_of_appointment'))" />
							<text v-else-if="$check_field('get','time_of_appointment')">{{ form['time_of_appointment'] }}</text>
						</view>
							</view>
	
				</view>
				<view class="row">
					<view class="col-12">
						<view class="btn_box">
							<button class="btn_submit primary_btn" @click="submit()">提交</button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import mixin from "@/libs/mixins/page.js";
export default {
	mixins:[mixin],
	components:{},
	data(){
		return{
			url_get_obj:"~/api/appointment_information/get_obj?",
			url_add:"~/api/appointment_information/add?",
			url_set:"~/api/appointment_information/set?",

			// 登录权限
			oauth: {
				"signIn": true,
				"user_group": []
			},

			// 查询条件
			query: {
					"user_information": 0,
						"user_name": "",
						"user_gender": "",
						"user_age": "",
						"consultant_information": 0,
						"name_of_consultant": "",
						"time_of_appointment": "",
					"appointment_information_id": 0
			},

			obj: {
					"user_information": 0, // 用户信息
						"user_name":  '', // 用户姓名
						"user_gender":  '', // 用户性别
						"user_age":  '', // 用户年龄
						"consultant_information": 0, // 咨询师信息
						"name_of_consultant":  '', // 咨询师姓名
						"time_of_appointment": this.$toTime(new Date().getTime(), "yyyy-MM-dd hh:mm:ss"),
					"appointment_information_id": 0,

			},

			// 表单字段
			form: {
					"user_information": 0, // 用户信息
						"user_name":  '', // 用户姓名
						"user_gender":  '', // 用户性别
						"user_age":  '', // 用户年龄
						"consultant_information": 0, // 咨询师信息
						"name_of_consultant":  '', // 咨询师姓名
						"time_of_appointment": this.$toTime(new Date().getTime(), "yyyy-MM-dd hh:mm:ss"),
					"appointment_information_id": 0,
			},
			disabledObj:{
					"user_information_isDisabled": false,
						"user_name_isDisabled": false,
						"user_gender_isDisabled": false,
						"user_age_isDisabled": false,
						"consultant_information_isDisabled": false,
						"name_of_consultant_isDisabled": false,
						"time_of_appointment_isDisabled": false,
				},

					// 用户列表
			list_user_user_information: [],
							list_user_gender: [],
									// 用户列表
			list_user_consultant_information: [],
					
			field:"appointment_information_id",
			table_key:"appointment_information",

		}
	},
	methods: {
				/**
		 * 获取系统用户用户列表
		 */
		async get_list_user_user_information() {
			// if(this.user_group !== "管理员" && this.form["user_information"] === 0) {
			//     this.form["user_information"] = this.user.user_id;
			// }
			var json = await this.$get("~/api/user/get_list?user_group=系统用户");
			if(json.result && json.result.list){
				json.result.list.map((o) => this.list_user_user_information.push({value:o.user_id,text:o.nickname + '-' + o.username}));
			}
			else if(json.error){
				console.error(json.error);
			}
		},
				async get_user_session_user_information(){
			var _this = this;
			var json = await this.$get("~/api/user_group/get_obj?name=系统用户");
			if(json.result && json.result.obj){
				var source_table = json.result.obj.source_table;
				var user_id = _this.$store.state.user.user_id;
				if (user_id){
					var url = "~/api/"+source_table+"/get_obj?"
					this.$get(url, {"user_id":_this.$store.state.user.user_id}, function(res) {
						if (res.result && res.result.obj) {
							var arr = []
							for (let key in res.result.obj) {
								arr.push(key)
							}
							var arrForm = []
							for (let key in _this.form) {
								arrForm.push(key)
							}
							_this.form["user_information"] = user_id
							_this.disabledObj['user_information' + '_isDisabled'] = true
							for (var i=0;i<arr.length;i++){
                if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
                  for (var j = 0; j < arrForm.length; j++) {
                    if (arr[i] === arrForm[j]) {
                      if (arr[i] !== "user_information") {
                        _this.form[arrForm[j]] = res.result.obj[arr[i]]
                        _this.disabledObj[arrForm[j] + '_isDisabled'] = true
                        break;
                      }
                    }
                  }
                }
							}
						}
					});
				}
			}
			else if(json.error){
				console.error(json.error);
			}
		},
	
	
				
	
				/**
		 * 获取用户性别列表
		 */
		async get_list_user_gender() {
					['男','女'].map((o) => this.list_user_gender.push({value:o,text:o}));
						},
			
	
				
	
					/**
		 * 获取咨询师用户列表
		 */
		async get_list_user_consultant_information() {
			// if(this.user_group !== "管理员" && this.form["consultant_information"] === 0) {
			//     this.form["consultant_information"] = this.user.user_id;
			// }
			var json = await this.$get("~/api/user/get_list?user_group=咨询师");
			if(json.result && json.result.list){
				json.result.list.map((o) => this.list_user_consultant_information.push({value:o.user_id,text:o.nickname + '-' + o.username}));
			}
			else if(json.error){
				console.error(json.error);
			}
		},
		
	
				
	
				
	
			change_file(key_name){
			var _self = this;
				this.$chooseFile().then(res=>{
					console.log(res)

						const uploadTask = uni.uploadFile({
							url: _self.$fullUrl("/api/feedback/upload?"),
							filePath: res[0].path,
							name: "file",
							formData: {
								i_want_to_customize: "test",
							},
							header: {
								"x-auth-token": _self.$store.state.user.token,
							},
							success: function(uploadFileRes) {
								console.log(uploadFileRes)
								var filename = JSON.parse(uploadFileRes.data).result.url;
								_self.form[key_name] = filename;
							},
						});

						uploadTask.onProgressUpdate(function(res) {
							_self.percent = res.progress;
							console.log("上传进度" + res.progress);
							console.log("已经上传的数据长度" + res.totalBytesSent);
							console.log(
								"预期需要上传的数据总长度" + res.totalBytesExpectedToSend
							);
						});

				})
		},
		change_img(key_name) {
			var _self = this;
			_self.upload_img_flag = false
			// 选择图像方法
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: function(res) {
					const tempFilePaths = res.tempFilePaths;
					const uploadTask = uni.uploadFile({
						url: _self.$fullUrl('/api/appointment_information/upload?'),
						filePath: tempFilePaths[0],
						name: 'file',
						formData: {
							'appointment_information': 'test'
						},
						header: {
							'x-auth-token': _self.$store.state.user.token
						},
						success: function(uploadFileRes) {
							var filename = JSON.parse(uploadFileRes.data).result.url
							var img_url = filename
							_self.form[key_name] = img_url
						}
					});

					uploadTask.onProgressUpdate(function(res) {
						_self.percent = res.progress;
						console.log('上传进度' + res.progress);
						console.log('已经上传的数据长度' + res.totalBytesSent);
						console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
					});
				},
				error: function(e) {
					console.log(e);
				}
			});
		},

		/**
		 * 获取对象后获取缓存表单
		 * @param {Object} json
		 * @param {Object} func
		 */
		get_obj_before(param){
			var form = uni.db.get("form");
			if (form) {
        delete(form.examine_state)
        delete(form.examine_reply)
				this.obj = uni.push(this.obj ,form);
				this.form = uni.push(this.form ,form);
			}
			var arr = []
			for (let key in form) {
				arr.push(key)
			}
			for (var i=0;i<arr.length;i++){
				this.disabledObj[arr[i] + '_isDisabled'] = true
			}
																if (this.form["time_of_appointment"] && JSON.stringify(this.form["time_of_appointment"]).indexOf("-")===-1) {
				this.form["time_of_appointment"] = this.$toTime(parseInt(this.form["time_of_appointment"]), "yyyy-MM-dd hh:mm:ss")
			}
					uni.db.del("form");
			return param;
		},

		/**
		 * 获取对象后获取缓存表单
		 * @param {Object} json
		 * @param {Object} func
		 */
		get_obj_after(json ,func){
			var form = uni.db.get("form");
			var obj = Object.assign({} ,form ,this.obj);
			if (form) {
				this.obj = uni.push(this.obj ,obj);
			}
			if (form) {
				this.form = uni.push(this.form ,form);
			}
			if(func){
				func(json);
			}
		},

	},
	onLoad(){
				this.get_user_session_user_information();
				this.get_list_user_user_information();
							this.get_list_user_gender();
											this.get_list_user_consultant_information();
								},
}
</script>

<style scoped>
	input{
		font-size: 10px;
	}

	.form_edit {
		background-color: #fff;
		margin-bottom: 0.5rem;
		padding: 1rem;
		font-size: 10px;
	}

	.item {
		display: flex;
		padding: 0.2rem 0;
	}

	.left_text {
		flex: 0 0 25%;
		display: flex;
		align-items: center;
	}

	.right_text {
		flex: 0 0 75%;
		border-bottom: 1px solid #eee;
	}
	.right_text.btn_warp{
		border-bottom: 0;
	}

	.btn_submit {
		text-align: center;
		background-color: #fff;
		padding: 0.3rem;
		margin: 0.1rem 1rem;
		border: 1px solid #eee;
		border-radius: 0.5rem;
	}

	.btn_submit:hover {
		opacity: 0.5;
	}
	.btn_add_img{
		color: #D3D3D3;
		text-align: center;
		border: 1px solid #eee;
		height: 5rem;
		width: 5rem;
		position: relative;
	}
	.btn_add_img text{
		font-size: 35px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}




</style>
<style scoped>
/*新样式*/
.diy_text_row {
  display: inline-block;
}
.container {
	margin-top:1rem ;
	padding: 1rem;
    -webkit-box-shadow: 0px 0px 0px #888888;
    box-shadow: 0px 0px 0px #888888;
}
.primary_btn{
		background-color: #22B8B8;
		color: #FFFFFF;
	}
	.btn_submit{
		padding: 0;
		margin-top:1rem ;
	}
	.row-item {
		padding: 10px 10px;
	    background: #f8f6fc;
		margin-bottom: 1rem;
	}
	.diy_field{
		padding-left: 1rem;
	}
	.diy_title{
		align-items: center;
        font-size: 14px;
        color: #333;
	}

	.row-item{
		display: flex !important;
		align-items: baseline;
	}
	.diy_select_flex{
		flex: 1;
	}
	.query_select{
		flex: 1;
		border-color: rgb(229, 229, 229);
		background-color: rgb(255, 255, 255);
		border-radius: 4px;
		box-sizing: border-box;
		flex: 1;
		width: 100%;
		line-height: 2;
		font-size: 14px;
		height: 2.4em;
		min-height: 2.4em;
		display: block;
		outline:none;
	}
</style>


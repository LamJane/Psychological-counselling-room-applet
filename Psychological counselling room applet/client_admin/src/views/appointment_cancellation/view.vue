<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','user_information') || $check_field('add','user_information') || $check_field('set','user_information')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="用户信息" prop="user_information">
													<el-select v-if="user_group === '管理员' || (form['appointment_cancellation_id'] && $check_field('set','user_information')) || (!form['appointment_cancellation_id'] && $check_field('add','user_information'))" id="user_information" v-model="form['user_information']" :disabled="disabledObj['user_information_isDisabled']">
							<el-option v-for="o in list_user_user_information" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
						<el-select v-else-if="$check_field('get','user_information')" id="user_information" v-model="form['user_information']" :disabled="true">
							<el-option v-for="o in list_user_user_information" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','user_name') || $check_field('add','user_name') || $check_field('set','user_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="用户姓名" prop="user_name">
												<el-input id="user_name" v-model="form['user_name']" placeholder="请输入用户姓名"
							  v-if="user_group === '管理员' || (form['appointment_cancellation_id'] && $check_field('set','user_name')) || (!form['appointment_cancellation_id'] && $check_field('add','user_name'))" :disabled="disabledObj['user_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','user_name')">{{form['user_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','user_gender') || $check_field('add','user_gender') || $check_field('set','user_gender')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="用户性别" prop="user_gender">
								<el-select id="user_gender" v-model="form['user_gender']"
						v-if="user_group === '管理员' || (form['appointment_cancellation_id'] && $check_field('set','user_gender')) || (!form['appointment_cancellation_id'] && $check_field('add','user_gender'))">
						<el-option v-for="o in list_user_gender" :key="o" :label="o" :value="o">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','user_gender')">{{form['user_gender']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','user_age') || $check_field('add','user_age') || $check_field('set','user_age')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="用户年龄" prop="user_age">
												<el-input id="user_age" v-model="form['user_age']" placeholder="请输入用户年龄"
							  v-if="user_group === '管理员' || (form['appointment_cancellation_id'] && $check_field('set','user_age')) || (!form['appointment_cancellation_id'] && $check_field('add','user_age'))" :disabled="disabledObj['user_age_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','user_age')">{{form['user_age']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','consultant_information') || $check_field('add','consultant_information') || $check_field('set','consultant_information')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="咨询师信息" prop="consultant_information">
													<el-select v-if="user_group === '管理员' || (form['appointment_cancellation_id'] && $check_field('set','consultant_information')) || (!form['appointment_cancellation_id'] && $check_field('add','consultant_information'))" id="consultant_information" v-model="form['consultant_information']" :disabled="disabledObj['consultant_information_isDisabled']">
							<el-option v-for="o in list_user_consultant_information" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
						<el-select v-else-if="$check_field('get','consultant_information')" id="consultant_information" v-model="form['consultant_information']" :disabled="true">
							<el-option v-for="o in list_user_consultant_information" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','name_of_consultant') || $check_field('add','name_of_consultant') || $check_field('set','name_of_consultant')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="咨询师姓名" prop="name_of_consultant">
												<el-input id="name_of_consultant" v-model="form['name_of_consultant']" placeholder="请输入咨询师姓名"
							  v-if="user_group === '管理员' || (form['appointment_cancellation_id'] && $check_field('set','name_of_consultant')) || (!form['appointment_cancellation_id'] && $check_field('add','name_of_consultant'))" :disabled="disabledObj['name_of_consultant_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','name_of_consultant')">{{form['name_of_consultant']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','time_of_appointment') || $check_field('add','time_of_appointment') || $check_field('set','time_of_appointment')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="预约时间" prop="time_of_appointment">
								<el-date-picker :disabled="disabledObj['time_of_appointment_isDisabled']" v-if="user_group === '管理员' || (form['appointment_cancellation_id'] && $check_field('set','time_of_appointment')) || (!form['appointment_cancellation_id'] && $check_field('add','time_of_appointment'))" id="time_of_appointment"
						v-model="form['time_of_appointment']" type="datetime" placeholder="选择日期时间">
					</el-date-picker>
					<div v-else-if="$check_field('get','time_of_appointment')">{{form['time_of_appointment']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','reason_for_cancellation') || $check_field('add','reason_for_cancellation') || $check_field('set','reason_for_cancellation')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="取消原因" prop="reason_for_cancellation">
								<el-input type="textarea" id="reason_for_cancellation" v-model="form['reason_for_cancellation']" placeholder="请输入取消原因"
						v-if="user_group === '管理员' || (form['appointment_cancellation_id'] && $check_field('set','reason_for_cancellation')) || (!form['appointment_cancellation_id'] && $check_field('add','reason_for_cancellation'))" :disabled="disabledObj['reason_for_cancellation_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','reason_for_cancellation')">{{form['reason_for_cancellation']}}</div>
							</el-form-item>
			</el-col>
					
	
	
	
	
	
	
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item>
					<el-button type="primary" @click="submit()">提交</el-button>
					<el-button @click="cancel()">取消</el-button>
				</el-form-item>
			</el-col>

		</el-form>
	</el-main>
</template>

<script>
	import mixin from "@/mixins/page.js";

	export default {
		mixins: [mixin],
		data() {
			return {
				field: "appointment_cancellation_id",
				url_add: "~/api/appointment_cancellation/add?",
				url_set: "~/api/appointment_cancellation/set?",
				url_get_obj: "~/api/appointment_cancellation/get_obj?",
				url_upload: "~/api/appointment_cancellation/upload?",

				query: {
					"appointment_cancellation_id": 0,
				},

				form: {
								"user_information": 0, // 用户信息
										"user_name":  '', // 用户姓名
										"user_gender":  '', // 用户性别
										"user_age":  '', // 用户年龄
										"consultant_information": 0, // 咨询师信息
										"name_of_consultant":  '', // 咨询师姓名
										"time_of_appointment":  '', // 预约时间
										"reason_for_cancellation":  '', // 取消原因
											"appointment_cancellation_id": 0, // ID
						
				},
				disabledObj:{
								"user_information_isDisabled": false,
										"user_name_isDisabled": false,
										"user_gender_isDisabled": false,
										"user_age_isDisabled": false,
										"consultant_information_isDisabled": false,
										"name_of_consultant_isDisabled": false,
										"time_of_appointment_isDisabled": false,
										"reason_for_cancellation_isDisabled": false,
										},

	
					// 用户列表
				list_user_user_information: [],
				
						// 用户性别选项列表
				list_user_gender: ['男','女'],
	
		
		
					// 用户列表
				list_user_consultant_information: [],
				
		
		
	
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
                    this.list_user_user_information = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					get_user_user_information(id){
				var obj = this.list_user_user_information.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
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
                    this.list_user_consultant_information = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					get_user_consultant_information(id){
				var obj = this.list_user_consultant_information.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},
			
	
			
	
			
	
		
			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
													// 获取缓存数据附加
				form = $.db.get("form");
							$.push(this.form ,form);
											
				if(this.form && form){
					Object.keys(this.form).forEach(key => {
						Object.keys(form).forEach(dbKey => {
							// if(dbKey === "charging_standard"){
							// 	this.form['charging_rules'] = form[dbKey];
							// 	this.disabledObj['charging_rules_isDisabled'] = true;
							// };
							if(key === dbKey){
								this.disabledObj[key+'_isDisabled'] = true;
							}
						})
					})
				}
													        if (this.form["time_of_appointment"].indexOf("-")===-1){
            this.form["time_of_appointment"] = this.$toTime(parseInt(this.form["time_of_appointment"]),"yyyy-MM-dd hh:mm:ss")
        }
								$.db.del("form");
				return param;
			},

			/**
			 * 获取对象之后
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json, func){


																			        if(this.form["time_of_appointment"]=="0000-00-00 00:00:00"){
          this.form["time_of_appointment"] = null;
        }
				if(parseInt(this.form["time_of_appointment"]) > 9999){
					this.form["time_of_appointment"] = this.$toTime(parseInt(this.form["time_of_appointment"]),"yyyy-MM-dd hh:mm:ss")
				}
						

			},

			/**
			 * 提交前验证事件
			 * @param {Object} 请求参数
			 * @return {String} 验证成功返回null, 失败返回错误提示
			 */
			submit_check(param) {
				let msg = null
																														return msg;
			},

			is_view(){
				var bl = this.user_group == "管理员";

				if(!bl){
					bl = this.$check_action('/appointment_cancellation/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/appointment_cancellation/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/appointment_cancellation/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/appointment_cancellation/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/appointment_cancellation/view','get');
					console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
				}

				console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

				return bl;
			},
			/**
			 * 上传文件
			 * @param {Object} param
			 */
			uploadimg(param) {
				this.uploadFile(param.file, "avatar");
			},

		},
		created() {
					this.get_list_user_user_information();
														this.get_list_user_consultant_information();
											},
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}




</style>

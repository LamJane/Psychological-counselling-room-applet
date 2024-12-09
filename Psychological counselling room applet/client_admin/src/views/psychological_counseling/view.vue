<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','consultant_information') || $check_field('add','consultant_information') || $check_field('set','consultant_information')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="咨询师信息" prop="consultant_information">
																		<div v-if="user_group !== '管理员'">
							{{ get_user_session_consultant_information(form['consultant_information']) }}
							<!--<el-input id="business_name" v-model="form['consultant_information']" placeholder="请输入咨询师信息"-->
							<!--v-if="user_group === '管理员' || (form['psychological_counseling_id'] && $check_field('set','consultant_information')) || (!form['psychological_counseling_id'] && $check_field('add','consultant_information'))" :disabled="disabledObj['consultant_information_isDisabled']"></el-input>-->
							<!--<div v-else-if="$check_field('get','consultant_information')">{{form['consultant_information']}}</div>-->
							<el-select v-if="user_group === '管理员' || (form['psychological_counseling_id'] && $check_field('set','consultant_information')) || (!form['psychological_counseling_id'] && $check_field('add','consultant_information'))" id="consultant_information" v-model="form['consultant_information']" :disabled="disabledObj['consultant_information_isDisabled']">
								<el-option v-for="o in list_user_consultant_information" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
							<el-select v-else-if="$check_field('get','consultant_information')" id="consultant_information" v-model="form['consultant_information']" :disabled="true">
								<el-option v-for="o in list_user_consultant_information" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
						</div>
						<el-select v-else id="consultant_information" v-model="form['consultant_information']" :disabled="disabledObj['consultant_information_isDisabled']">
							<el-option v-for="o in list_user_consultant_information" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
																</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','name_of_consultant') || $check_field('add','name_of_consultant') || $check_field('set','name_of_consultant')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="咨询师姓名" prop="name_of_consultant">
												<el-input id="name_of_consultant" v-model="form['name_of_consultant']" placeholder="请输入咨询师姓名"
							  v-if="user_group === '管理员' || (form['psychological_counseling_id'] && $check_field('set','name_of_consultant')) || (!form['psychological_counseling_id'] && $check_field('add','name_of_consultant'))" :disabled="disabledObj['name_of_consultant_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','name_of_consultant')">{{form['name_of_consultant']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','gender_of_consultant') || $check_field('add','gender_of_consultant') || $check_field('set','gender_of_consultant')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="咨询师性别" prop="gender_of_consultant">
								<el-select id="gender_of_consultant" v-model="form['gender_of_consultant']"
						v-if="user_group === '管理员' || (form['psychological_counseling_id'] && $check_field('set','gender_of_consultant')) || (!form['psychological_counseling_id'] && $check_field('add','gender_of_consultant'))">
						<el-option v-for="o in list_gender_of_consultant" :key="o" :label="o" :value="o">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','gender_of_consultant')">{{form['gender_of_consultant']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','professional_treatment') || $check_field('add','professional_treatment') || $check_field('set','professional_treatment')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="专业主治" prop="professional_treatment">
												<el-input id="professional_treatment" v-model="form['professional_treatment']" placeholder="请输入专业主治"
							  v-if="user_group === '管理员' || (form['psychological_counseling_id'] && $check_field('set','professional_treatment')) || (!form['psychological_counseling_id'] && $check_field('add','professional_treatment'))" :disabled="disabledObj['professional_treatment_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','professional_treatment')">{{form['professional_treatment']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','areas_of_expertise') || $check_field('add','areas_of_expertise') || $check_field('set','areas_of_expertise')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="擅长领域" prop="areas_of_expertise">
												<el-input id="areas_of_expertise" v-model="form['areas_of_expertise']" placeholder="请输入擅长领域"
							  v-if="user_group === '管理员' || (form['psychological_counseling_id'] && $check_field('set','areas_of_expertise')) || (!form['psychological_counseling_id'] && $check_field('add','areas_of_expertise'))" :disabled="disabledObj['areas_of_expertise_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','areas_of_expertise')">{{form['areas_of_expertise']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','introduction_to_consultants') || $check_field('add','introduction_to_consultants') || $check_field('set','introduction_to_consultants')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="咨询师简介" prop="introduction_to_consultants">
								<el-input type="textarea" id="introduction_to_consultants" v-model="form['introduction_to_consultants']" placeholder="请输入咨询师简介"
						v-if="user_group === '管理员' || (form['psychological_counseling_id'] && $check_field('set','introduction_to_consultants')) || (!form['psychological_counseling_id'] && $check_field('add','introduction_to_consultants'))" :disabled="disabledObj['introduction_to_consultants_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','introduction_to_consultants')">{{form['introduction_to_consultants']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','photos_of_consultants') || $check_field('add','photos_of_consultants') || $check_field('set','photos_of_consultants')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="咨询师照片" prop="photos_of_consultants">
								<el-upload :disabled="disabledObj['photos_of_consultants_isDisabled']" id="photos_of_consultants" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_photos_of_consultants"
						:show-file-list="false" v-if="user_group === '管理员' || (form['psychological_counseling_id'] && $check_field('set','photos_of_consultants')) || (!form['psychological_counseling_id'] && $check_field('add','photos_of_consultants'))">
						<img v-if="form['photos_of_consultants']" :src="$fullUrl(form['photos_of_consultants'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','photos_of_consultants')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['photos_of_consultants'])" :preview-src-list="[$fullUrl(form['photos_of_consultants'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
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
				field: "psychological_counseling_id",
				url_add: "~/api/psychological_counseling/add?",
				url_set: "~/api/psychological_counseling/set?",
				url_get_obj: "~/api/psychological_counseling/get_obj?",
				url_upload: "~/api/psychological_counseling/upload?",

				query: {
					"psychological_counseling_id": 0,
				},

				form: {
								"consultant_information": 0, // 咨询师信息
										"name_of_consultant":  '', // 咨询师姓名
										"gender_of_consultant":  '', // 咨询师性别
										"professional_treatment":  '', // 专业主治
										"areas_of_expertise":  '', // 擅长领域
										"introduction_to_consultants":  '', // 咨询师简介
										"photos_of_consultants":  '', // 咨询师照片
											"psychological_counseling_id": 0, // ID
						
				},
				disabledObj:{
								"consultant_information_isDisabled": false,
										"name_of_consultant_isDisabled": false,
										"gender_of_consultant_isDisabled": false,
										"professional_treatment_isDisabled": false,
										"areas_of_expertise_isDisabled": false,
										"introduction_to_consultants_isDisabled": false,
										"photos_of_consultants_isDisabled": false,
										},

	
					// 用户列表
				list_user_consultant_information: [],
						// 用户组
				group_user_consultant_information: "",
				
						// 咨询师性别选项列表
				list_gender_of_consultant: ['男','女'],
	
		
		
		
		
	
			}
		},
		methods: {


	
	
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
					/**
			 * 获取咨询师用户组
			 */
			async get_group_user_consultant_information() {
							this.form["consultant_information"] = this.user.user_id;
							var json = await this.$get("~/api/user_group/get_obj?name=咨询师");
				if(json.result && json.result.obj){
					this.group_user_consultant_information = json.result.obj;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_session_consultant_information(id){
				var _this = this;
				var user_id = {"user_id":id}
				var url = "~/api/"+_this.group_user_consultant_information.source_table+"/get_obj?"
				this.$get(url, user_id, function(res) {
					if (res.result && res.result.obj) {
						var arr = []
						for (let key in res.result.obj) {
							arr.push(key)
						}
						var arrForm = []
									for (let key in _this.form) {
							arrForm.push(key)
						}
												_this.form["consultant_information"] = id
									_this.disabledObj['consultant_information' + '_isDisabled'] = true
						for (var i=0;i<arr.length;i++){
						  if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
							for (var j = 0; j < arrForm.length; j++) {
							  if (arr[i] === arrForm[j]) {
								if (arr[i] !== "consultant_information") {
			                      _this.form[arrForm[j]] = res.result.obj[arr[i]]
			                      _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								  break;
								} else {
								  _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								}
							  }
							}
						  }
						}
					}
				});
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
			 * 上传咨询师照片
			 * @param {Object} param 图片参数
			 */
			upload_photos_of_consultants(param){
						this.uploadFile(param.file, "photos_of_consultants");
					},
	
	
		
			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
															
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
																		$.db.del("form");
				return param;
			},

			/**
			 * 获取对象之后
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json, func){


																					

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
					bl = this.$check_action('/psychological_counseling/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/psychological_counseling/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/psychological_counseling/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/psychological_counseling/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/psychological_counseling/view','get');
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
					this.get_list_user_consultant_information();
					this.get_group_user_consultant_information();
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

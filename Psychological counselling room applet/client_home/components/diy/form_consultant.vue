<template>
	<div>
			<view v-if="$check_register_field('add','name_of_consultant','/consultant/view')" class="col-12 col-md-6">
			<view class="diy_title">
				<text>
					咨询师姓名:
				</text>
			</view>
									<!-- 文本 -->
				<view class="diy_field diy_text">
					<input type="text" id="form_name_of_consultant" v-model="form['name_of_consultant']" @blur="handleBlur($event.target.value,'name_of_consultant')"  placeholder="请输入咨询师姓名" />
				</view>
							</view>
				<view v-if="$check_register_field('add','gender_of_consultant','/consultant/view')" class="col-12 col-md-6">
			<view class="diy_title">
				<text>
					咨询师性别:
				</text>
			</view>
					<!-- 选项 -->
			<view class="diy_field diy_down">
				<uni-data-select
						id="form_gender_of_consultant"
						v-model="form['gender_of_consultant']"
						:localdata="list_gender_of_consultant"
						@change="change_gender_of_consultant"
				></uni-data-select>
			</view>
				</view>
				<view v-if="$check_register_field('add','license_no','/consultant/view')" class="col-12 col-md-6">
			<view class="diy_title">
				<text>
					执照编号:
				</text>
			</view>
									<!-- 文本 -->
				<view class="diy_field diy_text">
					<input type="text" id="form_license_no" v-model="form['license_no']" @blur="handleBlur($event.target.value,'license_no')"  placeholder="请输入执照编号" />
				</view>
							</view>
				<view v-if="$check_register_field('add','id_number','/consultant/view')" class="col-12 col-md-6">
			<view class="diy_title">
				<text>
					身份证号:
				</text>
			</view>
									<!-- 文本 -->
				<view class="diy_field diy_text">
					<input type="text" id="form_id_number" v-model="form['id_number']" @blur="handleBlur($event.target.value,'id_number')"  placeholder="请输入身份证号" />
				</view>
							</view>
		</div>
</template>

<script>
	export default {
		model: {
			prop: "form",
			event: "change"
		},
		props: {
			form: {
				type: Object,
				default: ()=>{
					return {
						url_upload: "~/api/consultant/upload?",
					}
				}
			}
		},
		data(){
			return {
								"list_gender_of_consultant": [],
								}
		},
		methods: {
					/**
			 * 获取咨询师性别列表
			 */
			async get_list_gender_of_consultant() {
									['男','女'].map((o) => this.list_gender_of_consultant.push({value:o,text:o}));
											},
			change_gender_of_consultant(val) {
				if (val === "全部" || val === "") {
					this.$emit('change',{"value":"","type":"gender_of_consultant"})
				}else{
					this.$emit('change',{"value":val,"type":"gender_of_consultant"})
				}
			},
						/**
			 * 上传图片
			 * @param {Object} param文件参数
			 */
			change_img(key_name){
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
							url: _self.$fullUrl('/api/consultant/upload?'),
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								'i_want_to_customize': 'test'
							},
							header: {
								'x-auth-token': "null"
							},
							success: function(uploadFileRes) {
								var filename = JSON.parse(uploadFileRes.data).result.url
								_self.$delete(_self.form,key_name);
								_self.$set(_self.form,key_name,filename);
								console.log(_self.form[key_name])
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
			handleBlur(value,type){
				this.$emit('change',{value,type})
			}
		},
    mounted(){
						this.get_list_gender_of_consultant();
								}
	}
</script>

<style>
.col-md-6{
	display: flex;
	margin-bottom: 1.25rem;
	height: 36px;
}
.diy_title{
	/* flex: 1.2; */
	display: inline-block;
	width: 5.0625rem;
	margin-right: 0.3125rem;
	font-size: 0.875rem;
    color: #333;
		padding-top: 0.3125rem;
}
.diy_field{
	/* flex: 5; */
	display: inline-block;
	width: 100%;
	background: #ffffff;
	height: 2.25rem;
	line-height:  2.25rem;
	border-radius: 0.25rem;
	padding-left: 0.625rem;


	}
	.diy_field input{
		display: inline;
		font-size: 0.875rem;
	}
</style>

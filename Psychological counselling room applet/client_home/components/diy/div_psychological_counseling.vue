<template>
	<view class="diy_details diy_div_psychological_counseling">
		<view v-if="Object.keys(obj).length!==0" class="warp">
			<view class="container">
				<view class="row">
					<view v-if="$check_field('get','consultant_information')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>咨询师信息:</span>
						</view>
							<view class="diy_field diy_uid">
							<text>
								{{ get_user_consultant_information(obj['consultant_information']) }}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','name_of_consultant')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>咨询师姓名:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["name_of_consultant"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','gender_of_consultant')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>咨询师性别:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["gender_of_consultant"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','professional_treatment')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>专业主治:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["professional_treatment"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','areas_of_expertise')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>擅长领域:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["areas_of_expertise"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','introduction_to_consultants')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>咨询师简介:</span>
						</view>
							<view class="diy_field diy_desc">
							<text>
								{{ obj["introduction_to_consultants"] }}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','photos_of_consultants')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>咨询师照片:</span>
						</view>
							<view class="diy_field diy_img">
							<image style="width:100%;height:auto;" :src="$fullUrl(obj['photos_of_consultants'])" mode="widthFix"></image>
						</view>
						</view>
				</view>
			</view>
		</view>

			<view class="warp">
			<view class="container">
				<view class="row">
					<view class="col">
						<button type="button" class="diy_btn" @click="to_form('/pages/appointment_information/edit')" v-if="$check_action('/appointment_information/edit','add') || $check_action('/appointment_information/edit','set')" >在线预约</button>
					</view>
				</view>
			</view>
		</view>
		</view>
</template>

<script>
	import mixin from "@/libs/mixins/component.js";
	export default {
		mixins: [mixin],
		props: {
			obj_goods: {
				type: Object,
				default(){
					return {}
				}
			},
			query:{
				type: Object,
				default(){
					return {
						psychological_counseling_id: 0
					}
				}
			}
		},
		data() {
			return {
				obj_goods_type: {},
				obj: {},
					// 用户列表
				list_user_consultant_information: [],
										}
		},
		methods: {
			async get_obj_goods_type() {
				var res = await this.$get("~/api/goods_type/get_obj", {
					name: this.obj_goods.type
				})

				if (res.result.obj) {
					this.obj_goods_type = res.result.obj
				} else {
					console.log("没有请求到商品分类");
				}
			},
			async get_obj_by_goods() {
				var {
					source_table,
					source_field
				} = this.obj_goods_type
				var {
					source_id
				} = this.obj_goods
				var query = {}
				query[source_field] = source_id
				this.$get("~/api/" + source_table + "/get_obj", {}, (res) => {
					if (res.result.obj) {
						this.obj = res.result.obj
					} else {
						console.log("没有请求到商品分类");
					}
				})
			},
			async get_obj_by_id(){
				var res = await this.$get("~/api/psychological_counseling/get_obj", {
					psychological_counseling_id:this.query.psychological_counseling_id
				})

				if (res.result && res.result.obj) {
					this.obj = res.result.obj
				} else {
					console.log("没有请求到商品分类");
				}
			},
				/**
			 * 获取咨询师用户列表
			 */
			async get_list_user_consultant_information() {
				var json = await this.$get("~/api/user/get_list?user_group=咨询师");
				if(json.result && json.result.list){
					this.list_user_consultant_information = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_consultant_information(id){
				let obj = this.list_user_consultant_information;
				let ret = "";
				for(let i=0;i<obj.length;i++){
					if(obj[i].user_id==id){
						ret = obj[i].nickname+"-"+obj[i].username;
					}
				}
				return ret;
			},
									},
		created() {
				this.get_list_user_consultant_information();
									},
		async onLoad(){
			if (Object.keys(this.obj_goods).length !== 0) {
				await this.get_obj_goods_type();
				await this.get_obj_by_goods();
			} else if (this.query["psychological_counseling_id"] !==0) {
				await this.get_obj_by_id();
			}
		}
	}
</script>

<style scoped>
	.div_psychological_counseling_details {}

	.details {
		background-color: #fff;
		margin-bottom: 0.5rem;
		padding: 1rem;
		font-size: 10px;
	}

	.item {
		display: flex;
		padding: 0.2rem 0;
		border-bottom: 1px solid #eee;
	}

	.left_text {
		flex: 0 0 25%;
	}

	.right_text {
		flex: 0 0 75%;
	}
	.edit_nav{
		text-align: center;
		background-color: #fff;
		padding: 0.3rem;
		margin: 0.1rem 1rem;
		border: 1px solid #eee;
		border-radius: 0.5rem;
	}
</style>

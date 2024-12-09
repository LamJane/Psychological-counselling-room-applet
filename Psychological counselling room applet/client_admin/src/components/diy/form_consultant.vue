<template>
	<div>
			<el-form-item v-if="$check_register_field('add','name_of_consultant','/consultant/view')" label="咨询师姓名" prop="name_of_consultant">
				<el-input id="name_of_consultant" v-model="form['name_of_consultant']" placeholder="请输入咨询师姓名"></el-input>
				</el-form-item>
				<el-form-item v-if="$check_register_field('add','gender_of_consultant','/consultant/view')" label="咨询师性别" prop="gender_of_consultant">
				<el-select id="gender_of_consultant" v-model="form['gender_of_consultant']">
			<el-option v-for="o in list_gender_of_consultant" :key="o" :label="o" :value="o">
			</el-option>
		</el-select>
				</el-form-item>
				<el-form-item v-if="$check_register_field('add','license_no','/consultant/view')" label="执照编号" prop="license_no">
				<el-input id="license_no" v-model="form['license_no']" placeholder="请输入执照编号"></el-input>
				</el-form-item>
				<el-form-item v-if="$check_register_field('add','id_number','/consultant/view')" label="身份证号" prop="id_number">
				<el-input id="id_number" v-model="form['id_number']" placeholder="请输入身份证号"></el-input>
				</el-form-item>
	
	</div>
</template>

<script>
	import mixin from "@/mixins/component.js";

	export default {
		mixins: [mixin],
		props:{

			form:{
				type: Object,
				default: function(){
					return {
							"name_of_consultant":  '' ,
								"gender_of_consultant":  '' ,
								"license_no":  '' ,
								"id_number":  '' ,
						}
				}
			},

		},
		data() {
			return {
				field: "consultant_id",
				url_add: "~/api/consultant/add?",
				url_set: "~/api/consultant/set?",
				url_upload: "~/api/consultant/upload?",

						list_gender_of_consultant: ['男','女'],
			
				rules: {
					"name_of_consultant": [    {required: true,message: '咨询师姓名不能为空'},  ],
					"gender_of_consultant": [    {required: true,message: '咨询师性别不能为空'},  ],
					"license_no": [    {required: true,message: '执照编号不能为空'},  ],
					"id_number": [    {required: true,message: '身份证号不能为空'},  ],
				}

			}
		},
		methods: {

	
	
	

	
	
	

	
	
	

	
	
	

		},
		created() {
						}
	}
</script>

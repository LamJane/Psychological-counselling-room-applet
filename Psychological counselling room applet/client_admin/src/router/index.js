import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';
import login from '../views/login.vue';
import forgot from '../views/forgot.vue';
import register from '../views/register.vue';
Vue.use(VueRouter)

const routes = [
	// 主页
	{
		path: '/',
		name: 'index',
		component: index,
		meta: {
			index: 0,
			title: '首页'
		}
	},

	// 登录
	{
		path: '/login',
		name: 'login',
		component: login,
		meta: {
			index: 0,
			title: '登录'
		}
	},

	// 注册
	{
		path: '/register',
		name: 'register',
		component: register,
		meta: {
			index: 0,
			title: '注册'
		}
	},

	// 忘记密码
	{
		path: '/forgot',
		name: "forgot",
		component: forgot,
		meta: {
			index: 0,
			title: '忘记密码'
		}
	},

	// 修改密码
	{
		path: '/user/password',
		name: "password",
		component: () => import("../views/user/password.vue"),
		meta: {
			index: 0,
			title: '修改密码'
		}
	},

	// 视频播放页
	{
		path: "/media/video",
		name: "video",
		component: () => import('../views/media/video.vue'),
		meta: {
			index: 0,
			title: "视频"
		}
	},

	// 音频播放页
	{
		path: "/media/audio",
		name: "audio",
		component: () => import('../views/media/audio.vue'),
		meta: {
			index: 0,
			title: "音频"
		}
	},



	// 友情链接路由
	// {
	// 	path: '/link/table',
	// 	name: 'link_table',
	// 	component: () => import('../views/link/table.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '链接列表'
	// 	}
	// },
	// {
	// 	path: '/link/view',
	// 	name: 'link_view',
	// 	component: () => import('../views/link/view.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '链接详情'
	// 	}
	// },

	// 轮播图路由
	{
		path: '/slides/table',
		name: 'slides_table',
		component: () => import('../views/slides/table.vue'),
		meta: {
			index: 0,
			title: '轮播图列表'
		}
	},
	{
		path: '/slides/view',
		name: 'slides_view',
		component: () => import('../views/slides/view.vue'),
		meta: {
			index: 0,
			title: '轮播图详情'
		}
	},
		// 文章路由
	{
		path: '/article/table',
		name: 'article_table',
		component: () => import('../views/article/table.vue'),
		meta: {
			index: 0,
			title: '文章列表'
		}
	},
	{
		path: '/article/view',
		name: 'article_view',
		component: () => import('../views/article/view.vue'),
		meta: {
			index: 0,
			title: '文章详情'
		}
	},

	// 文章分类路由
	{
		path: '/article_type/table',
		name: 'article_type_table',
		component: () => import('../views/article_type/table.vue'),
		meta: {
			index: 0,
			title: '文章分类列表'
		}
	},
	{
		path: '/article_type/view',
		name: 'article_type_view',
		component: () => import('../views/article_type/view.vue'),
		meta: {
			index: 0,
			title: '文章分类详情'
		}
	},
	
	// 广告路由
	// {
	// 	path: '/ad/table',
	// 	name: 'ad_table',
	// 	component: () => import('../views/ad/table.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '广告列表'
	// 	}
	// },
	// {
	// 	path: '/ad/view',
	// 	name: 'ad_view',
	// 	component: () => import('../views/ad/view.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '广告详情'
	// 	}
	// },


	// 论坛路由
	{
		path: '/forum/table',
		name: 'forum_table',
		component: () => import('../views/forum/table.vue'),
		meta: {
			index: 0,
			title: '论坛列表'
		}
	},
	{
		path: '/forum/view',
		name: 'forum_view',
		component: () => import('../views/forum/view.vue'),
		meta: {
			index: 0,
			title: '论坛详情'
		}
	},

	// 论坛分类路由
	{
		path: '/forum_type/table',
		name: 'forum_type_table',
		component: () => import('../views/forum_type/table.vue'),
		meta: {
			index: 0,
			title: '论坛分类列表'
		}
	},
	{
		path: '/forum_type/view',
		name: 'forum_type_view',
		component: () => import('../views/forum_type/view.vue'),
		meta: {
			index: 0,
			title: '论坛分类详情'
		}
	},

	// 公告路由
	{
		path: '/notice/table',
		name: 'notice_table',
		component: () => import('../views/notice/table.vue'),
		meta: {
			index: 0,
			title: '公告信息列表'
		}
	},
	{
		path: '/notice/view',
		name: 'notice_view',
		component: () => import('../views/notice/view.vue'),
		meta: {
			index: 0,
			title: '公告信息详情'
		}
	},
	// 考试路由
	{
		path: '/exam/table',
		name: 'exam_table',
		component: () => import('../views/exam/table.vue'),
		meta: {
			index: 0,
			title: '考试管理'
		}
	},
	{
		path: '/exam/view',
		name: 'exam_view',
		component: () => import('../views/exam/view.vue'),
		meta: {
			index: 0,
			title: '考试详情'
		}
	},
	{
		path: '/question_table/table',
		name: 'question_table_table',
		component: () => import('../views/exam/question_table.vue'),
		meta: {
			index: 0,
			title: '题库列表'
		}
	},
	{
		path: '/question_view/view',
		name: 'question_view_view',
		component: () => import('../views/exam/question_view.vue'),
		meta: {
			index: 0,
			title: '题库详情'
		}
	},
	{
		path: '/answer_view/view',
		name: 'answer_view_view',
		component: () => import('../views/exam/answer_view.vue'),
		meta: {
			index: 0,
			title: '答题'
		}
	},
	{
		path: '/score_table/table',
		name: 'score_table_table',
		component: () => import('../views/exam/score_table.vue'),
		meta: {
			index: 0,
			title: '评分列表'
		}
	},
	{
		path: '/score_view/view',
		name: 'score_view_view',
		component: () => import('../views/exam/score_view.vue'),
		meta: {
			index: 0,
			title: '评分详情'
		}
	},


	// 评论路由
	{
		path: '/comment/table',
		name: 'comment_table',
		component: () => import('../views/comment/table.vue'),
		meta: {
			index: 0,
			title: '评论列表'
		}
	},
	{
		path: '/comment/view',
		name: 'comment_view',
		component: () => import('../views/comment/view.vue'),
		meta: {
			index: 0,
			title: '评论详情'
		}
	},

	// 系统用户路由
	{
		path: '/system_user/table',
		name: 'system_user_table',
		component: () => import('../views/system_user/table.vue'),
		meta: {
			index: 0,
			title: '系统用户列表'
		}
	},
	{
		path: '/system_user/view',
		name: 'system_user_view',
		component: () => import('../views/system_user/view.vue'),
		meta: {
			index: 0,
			title: '系统用户详情'
		}
	},
	// 咨询师路由
	{
		path: '/consultant/table',
		name: 'consultant_table',
		component: () => import('../views/consultant/table.vue'),
		meta: {
			index: 0,
			title: '咨询师列表'
		}
	},
	{
		path: '/consultant/view',
		name: 'consultant_view',
		component: () => import('../views/consultant/view.vue'),
		meta: {
			index: 0,
			title: '咨询师详情'
		}
	},
	// 心理咨询路由
	{
		path: '/psychological_counseling/table',
		name: 'psychological_counseling_table',
		component: () => import('../views/psychological_counseling/table.vue'),
		meta: {
			index: 0,
			title: '心理咨询列表'
		}
	},
	{
		path: '/psychological_counseling/view',
		name: 'psychological_counseling_view',
		component: () => import('../views/psychological_counseling/view.vue'),
		meta: {
			index: 0,
			title: '心理咨询详情'
		}
	},
	// 预约信息路由
	{
		path: '/appointment_information/table',
		name: 'appointment_information_table',
		component: () => import('../views/appointment_information/table.vue'),
		meta: {
			index: 0,
			title: '预约信息列表'
		}
	},
	{
		path: '/appointment_information/view',
		name: 'appointment_information_view',
		component: () => import('../views/appointment_information/view.vue'),
		meta: {
			index: 0,
			title: '预约信息详情'
		}
	},
	// 预约取消路由
	{
		path: '/appointment_cancellation/table',
		name: 'appointment_cancellation_table',
		component: () => import('../views/appointment_cancellation/table.vue'),
		meta: {
			index: 0,
			title: '预约取消列表'
		}
	},
	{
		path: '/appointment_cancellation/view',
		name: 'appointment_cancellation_view',
		component: () => import('../views/appointment_cancellation/view.vue'),
		meta: {
			index: 0,
			title: '预约取消详情'
		}
	},
	// 投诉信息路由
	{
		path: '/complaint_information/table',
		name: 'complaint_information_table',
		component: () => import('../views/complaint_information/table.vue'),
		meta: {
			index: 0,
			title: '投诉信息列表'
		}
	},
	{
		path: '/complaint_information/view',
		name: 'complaint_information_view',
		component: () => import('../views/complaint_information/view.vue'),
		meta: {
			index: 0,
			title: '投诉信息详情'
		}
	},

	// 用户路由
	{
		path: '/user/table',
		name: 'user_table',
		component: () => import('../views/user/table.vue'),
		meta: {
			index: 0,
			title: '用户列表'
		}
	},
	{
		path: '/user/view',
		name: 'user_view',
		component: () => import('../views/user/view.vue'),
		meta: {
			index: 0,
			title: '用户详情'
		}
	},
	{
		path: '/user/info',
		name: 'user_info',
		component: () => import('../views/user/info.vue'),
		meta: {
			index: 0,
			title: '个人信息'
		}
	},
	// 用户组路由
	{
		path: '/user_group/table',
		name: 'user_group_table',
		component: () => import('../views/user_group/table.vue'),
		meta: {
			index: 0,
			title: '用户组列表'
		}
	},
	{
		path: '/user_group/view',
		name: 'user_group_view',
		component: () => import('../views/user_group/view.vue'),
		meta: {
			index: 0,
			title: '用户组详情'
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	let token = to.query.token;
	if (token){
		$.db.set("token",token,120);
	}
	next();
})

router.afterEach((to, from, next) => {
	let title = "心理咨询室小程序-admin";
	document.title = title;
})

export default router

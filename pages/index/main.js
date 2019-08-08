/**
 * @auth banbu
 * @date 2019/08/06
 */
import server from './service'
import lang from './lang'
import { mapState,mapMutations } from "vuex";
export default {
	data() {
		return {
			title: 'Hello World'
		}
	},
	onLoad() {
		const that = this
		console.log(that.$i18n.locale);
	},
	computed: {
		i18n() {
			const that = this
			return lang[that.$i18n.locale]
		}		
	},
	methods: {
		// changeLanguages() {
		// 	const that = this
		// 	that.$i18n.locale = 'us'
		// 	that.i18n()
		// },
		go() {
			const that = this
			uni.navigateTo({
				url: '../language/language'
			});
		}
	}
}

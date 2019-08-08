<template>
	<view class="">
		<view class="uni-list-cell-db">
			<picker @change="bindPickerChange" :value="ind" :range="langList">
				<view class="uni-input">{{ langList[ind] }}</view>
			</picker>
		</view>
		<view class="">
			<button type="primary" @tap="go">返回</button>
		</view>
	</view>
</template>

<script>
	import lang from '../index/lang'
	export default {
		data() {
			return {
				value: '',
				langList:[],
				langType: ['cn', 'us', 'ja', 'ru'],
				ind: uni.getStorageSync('ind') || 0,
			};
		},
		computed: {
			i18n() {
				const that = this
				return lang[uni.getStorageSync('locale') || that.$i18n.locale]
			}
		},
		onShow() {
			console.log(uni.getStorageSync('ind'));
			console.log(this.i18n.title);
			uni.setNavigationBarTitle({
				title: lang[this.$i18n.locale].title
			});
			this.langList = lang[this.$i18n.locale].langList
		},
		methods: {
			bindPickerChange(e) {
				this.ind = e.target.value;
				this.$i18n.locale = this.langType[e.target.value];
				this.langList = lang[this.$i18n.locale].langList
				uni.setNavigationBarTitle({
					title: lang[this.$i18n.locale].title
				});
				uni.setStorageSync(
					'locale', this.langType[ e.target.value]
				);
				uni.setStorageSync(
					'ind', e.target.value
				);
			},
			go() {
				const that = this;
				uni.navigateTo({
					url: '../index/index?ind=' + that.ind
				});
			}
		}
	};
</script>

<style></style>

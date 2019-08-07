<template>
	<view class="uni-content">
		<view>{{T_D.keyword}} : {{T_D.keyword}}</view>
		<view style="margin-top:15px">{{T_D.search}} : {{T_D.search}}</view>
		<view style="margin-top:15px">{{T_D.staff}} : {{T_D.staff}}</view>
		<view style="margin-top:15px">{{T_D.service}} : {{T_D.service}}</view>
		<!-- <button type="primary" @tap="changeLanage">{{T_D.selectlanguage}}</button> -->
		<button  style="margin-top:15px"type="primary" @tap="gouserbing">跳转下一页按钮</button>
		
		<view class="uni-list-cell-db">
			选择下面的语言进行切换：
			<picker @change="bindPickerChange" :value="index" :range="array">
				<view style="background: #007AFF;" class="uni-input">{{array[index]}}</view>
			</picker>
		</view>
		
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex";
	export default {
		data() {
			return {
				T_D: {},
				array: [ '汉语','英语', '法语'],
				index: 0,
			};
		},
		onLoad: function() {
			this.index =  uni.getStorageSync('index') || this.index
			this._i18n.locale = uni.getStorageSync('locale') || this.locale
			this.array = uni.getStorageSync('array') ||this.array
			this.T_D = this._i18n.getLanguage().myhome;	
		},
		watch: {
			ind(newVal, oldval) {
				console.log(newVal);
				if (newVal == '0') {
					this._i18n.locale = 'zh_CN';
					this.array = ['汉语','英语', '法语']
					uni.setStorageSync(
						'array',this.array
					);
					uni.setStorageSync(
						'index',0
					);
					uni.setStorageSync(
						'locale', 'zh_CN'
					);
					this.index = 0

				} else if (newVal == '1') {
					this._i18n.locale = 'en';
					this.array = ['Chinese','English', 'Franch']
					uni.setStorageSync(
						'array',this.array
					);
					uni.setStorageSync(
						'index',1
					);
					this.index = 1
					uni.setStorageSync('locale', 'en');

				} else {
					this._i18n.locale = 'EN_franch';
					this.array = ['chinois', 'En anglais','français']
					uni.setStorageSync(
						'array',this.array
					);
					uni.setStorageSync(
						'index',2
					);
					uni.setStorageSync(
						'locale','EN_franch'
					);
					this.index = 2
				}

				this.T_D = this._i18n.locales[this._i18n.locale].myhome
			},
		},
		computed: {
			...mapState(["locale", 'ind']),
		},
		methods: {
			...mapMutations(["changestate", "changeind"]),
			changeLanage() {
				// this.changestate()
			},
			gouserbing() {
				uni.navigateTo({
					url: '../userbing/userbing'
				});
			},
			bindPickerChange: function(e) {
				// console.log('picker发送选择改变，携带值为', e.target.value)
				this.$store.commit('changeind', {
					ind: e.target.value
				})

			},
		}
	}
</script>

<style>
	.uni-input{
		background: #007AFF;
		height: 46px;
		line-height: 46px;
		color: #fff;
		font-size: 16px;
		text-align: center;
		border-radius: 4px;
		
	}
	.uni-list-cell-db{
		margin-top: 15px;
	}

</style>

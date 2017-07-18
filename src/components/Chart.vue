<template>
  <div id="myChart" :style="{ width:'500px', height:'500px'}">   
  </div>
</template>

<script>
export default {
	name:'hello',
	data(){
		return{
			msg:''
		}
	},
	mounted(){
		this.drawLine();
	},
	methods:{
		drawLine(){
			let myChart=this.$echarts.init(document.getElementById('myChart'));
			myChart.setOption({
				title:{ text:'在Vue中使用echarts'},
				tooltip:{},
				xAxis:{
					data:["早餐","午餐","晚餐","零食","饮料","交通","通话","服装","娱乐"]
				},
				yAxis:{},
				series:[{
					name:'花销',
					type:'bar',
					data:[5,20,15,10,4,25,10,50,40]
				}]
			})
		}
	}
};
</script>

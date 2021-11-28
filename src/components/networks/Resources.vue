<template>
    <div class="col-12 text-center py-2">
        <h5 class="font-size-15 mb-4">Resources</h5>
        <div class="col-12 d-flex">
          <div class="col box" >
              <div class="text-center">
                  <apexchart 
                  class="apex-charts"
                  type="radialBar"
                  height="150"
                  dir="ltr"
                  :series="RAMSeries"
                  :options="RAMChartOptions"
                  ></apexchart>
                  <p class="text-muted ">Total:{{}}</p>
              </div>
          </div>
          <div class="col box" >
              <div class="text-center">
                  <apexchart 
                  class="apex-charts"
                  type="radialBar"
                  height="150"
                  dir="ltr"
                  :series="CPUSeries"
                  :options="CPUChartOptions"
                  ></apexchart>
                  <p class="text-muted ">Total:{{}}</p>
              </div>
          </div>
          <div class="col box" >
              <div class="text-center">
                  <apexchart 
                  class="apex-charts"
                  type="radialBar"
                  height="150"
                  dir="ltr"
                  :series="NETSeries"
                  :options="NETChartOptions"
                  ></apexchart>
                  <p class="text-muted ">Total:{{}}</p>
              </div>
        
          </div>
        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component , Prop , Watch} from 'vue-property-decorator'
@Component({
    components:{}
})
export default class AccountList extends Vue{
    @Prop({default:() =>{return []}}) value:any;
    RAMSeries:any= [80];
    CPUSeries:any= [62];
    NETSeries:any= [36];
    mounted(){
      console.log('this is value ',this.value)
    }
    RAMChartOptions:any= {
        chart: {
          height: 150,
          type: "radialBar",
          sparkline: {
            enabled: true,
          },
        },
        colors: ["#0a869f"],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "90%",
              margin: 5, // margin is in pixels
            },
            hollow: {
              size: "60%",
            },

            dataLabels: {
              name: {
                show: true,
              },
              value: {
                offsetY: 5,
                fontSize: "16px",
              },
            },
          },
        },
        grid: {
          padding: {
            top: 0,
          },
        },
        stroke: {
          dashArray: 3,
        },
        labels: ["RAM"],
      }
    CPUChartOptions:any= {
        chart: {
          height: 150,
          type: "radialBar",
          sparkline: {
            enabled: true,
          },
        },
        colors: ["#001dc3"],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "90%",
              margin: 5, // margin is in pixels
            },
            hollow: {
              size: "60%",
            },

            dataLabels: {
              name: {
                show: true,
              },
              value: {
                offsetY: 5,
                fontSize: "16px",
              },
            },
          },
        },
        grid: {
          padding: {
            top: 0,
          },
        },
        stroke: {
          dashArray: 3,
        },
        labels: ["CPU"],
      }
    NETChartOptions:any= {
        chart: {
          height: 150,
          type: "radialBar",
          sparkline: {
            enabled: true,
          },
        },
        colors: ["#046011"],
        plotOptions: {
          radialBar: {
            startAngle:-90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "90%",
              margin: 5, // margin is in pixels
            },
            hollow: {
              size: "60%",
            },

            dataLabels: {
              name: {
                show: true,
              },
              value: {
                offsetY: 5,
                fontSize: "16px",
              },
            },
          },
        },
        grid: {
          padding: {
            top: 0,
          },
        },
        stroke: {
          dashArray: 3,
        },
        labels: ["NET"],
      }



}
</script>
<style lang="scss" scoped>
.box{
  background: #ffffff;
  margin:5px;
  margin-top:0px;
  box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 10%);

}
</style>
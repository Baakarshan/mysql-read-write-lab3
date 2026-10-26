/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 111.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 0.0], [2.8, 0.0], [2.9, 0.0], [3.0, 0.0], [3.1, 0.0], [3.2, 0.0], [3.3, 0.0], [3.4, 0.0], [3.5, 0.0], [3.6, 0.0], [3.7, 0.0], [3.8, 0.0], [3.9, 0.0], [4.0, 0.0], [4.1, 0.0], [4.2, 0.0], [4.3, 0.0], [4.4, 0.0], [4.5, 0.0], [4.6, 0.0], [4.7, 0.0], [4.8, 0.0], [4.9, 0.0], [5.0, 0.0], [5.1, 0.0], [5.2, 0.0], [5.3, 0.0], [5.4, 0.0], [5.5, 0.0], [5.6, 0.0], [5.7, 0.0], [5.8, 0.0], [5.9, 0.0], [6.0, 0.0], [6.1, 0.0], [6.2, 0.0], [6.3, 0.0], [6.4, 0.0], [6.5, 0.0], [6.6, 0.0], [6.7, 0.0], [6.8, 0.0], [6.9, 0.0], [7.0, 0.0], [7.1, 0.0], [7.2, 1.0], [7.3, 1.0], [7.4, 1.0], [7.5, 1.0], [7.6, 1.0], [7.7, 1.0], [7.8, 1.0], [7.9, 1.0], [8.0, 1.0], [8.1, 1.0], [8.2, 1.0], [8.3, 1.0], [8.4, 1.0], [8.5, 1.0], [8.6, 1.0], [8.7, 1.0], [8.8, 1.0], [8.9, 1.0], [9.0, 1.0], [9.1, 1.0], [9.2, 1.0], [9.3, 1.0], [9.4, 1.0], [9.5, 1.0], [9.6, 1.0], [9.7, 1.0], [9.8, 1.0], [9.9, 1.0], [10.0, 1.0], [10.1, 1.0], [10.2, 1.0], [10.3, 1.0], [10.4, 1.0], [10.5, 1.0], [10.6, 1.0], [10.7, 1.0], [10.8, 1.0], [10.9, 1.0], [11.0, 1.0], [11.1, 1.0], [11.2, 1.0], [11.3, 1.0], [11.4, 1.0], [11.5, 1.0], [11.6, 1.0], [11.7, 1.0], [11.8, 1.0], [11.9, 1.0], [12.0, 1.0], [12.1, 1.0], [12.2, 1.0], [12.3, 1.0], [12.4, 1.0], [12.5, 1.0], [12.6, 1.0], [12.7, 1.0], [12.8, 1.0], [12.9, 1.0], [13.0, 1.0], [13.1, 1.0], [13.2, 1.0], [13.3, 1.0], [13.4, 1.0], [13.5, 1.0], [13.6, 1.0], [13.7, 1.0], [13.8, 1.0], [13.9, 1.0], [14.0, 1.0], [14.1, 1.0], [14.2, 1.0], [14.3, 1.0], [14.4, 1.0], [14.5, 1.0], [14.6, 1.0], [14.7, 1.0], [14.8, 1.0], [14.9, 1.0], [15.0, 1.0], [15.1, 1.0], [15.2, 1.0], [15.3, 1.0], [15.4, 1.0], [15.5, 1.0], [15.6, 1.0], [15.7, 1.0], [15.8, 1.0], [15.9, 1.0], [16.0, 1.0], [16.1, 1.0], [16.2, 1.0], [16.3, 1.0], [16.4, 1.0], [16.5, 1.0], [16.6, 1.0], [16.7, 1.0], [16.8, 1.0], [16.9, 1.0], [17.0, 1.0], [17.1, 1.0], [17.2, 1.0], [17.3, 1.0], [17.4, 1.0], [17.5, 1.0], [17.6, 1.0], [17.7, 1.0], [17.8, 1.0], [17.9, 1.0], [18.0, 1.0], [18.1, 1.0], [18.2, 1.0], [18.3, 1.0], [18.4, 1.0], [18.5, 1.0], [18.6, 1.0], [18.7, 1.0], [18.8, 1.0], [18.9, 1.0], [19.0, 1.0], [19.1, 1.0], [19.2, 1.0], [19.3, 1.0], [19.4, 1.0], [19.5, 1.0], [19.6, 1.0], [19.7, 1.0], [19.8, 1.0], [19.9, 1.0], [20.0, 1.0], [20.1, 1.0], [20.2, 1.0], [20.3, 1.0], [20.4, 1.0], [20.5, 1.0], [20.6, 1.0], [20.7, 1.0], [20.8, 1.0], [20.9, 1.0], [21.0, 1.0], [21.1, 1.0], [21.2, 1.0], [21.3, 1.0], [21.4, 1.0], [21.5, 1.0], [21.6, 1.0], [21.7, 1.0], [21.8, 1.0], [21.9, 1.0], [22.0, 1.0], [22.1, 1.0], [22.2, 1.0], [22.3, 1.0], [22.4, 1.0], [22.5, 1.0], [22.6, 1.0], [22.7, 1.0], [22.8, 1.0], [22.9, 1.0], [23.0, 1.0], [23.1, 1.0], [23.2, 1.0], [23.3, 1.0], [23.4, 1.0], [23.5, 1.0], [23.6, 1.0], [23.7, 1.0], [23.8, 1.0], [23.9, 1.0], [24.0, 1.0], [24.1, 1.0], [24.2, 1.0], [24.3, 1.0], [24.4, 1.0], [24.5, 1.0], [24.6, 1.0], [24.7, 1.0], [24.8, 1.0], [24.9, 1.0], [25.0, 1.0], [25.1, 1.0], [25.2, 1.0], [25.3, 1.0], [25.4, 1.0], [25.5, 1.0], [25.6, 1.0], [25.7, 1.0], [25.8, 1.0], [25.9, 1.0], [26.0, 1.0], [26.1, 1.0], [26.2, 1.0], [26.3, 1.0], [26.4, 1.0], [26.5, 1.0], [26.6, 1.0], [26.7, 1.0], [26.8, 1.0], [26.9, 1.0], [27.0, 1.0], [27.1, 1.0], [27.2, 1.0], [27.3, 1.0], [27.4, 1.0], [27.5, 1.0], [27.6, 1.0], [27.7, 1.0], [27.8, 1.0], [27.9, 1.0], [28.0, 1.0], [28.1, 1.0], [28.2, 1.0], [28.3, 1.0], [28.4, 1.0], [28.5, 1.0], [28.6, 1.0], [28.7, 1.0], [28.8, 1.0], [28.9, 1.0], [29.0, 1.0], [29.1, 1.0], [29.2, 1.0], [29.3, 1.0], [29.4, 1.0], [29.5, 1.0], [29.6, 1.0], [29.7, 1.0], [29.8, 1.0], [29.9, 1.0], [30.0, 1.0], [30.1, 1.0], [30.2, 1.0], [30.3, 1.0], [30.4, 1.0], [30.5, 1.0], [30.6, 1.0], [30.7, 1.0], [30.8, 1.0], [30.9, 1.0], [31.0, 1.0], [31.1, 1.0], [31.2, 1.0], [31.3, 1.0], [31.4, 1.0], [31.5, 1.0], [31.6, 1.0], [31.7, 1.0], [31.8, 1.0], [31.9, 1.0], [32.0, 1.0], [32.1, 1.0], [32.2, 1.0], [32.3, 1.0], [32.4, 1.0], [32.5, 1.0], [32.6, 1.0], [32.7, 1.0], [32.8, 1.0], [32.9, 1.0], [33.0, 1.0], [33.1, 1.0], [33.2, 1.0], [33.3, 1.0], [33.4, 1.0], [33.5, 1.0], [33.6, 1.0], [33.7, 1.0], [33.8, 1.0], [33.9, 1.0], [34.0, 1.0], [34.1, 1.0], [34.2, 1.0], [34.3, 1.0], [34.4, 1.0], [34.5, 1.0], [34.6, 1.0], [34.7, 1.0], [34.8, 1.0], [34.9, 1.0], [35.0, 1.0], [35.1, 1.0], [35.2, 1.0], [35.3, 1.0], [35.4, 1.0], [35.5, 1.0], [35.6, 1.0], [35.7, 1.0], [35.8, 1.0], [35.9, 1.0], [36.0, 1.0], [36.1, 1.0], [36.2, 1.0], [36.3, 1.0], [36.4, 1.0], [36.5, 1.0], [36.6, 1.0], [36.7, 1.0], [36.8, 1.0], [36.9, 1.0], [37.0, 1.0], [37.1, 1.0], [37.2, 1.0], [37.3, 1.0], [37.4, 1.0], [37.5, 1.0], [37.6, 1.0], [37.7, 1.0], [37.8, 1.0], [37.9, 1.0], [38.0, 1.0], [38.1, 1.0], [38.2, 1.0], [38.3, 1.0], [38.4, 1.0], [38.5, 1.0], [38.6, 1.0], [38.7, 1.0], [38.8, 1.0], [38.9, 1.0], [39.0, 1.0], [39.1, 1.0], [39.2, 1.0], [39.3, 1.0], [39.4, 1.0], [39.5, 1.0], [39.6, 1.0], [39.7, 1.0], [39.8, 1.0], [39.9, 1.0], [40.0, 1.0], [40.1, 1.0], [40.2, 1.0], [40.3, 1.0], [40.4, 1.0], [40.5, 1.0], [40.6, 1.0], [40.7, 1.0], [40.8, 1.0], [40.9, 1.0], [41.0, 1.0], [41.1, 1.0], [41.2, 1.0], [41.3, 1.0], [41.4, 1.0], [41.5, 1.0], [41.6, 1.0], [41.7, 1.0], [41.8, 1.0], [41.9, 1.0], [42.0, 1.0], [42.1, 1.0], [42.2, 1.0], [42.3, 1.0], [42.4, 1.0], [42.5, 1.0], [42.6, 1.0], [42.7, 1.0], [42.8, 1.0], [42.9, 1.0], [43.0, 1.0], [43.1, 1.0], [43.2, 1.0], [43.3, 1.0], [43.4, 1.0], [43.5, 1.0], [43.6, 1.0], [43.7, 1.0], [43.8, 1.0], [43.9, 1.0], [44.0, 1.0], [44.1, 1.0], [44.2, 1.0], [44.3, 1.0], [44.4, 1.0], [44.5, 1.0], [44.6, 1.0], [44.7, 1.0], [44.8, 1.0], [44.9, 1.0], [45.0, 1.0], [45.1, 1.0], [45.2, 1.0], [45.3, 1.0], [45.4, 1.0], [45.5, 1.0], [45.6, 1.0], [45.7, 1.0], [45.8, 1.0], [45.9, 1.0], [46.0, 1.0], [46.1, 1.0], [46.2, 1.0], [46.3, 1.0], [46.4, 1.0], [46.5, 1.0], [46.6, 1.0], [46.7, 1.0], [46.8, 1.0], [46.9, 1.0], [47.0, 1.0], [47.1, 1.0], [47.2, 1.0], [47.3, 1.0], [47.4, 1.0], [47.5, 1.0], [47.6, 1.0], [47.7, 1.0], [47.8, 1.0], [47.9, 1.0], [48.0, 1.0], [48.1, 1.0], [48.2, 1.0], [48.3, 1.0], [48.4, 1.0], [48.5, 1.0], [48.6, 1.0], [48.7, 1.0], [48.8, 1.0], [48.9, 1.0], [49.0, 1.0], [49.1, 1.0], [49.2, 1.0], [49.3, 1.0], [49.4, 1.0], [49.5, 1.0], [49.6, 1.0], [49.7, 1.0], [49.8, 1.0], [49.9, 1.0], [50.0, 1.0], [50.1, 1.0], [50.2, 1.0], [50.3, 1.0], [50.4, 1.0], [50.5, 1.0], [50.6, 1.0], [50.7, 1.0], [50.8, 1.0], [50.9, 1.0], [51.0, 1.0], [51.1, 1.0], [51.2, 1.0], [51.3, 1.0], [51.4, 1.0], [51.5, 1.0], [51.6, 1.0], [51.7, 1.0], [51.8, 1.0], [51.9, 1.0], [52.0, 1.0], [52.1, 1.0], [52.2, 1.0], [52.3, 1.0], [52.4, 1.0], [52.5, 1.0], [52.6, 1.0], [52.7, 1.0], [52.8, 1.0], [52.9, 1.0], [53.0, 1.0], [53.1, 1.0], [53.2, 1.0], [53.3, 1.0], [53.4, 1.0], [53.5, 1.0], [53.6, 1.0], [53.7, 1.0], [53.8, 1.0], [53.9, 1.0], [54.0, 1.0], [54.1, 1.0], [54.2, 1.0], [54.3, 1.0], [54.4, 1.0], [54.5, 1.0], [54.6, 1.0], [54.7, 1.0], [54.8, 1.0], [54.9, 1.0], [55.0, 1.0], [55.1, 1.0], [55.2, 1.0], [55.3, 1.0], [55.4, 1.0], [55.5, 1.0], [55.6, 1.0], [55.7, 1.0], [55.8, 1.0], [55.9, 1.0], [56.0, 1.0], [56.1, 1.0], [56.2, 1.0], [56.3, 1.0], [56.4, 1.0], [56.5, 1.0], [56.6, 1.0], [56.7, 1.0], [56.8, 1.0], [56.9, 1.0], [57.0, 1.0], [57.1, 1.0], [57.2, 1.0], [57.3, 1.0], [57.4, 1.0], [57.5, 1.0], [57.6, 1.0], [57.7, 1.0], [57.8, 1.0], [57.9, 1.0], [58.0, 1.0], [58.1, 1.0], [58.2, 1.0], [58.3, 1.0], [58.4, 1.0], [58.5, 1.0], [58.6, 1.0], [58.7, 1.0], [58.8, 1.0], [58.9, 1.0], [59.0, 1.0], [59.1, 1.0], [59.2, 1.0], [59.3, 1.0], [59.4, 1.0], [59.5, 1.0], [59.6, 1.0], [59.7, 1.0], [59.8, 1.0], [59.9, 1.0], [60.0, 1.0], [60.1, 1.0], [60.2, 1.0], [60.3, 1.0], [60.4, 1.0], [60.5, 1.0], [60.6, 1.0], [60.7, 1.0], [60.8, 1.0], [60.9, 1.0], [61.0, 1.0], [61.1, 1.0], [61.2, 1.0], [61.3, 1.0], [61.4, 1.0], [61.5, 1.0], [61.6, 1.0], [61.7, 1.0], [61.8, 1.0], [61.9, 1.0], [62.0, 1.0], [62.1, 1.0], [62.2, 1.0], [62.3, 1.0], [62.4, 1.0], [62.5, 1.0], [62.6, 1.0], [62.7, 1.0], [62.8, 1.0], [62.9, 1.0], [63.0, 1.0], [63.1, 1.0], [63.2, 1.0], [63.3, 1.0], [63.4, 1.0], [63.5, 1.0], [63.6, 1.0], [63.7, 1.0], [63.8, 1.0], [63.9, 1.0], [64.0, 1.0], [64.1, 1.0], [64.2, 1.0], [64.3, 1.0], [64.4, 1.0], [64.5, 1.0], [64.6, 1.0], [64.7, 1.0], [64.8, 1.0], [64.9, 1.0], [65.0, 1.0], [65.1, 1.0], [65.2, 1.0], [65.3, 1.0], [65.4, 1.0], [65.5, 1.0], [65.6, 1.0], [65.7, 1.0], [65.8, 1.0], [65.9, 1.0], [66.0, 1.0], [66.1, 1.0], [66.2, 1.0], [66.3, 1.0], [66.4, 1.0], [66.5, 1.0], [66.6, 1.0], [66.7, 1.0], [66.8, 1.0], [66.9, 1.0], [67.0, 1.0], [67.1, 1.0], [67.2, 1.0], [67.3, 1.0], [67.4, 1.0], [67.5, 1.0], [67.6, 1.0], [67.7, 1.0], [67.8, 1.0], [67.9, 1.0], [68.0, 1.0], [68.1, 1.0], [68.2, 1.0], [68.3, 1.0], [68.4, 1.0], [68.5, 1.0], [68.6, 1.0], [68.7, 1.0], [68.8, 1.0], [68.9, 1.0], [69.0, 1.0], [69.1, 1.0], [69.2, 1.0], [69.3, 1.0], [69.4, 1.0], [69.5, 1.0], [69.6, 1.0], [69.7, 1.0], [69.8, 1.0], [69.9, 1.0], [70.0, 1.0], [70.1, 1.0], [70.2, 1.0], [70.3, 1.0], [70.4, 1.0], [70.5, 1.0], [70.6, 1.0], [70.7, 1.0], [70.8, 1.0], [70.9, 1.0], [71.0, 1.0], [71.1, 1.0], [71.2, 1.0], [71.3, 1.0], [71.4, 1.0], [71.5, 1.0], [71.6, 1.0], [71.7, 1.0], [71.8, 1.0], [71.9, 1.0], [72.0, 1.0], [72.1, 1.0], [72.2, 1.0], [72.3, 1.0], [72.4, 1.0], [72.5, 1.0], [72.6, 1.0], [72.7, 1.0], [72.8, 1.0], [72.9, 1.0], [73.0, 1.0], [73.1, 1.0], [73.2, 1.0], [73.3, 1.0], [73.4, 1.0], [73.5, 1.0], [73.6, 1.0], [73.7, 1.0], [73.8, 1.0], [73.9, 1.0], [74.0, 1.0], [74.1, 1.0], [74.2, 1.0], [74.3, 1.0], [74.4, 1.0], [74.5, 1.0], [74.6, 1.0], [74.7, 1.0], [74.8, 1.0], [74.9, 1.0], [75.0, 1.0], [75.1, 1.0], [75.2, 1.0], [75.3, 1.0], [75.4, 1.0], [75.5, 1.0], [75.6, 1.0], [75.7, 1.0], [75.8, 1.0], [75.9, 1.0], [76.0, 1.0], [76.1, 1.0], [76.2, 1.0], [76.3, 1.0], [76.4, 1.0], [76.5, 1.0], [76.6, 1.0], [76.7, 1.0], [76.8, 1.0], [76.9, 1.0], [77.0, 1.0], [77.1, 1.0], [77.2, 1.0], [77.3, 1.0], [77.4, 1.0], [77.5, 1.0], [77.6, 1.0], [77.7, 1.0], [77.8, 1.0], [77.9, 1.0], [78.0, 1.0], [78.1, 1.0], [78.2, 1.0], [78.3, 1.0], [78.4, 1.0], [78.5, 1.0], [78.6, 1.0], [78.7, 1.0], [78.8, 1.0], [78.9, 1.0], [79.0, 1.0], [79.1, 1.0], [79.2, 1.0], [79.3, 1.0], [79.4, 1.0], [79.5, 1.0], [79.6, 1.0], [79.7, 1.0], [79.8, 1.0], [79.9, 1.0], [80.0, 1.0], [80.1, 1.0], [80.2, 1.0], [80.3, 1.0], [80.4, 1.0], [80.5, 1.0], [80.6, 1.0], [80.7, 1.0], [80.8, 1.0], [80.9, 1.0], [81.0, 1.0], [81.1, 1.0], [81.2, 1.0], [81.3, 1.0], [81.4, 1.0], [81.5, 1.0], [81.6, 1.0], [81.7, 1.0], [81.8, 1.0], [81.9, 1.0], [82.0, 1.0], [82.1, 1.0], [82.2, 1.0], [82.3, 1.0], [82.4, 1.0], [82.5, 1.0], [82.6, 1.0], [82.7, 1.0], [82.8, 1.0], [82.9, 1.0], [83.0, 1.0], [83.1, 1.0], [83.2, 1.0], [83.3, 1.0], [83.4, 1.0], [83.5, 1.0], [83.6, 1.0], [83.7, 1.0], [83.8, 1.0], [83.9, 1.0], [84.0, 1.0], [84.1, 1.0], [84.2, 1.0], [84.3, 1.0], [84.4, 1.0], [84.5, 1.0], [84.6, 1.0], [84.7, 1.0], [84.8, 1.0], [84.9, 1.0], [85.0, 1.0], [85.1, 1.0], [85.2, 1.0], [85.3, 1.0], [85.4, 1.0], [85.5, 1.0], [85.6, 1.0], [85.7, 1.0], [85.8, 1.0], [85.9, 1.0], [86.0, 1.0], [86.1, 1.0], [86.2, 1.0], [86.3, 1.0], [86.4, 1.0], [86.5, 1.0], [86.6, 1.0], [86.7, 1.0], [86.8, 1.0], [86.9, 1.0], [87.0, 1.0], [87.1, 1.0], [87.2, 1.0], [87.3, 1.0], [87.4, 1.0], [87.5, 1.0], [87.6, 1.0], [87.7, 1.0], [87.8, 1.0], [87.9, 1.0], [88.0, 1.0], [88.1, 1.0], [88.2, 1.0], [88.3, 1.0], [88.4, 1.0], [88.5, 1.0], [88.6, 1.0], [88.7, 1.0], [88.8, 1.0], [88.9, 1.0], [89.0, 1.0], [89.1, 1.0], [89.2, 1.0], [89.3, 1.0], [89.4, 1.0], [89.5, 1.0], [89.6, 1.0], [89.7, 1.0], [89.8, 1.0], [89.9, 1.0], [90.0, 1.0], [90.1, 1.0], [90.2, 1.0], [90.3, 1.0], [90.4, 1.0], [90.5, 1.0], [90.6, 1.0], [90.7, 1.0], [90.8, 1.0], [90.9, 1.0], [91.0, 1.0], [91.1, 1.0], [91.2, 1.0], [91.3, 1.0], [91.4, 1.0], [91.5, 1.0], [91.6, 1.0], [91.7, 1.0], [91.8, 1.0], [91.9, 1.0], [92.0, 1.0], [92.1, 1.0], [92.2, 1.0], [92.3, 1.0], [92.4, 1.0], [92.5, 1.0], [92.6, 1.0], [92.7, 1.0], [92.8, 1.0], [92.9, 1.0], [93.0, 1.0], [93.1, 1.0], [93.2, 1.0], [93.3, 1.0], [93.4, 1.0], [93.5, 1.0], [93.6, 1.0], [93.7, 1.0], [93.8, 1.0], [93.9, 1.0], [94.0, 1.0], [94.1, 1.0], [94.2, 1.0], [94.3, 1.0], [94.4, 1.0], [94.5, 1.0], [94.6, 1.0], [94.7, 1.0], [94.8, 1.0], [94.9, 1.0], [95.0, 1.0], [95.1, 1.0], [95.2, 1.0], [95.3, 1.0], [95.4, 1.0], [95.5, 1.0], [95.6, 1.0], [95.7, 1.0], [95.8, 1.0], [95.9, 1.0], [96.0, 1.0], [96.1, 1.0], [96.2, 1.0], [96.3, 1.0], [96.4, 1.0], [96.5, 1.0], [96.6, 1.0], [96.7, 1.0], [96.8, 1.0], [96.9, 1.0], [97.0, 1.0], [97.1, 1.0], [97.2, 1.0], [97.3, 1.0], [97.4, 1.0], [97.5, 1.0], [97.6, 1.0], [97.7, 1.0], [97.8, 1.0], [97.9, 1.0], [98.0, 1.0], [98.1, 1.0], [98.2, 1.0], [98.3, 1.0], [98.4, 1.0], [98.5, 2.0], [98.6, 2.0], [98.7, 2.0], [98.8, 2.0], [98.9, 2.0], [99.0, 2.0], [99.1, 2.0], [99.2, 2.0], [99.3, 2.0], [99.4, 2.0], [99.5, 2.0], [99.6, 3.0], [99.7, 3.0], [99.8, 4.0], [99.9, 6.0]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 58158.0, "series": [{"data": [[0.0, 58158.0], [100.0, 1.0]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 58159.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 58159.0, "series": [{"data": [[0.0, 58159.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.792666013E12, "maxY": 1.0, "series": [{"data": [[1.792666021E12, 1.0], [1.792666064E12, 1.0], [1.792666019E12, 1.0], [1.792666062E12, 1.0], [1.792666017E12, 1.0], [1.79266606E12, 1.0], [1.792666025E12, 1.0], [1.792666068E12, 1.0], [1.792666023E12, 1.0], [1.792666066E12, 1.0], [1.792666052E12, 1.0], [1.79266605E12, 1.0], [1.792666015E12, 1.0], [1.792666058E12, 1.0], [1.792666013E12, 1.0], [1.792666056E12, 1.0], [1.792666054E12, 1.0], [1.792666042E12, 1.0], [1.79266604E12, 1.0], [1.792666038E12, 1.0], [1.792666048E12, 1.0], [1.792666046E12, 1.0], [1.792666044E12, 1.0], [1.792666032E12, 1.0], [1.79266603E12, 1.0], [1.792666073E12, 1.0], [1.792666071E12, 1.0], [1.792666028E12, 1.0], [1.792666036E12, 1.0], [1.792666034E12, 1.0], [1.792666063E12, 1.0], [1.79266602E12, 1.0], [1.792666018E12, 1.0], [1.792666061E12, 1.0], [1.792666059E12, 1.0], [1.792666026E12, 1.0], [1.792666069E12, 1.0], [1.792666067E12, 1.0], [1.792666024E12, 1.0], [1.792666022E12, 1.0], [1.792666065E12, 1.0], [1.792666053E12, 1.0], [1.792666051E12, 1.0], [1.792666049E12, 1.0], [1.792666016E12, 1.0], [1.792666014E12, 1.0], [1.792666057E12, 1.0], [1.792666055E12, 1.0], [1.792666041E12, 1.0], [1.792666039E12, 1.0], [1.792666047E12, 1.0], [1.792666045E12, 1.0], [1.792666043E12, 1.0], [1.792666031E12, 1.0], [1.792666029E12, 1.0], [1.792666072E12, 1.0], [1.792666027E12, 1.0], [1.79266607E12, 1.0], [1.792666037E12, 1.0], [1.792666035E12, 1.0], [1.792666033E12, 1.0]], "isOverall": false, "label": "线程组", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792666073E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 0.9564469815505808, "minX": 1.0, "maxY": 0.9564469815505808, "series": [{"data": [[1.0, 0.9564469815505808]], "isOverall": false, "label": "Products", "isController": false}, {"data": [[1.0, 0.9564469815505808]], "isOverall": false, "label": "Products-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 72049.0, "minX": 1.792666013E12, "maxY": 489889.0, "series": [{"data": [[1.792666021E12, 425151.0], [1.792666064E12, 462544.0], [1.792666019E12, 412583.0], [1.792666062E12, 466032.0], [1.792666017E12, 394285.0], [1.79266606E12, 480763.0], [1.792666025E12, 429394.0], [1.792666068E12, 476277.0], [1.792666023E12, 427596.0], [1.792666066E12, 476672.0], [1.792666052E12, 483505.0], [1.79266605E12, 480825.0], [1.792666015E12, 372435.0], [1.792666058E12, 483518.0], [1.792666013E12, 216225.0], [1.792666056E12, 464555.0], [1.792666054E12, 476071.0], [1.792666042E12, 478161.0], [1.79266604E12, 489146.0], [1.792666038E12, 486589.0], [1.792666048E12, 481283.0], [1.792666046E12, 482521.0], [1.792666044E12, 481012.0], [1.792666032E12, 467168.0], [1.79266603E12, 460382.0], [1.792666073E12, 131378.0], [1.792666071E12, 489889.0], [1.792666028E12, 468479.0], [1.792666036E12, 484259.0], [1.792666034E12, 466032.0], [1.792666063E12, 466252.0], [1.79266602E12, 409376.0], [1.792666018E12, 412394.0], [1.792666061E12, 484952.0], [1.792666059E12, 486673.0], [1.792666026E12, 437583.0], [1.792666069E12, 479894.0], [1.792666067E12, 488958.0], [1.792666024E12, 438349.0], [1.792666022E12, 386341.0], [1.792666065E12, 476245.0], [1.792666053E12, 475680.0], [1.792666051E12, 483469.0], [1.792666049E12, 477977.0], [1.792666016E12, 374521.0], [1.792666014E12, 359903.0], [1.792666057E12, 484881.0], [1.792666055E12, 479632.0], [1.792666041E12, 473896.0], [1.792666039E12, 473799.0], [1.792666047E12, 480790.0], [1.792666045E12, 480345.0], [1.792666043E12, 482806.0], [1.792666031E12, 454006.0], [1.792666029E12, 451195.0], [1.792666072E12, 472725.0], [1.792666027E12, 454742.0], [1.79266607E12, 471451.0], [1.792666037E12, 481506.0], [1.792666035E12, 478353.0], [1.792666033E12, 471232.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.792666021E12, 233329.0], [1.792666064E12, 255188.0], [1.792666019E12, 226324.0], [1.792666062E12, 257269.0], [1.792666017E12, 216153.0], [1.79266606E12, 265079.0], [1.792666025E12, 236980.0], [1.792666068E12, 262467.0], [1.792666023E12, 235945.0], [1.792666066E12, 262998.0], [1.792666052E12, 265859.0], [1.79266605E12, 265055.0], [1.792666015E12, 203172.0], [1.792666058E12, 266880.0], [1.792666013E12, 119138.0], [1.792666056E12, 255717.0], [1.792666054E12, 262711.0], [1.792666042E12, 263225.0], [1.79266604E12, 267167.0], [1.792666038E12, 267382.0], [1.792666048E12, 264300.0], [1.792666046E12, 265572.0], [1.792666044E12, 263262.0], [1.792666032E12, 255199.0], [1.79266603E12, 252825.0], [1.792666073E12, 72049.0], [1.792666071E12, 267686.0], [1.792666028E12, 255719.0], [1.792666036E12, 264307.0], [1.792666034E12, 255947.0], [1.792666063E12, 254419.0], [1.79266602E12, 225024.0], [1.792666018E12, 227600.0], [1.792666061E12, 266349.0], [1.792666059E12, 266125.0], [1.792666026E12, 240334.0], [1.792666069E12, 264006.0], [1.792666067E12, 266903.0], [1.792666024E12, 239069.0], [1.792666022E12, 212764.0], [1.792666065E12, 261666.0], [1.792666053E12, 260900.0], [1.792666051E12, 265340.0], [1.792666049E12, 262200.0], [1.792666016E12, 206798.0], [1.792666014E12, 198230.0], [1.792666057E12, 266099.0], [1.792666055E12, 262740.0], [1.792666041E12, 260904.0], [1.792666039E12, 261442.0], [1.792666047E12, 264559.0], [1.792666045E12, 264026.0], [1.792666043E12, 266120.0], [1.792666031E12, 250499.0], [1.792666029E12, 248948.0], [1.792666072E12, 260126.0], [1.792666027E12, 251022.0], [1.79266607E12, 260136.0], [1.792666037E12, 265593.0], [1.792666035E12, 264028.0], [1.792666033E12, 259874.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792666073E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 0.8940719144800775, "minX": 1.792666013E12, "maxY": 1.135170603674543, "series": [{"data": [[1.792666021E12, 1.0189520624303248], [1.792666064E12, 1.00611620795107], [1.792666019E12, 1.0367816091954039], [1.792666062E12, 0.9433771486349847], [1.792666017E12, 1.077015643802647], [1.79266606E12, 0.9136408243375869], [1.792666025E12, 0.9978046103183315], [1.792666068E12, 0.9157581764122896], [1.792666023E12, 1.0132304299889745], [1.792666066E12, 0.9188921859545001], [1.792666052E12, 0.9070450097847357], [1.79266605E12, 0.9205103042198229], [1.792666015E12, 1.1280409731113963], [1.792666058E12, 0.9132553606237812], [1.792666013E12, 1.133187772925765], [1.792666056E12, 0.9786368260427278], [1.792666054E12, 0.9247524752475249], [1.792666042E12, 0.9081027667984198], [1.79266604E12, 0.9065238558909442], [1.792666038E12, 0.9075875486381337], [1.792666048E12, 0.9202755905511816], [1.792666046E12, 0.9108716944172378], [1.792666044E12, 0.9130434782608704], [1.792666032E12, 0.9571865443425084], [1.79266603E12, 0.9619341563786017], [1.792666073E12, 0.9891696750902534], [1.792666071E12, 0.8940719144800775], [1.792666028E12, 0.9623601220752795], [1.792666036E12, 0.9183070866141724], [1.792666034E12, 0.9268292682926833], [1.792666063E12, 0.9856850715746421], [1.79266602E12, 1.0624277456647393], [1.792666018E12, 1.0319999999999998], [1.792666061E12, 0.9111328125000012], [1.792666059E12, 0.9257086999022489], [1.792666026E12, 1.0183982683982686], [1.792666069E12, 0.9192118226600975], [1.792666067E12, 0.9113060428849907], [1.792666024E12, 1.0130576713819377], [1.792666022E12, 1.1283618581907089], [1.792666065E12, 0.9662027833001993], [1.792666053E12, 0.9391824526420735], [1.792666051E12, 0.9156862745098042], [1.792666049E12, 0.9067460317460316], [1.792666016E12, 1.1044025157232717], [1.792666014E12, 1.135170603674543], [1.792666057E12, 0.9120234604105579], [1.792666055E12, 0.9227722772277233], [1.792666041E12, 0.9222333000997016], [1.792666039E12, 0.9194029850746267], [1.792666047E12, 0.9154375614552609], [1.792666045E12, 0.9014778325123158], [1.792666043E12, 0.9071358748778114], [1.792666031E12, 0.9657320872274148], [1.792666029E12, 0.9937304075235105], [1.792666072E12, 0.9510000000000002], [1.792666027E12, 1.005181347150259], [1.79266607E12, 0.9440000000000007], [1.792666037E12, 0.910871694417237], [1.792666035E12, 0.9004926108374385], [1.792666033E12, 0.9429429429429429]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792666073E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.8940719144800775, "minX": 1.792666013E12, "maxY": 1.133187772925765, "series": [{"data": [[1.792666021E12, 1.0156075808249718], [1.792666064E12, 1.0050968399592248], [1.792666019E12, 1.0356321839080476], [1.792666062E12, 0.9433771486349847], [1.792666017E12, 1.0758122743682303], [1.79266606E12, 0.9116781157998042], [1.792666025E12, 0.9956092206366635], [1.792666068E12, 0.9157581764122896], [1.792666023E12, 1.011025358324145], [1.792666066E12, 0.9159248269040546], [1.792666052E12, 0.9070450097847357], [1.79266605E12, 0.9156035328753672], [1.792666015E12, 1.1267605633802809], [1.792666058E12, 0.9132553606237812], [1.792666013E12, 1.133187772925765], [1.792666056E12, 0.9786368260427278], [1.792666054E12, 0.922772277227722], [1.792666042E12, 0.9061264822134386], [1.79266604E12, 0.9055501460564744], [1.792666038E12, 0.906614785992218], [1.792666048E12, 0.919291338582677], [1.792666046E12, 0.9098922624877576], [1.792666044E12, 0.9130434782608704], [1.792666032E12, 0.9571865443425084], [1.79266603E12, 0.9609053497942394], [1.792666073E12, 0.9891696750902534], [1.792666071E12, 0.8940719144800775], [1.792666028E12, 0.9623601220752795], [1.792666036E12, 0.9183070866141724], [1.792666034E12, 0.9247967479674807], [1.792666063E12, 0.9856850715746421], [1.79266602E12, 1.060115606936417], [1.792666018E12, 1.0297142857142851], [1.792666061E12, 0.910156250000001], [1.792666059E12, 0.9237536656891492], [1.792666026E12, 1.0162337662337677], [1.792666069E12, 0.9192118226600975], [1.792666067E12, 0.910331384015595], [1.792666024E12, 1.0108813928182803], [1.792666022E12, 1.1259168704156477], [1.792666065E12, 0.9662027833001993], [1.792666053E12, 0.938185443668993], [1.792666051E12, 0.913725490196078], [1.792666049E12, 0.9067460317460316], [1.792666016E12, 1.1006289308176103], [1.792666014E12, 1.1325459317585307], [1.792666057E12, 0.9110459433040085], [1.792666055E12, 0.9217821782178219], [1.792666041E12, 0.9212362911266191], [1.792666039E12, 0.9154228855721401], [1.792666047E12, 0.9134709931170109], [1.792666045E12, 0.900492610837439], [1.792666043E12, 0.9061583577712606], [1.792666031E12, 0.9646936656282453], [1.792666029E12, 0.9937304075235105], [1.792666072E12, 0.9490000000000003], [1.792666027E12, 1.0041450777202068], [1.79266607E12, 0.943], [1.792666037E12, 0.910871694417237], [1.792666035E12, 0.8985221674876841], [1.792666033E12, 0.9419419419419421]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792666073E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.792666013E12, "maxY": 0.009813542688910696, "series": [{"data": [[1.792666021E12, 0.004459308807134901], [1.792666064E12, 0.002038735983690114], [1.792666019E12, 0.001149425287356323], [1.792666062E12, 0.0030333670374115282], [1.792666017E12, 0.003610108303249097], [1.79266606E12, 0.0019627085377821422], [1.792666025E12, 0.00548847420417124], [1.792666068E12, 0.0], [1.792666023E12, 0.0011025358324145544], [1.792666066E12, 0.0029673590504451074], [1.792666052E12, 0.003913894324853233], [1.79266605E12, 0.009813542688910696], [1.792666015E12, 0.001280409731113957], [1.792666058E12, 9.746588693957134E-4], [1.792666013E12, 0.004366812227074235], [1.792666056E12, 0.002034587995930827], [1.792666054E12, 0.001980198019801983], [1.792666042E12, 0.0], [1.79266604E12, 0.002921129503407987], [1.792666038E12, 0.00680933852140078], [1.792666048E12, 0.0019685039370078766], [1.792666046E12, 0.0039177277179236105], [1.792666044E12, 0.00197628458498024], [1.792666032E12, 0.006116207951070341], [1.79266603E12, 0.0010288065843621409], [1.792666073E12, 0.0036101083032490976], [1.792666071E12, 0.0029154518950437343], [1.792666028E12, 0.0010172939979654122], [1.792666036E12, 0.004921259842519686], [1.792666034E12, 0.004065040650406508], [1.792666063E12, 0.0010224948875255631], [1.79266602E12, 0.003468208092485551], [1.792666018E12, 0.001142857142857144], [1.792666061E12, 0.0029296875000000026], [1.792666059E12, 0.002932551319648097], [1.792666026E12, 0.004329004329004333], [1.792666069E12, 9.85221674876849E-4], [1.792666067E12, 0.0029239766081871356], [1.792666024E12, 0.0032644178454842247], [1.792666022E12, 0.002444987775061127], [1.792666065E12, 0.0], [1.792666053E12, 9.97008973080759E-4], [1.792666051E12, 9.803921568627466E-4], [1.792666049E12, 9.920634920634933E-4], [1.792666016E12, 0.0025157232704402527], [1.792666014E12, 0.0026246719160104995], [1.792666057E12, 0.0], [1.792666055E12, 0.001980198019801981], [1.792666041E12, 9.970089730807574E-4], [1.792666039E12, 0.007960199004975126], [1.792666047E12, 0.0029498525073746347], [1.792666045E12, 9.852216748768476E-4], [1.792666043E12, 0.0], [1.792666031E12, 0.002076843198338527], [1.792666029E12, 0.002089864158829679], [1.792666072E12, 0.004000000000000002], [1.792666027E12, 0.0010362694300518143], [1.79266607E12, 0.0010000000000000015], [1.792666037E12, 0.003917727717923609], [1.792666035E12, 0.0], [1.792666033E12, 0.003003003003003003]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792666073E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.792666013E12, "maxY": 111.0, "series": [{"data": [[1.792666021E12, 7.0], [1.792666064E12, 5.0], [1.792666019E12, 9.0], [1.792666062E12, 6.0], [1.792666017E12, 10.0], [1.79266606E12, 3.0], [1.792666025E12, 7.0], [1.792666068E12, 3.0], [1.792666023E12, 6.0], [1.792666066E12, 7.0], [1.792666052E12, 4.0], [1.79266605E12, 8.0], [1.792666015E12, 10.0], [1.792666058E12, 3.0], [1.792666013E12, 4.0], [1.792666056E12, 8.0], [1.792666054E12, 7.0], [1.792666042E12, 9.0], [1.79266604E12, 3.0], [1.792666038E12, 8.0], [1.792666048E12, 5.0], [1.792666046E12, 6.0], [1.792666044E12, 6.0], [1.792666032E12, 5.0], [1.79266603E12, 5.0], [1.792666073E12, 2.0], [1.792666071E12, 3.0], [1.792666028E12, 3.0], [1.792666036E12, 4.0], [1.792666034E12, 8.0], [1.792666063E12, 7.0], [1.79266602E12, 8.0], [1.792666018E12, 7.0], [1.792666061E12, 4.0], [1.792666059E12, 6.0], [1.792666026E12, 12.0], [1.792666069E12, 7.0], [1.792666067E12, 4.0], [1.792666024E12, 10.0], [1.792666022E12, 111.0], [1.792666065E12, 3.0], [1.792666053E12, 5.0], [1.792666051E12, 7.0], [1.792666049E12, 6.0], [1.792666016E12, 10.0], [1.792666014E12, 9.0], [1.792666057E12, 4.0], [1.792666055E12, 5.0], [1.792666041E12, 11.0], [1.792666039E12, 6.0], [1.792666047E12, 5.0], [1.792666045E12, 5.0], [1.792666043E12, 3.0], [1.792666031E12, 4.0], [1.792666029E12, 6.0], [1.792666072E12, 3.0], [1.792666027E12, 4.0], [1.79266607E12, 8.0], [1.792666037E12, 5.0], [1.792666035E12, 5.0], [1.792666033E12, 6.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.792666021E12, 0.0], [1.792666064E12, 0.0], [1.792666019E12, 0.0], [1.792666062E12, 0.0], [1.792666017E12, 0.0], [1.79266606E12, 0.0], [1.792666025E12, 0.0], [1.792666068E12, 0.0], [1.792666023E12, 0.0], [1.792666066E12, 0.0], [1.792666052E12, 0.0], [1.79266605E12, 0.0], [1.792666015E12, 1.0], [1.792666058E12, 0.0], [1.792666013E12, 1.0], [1.792666056E12, 0.0], [1.792666054E12, 0.0], [1.792666042E12, 0.0], [1.79266604E12, 0.0], [1.792666038E12, 0.0], [1.792666048E12, 0.0], [1.792666046E12, 0.0], [1.792666044E12, 0.0], [1.792666032E12, 0.0], [1.79266603E12, 0.0], [1.792666073E12, 0.0], [1.792666071E12, 0.0], [1.792666028E12, 0.0], [1.792666036E12, 0.0], [1.792666034E12, 0.0], [1.792666063E12, 0.0], [1.79266602E12, 0.0], [1.792666018E12, 0.0], [1.792666061E12, 0.0], [1.792666059E12, 0.0], [1.792666026E12, 0.0], [1.792666069E12, 0.0], [1.792666067E12, 0.0], [1.792666024E12, 0.0], [1.792666022E12, 0.0], [1.792666065E12, 0.0], [1.792666053E12, 0.0], [1.792666051E12, 0.0], [1.792666049E12, 0.0], [1.792666016E12, 1.0], [1.792666014E12, 1.0], [1.792666057E12, 0.0], [1.792666055E12, 0.0], [1.792666041E12, 0.0], [1.792666039E12, 0.0], [1.792666047E12, 0.0], [1.792666045E12, 0.0], [1.792666043E12, 0.0], [1.792666031E12, 0.0], [1.792666029E12, 0.0], [1.792666072E12, 0.0], [1.792666027E12, 0.0], [1.79266607E12, 0.0], [1.792666037E12, 0.0], [1.792666035E12, 0.0], [1.792666033E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.792666021E12, 1.0], [1.792666064E12, 1.0], [1.792666019E12, 1.0], [1.792666062E12, 1.0], [1.792666017E12, 1.0], [1.79266606E12, 1.0], [1.792666025E12, 1.0], [1.792666068E12, 1.0], [1.792666023E12, 1.0], [1.792666066E12, 1.0], [1.792666052E12, 1.0], [1.79266605E12, 1.0], [1.792666015E12, 1.0], [1.792666058E12, 1.0], [1.792666013E12, 2.0], [1.792666056E12, 1.0], [1.792666054E12, 1.0], [1.792666042E12, 1.0], [1.79266604E12, 1.0], [1.792666038E12, 1.0], [1.792666048E12, 1.0], [1.792666046E12, 1.0], [1.792666044E12, 1.0], [1.792666032E12, 1.0], [1.79266603E12, 1.0], [1.792666073E12, 1.0], [1.792666071E12, 1.0], [1.792666028E12, 1.0], [1.792666036E12, 1.0], [1.792666034E12, 1.0], [1.792666063E12, 1.0], [1.79266602E12, 1.0], [1.792666018E12, 1.0], [1.792666061E12, 1.0], [1.792666059E12, 1.0], [1.792666026E12, 1.0], [1.792666069E12, 1.0], [1.792666067E12, 1.0], [1.792666024E12, 1.0], [1.792666022E12, 1.0], [1.792666065E12, 1.0], [1.792666053E12, 1.0], [1.792666051E12, 1.0], [1.792666049E12, 1.0], [1.792666016E12, 1.0], [1.792666014E12, 1.0], [1.792666057E12, 1.0], [1.792666055E12, 1.0], [1.792666041E12, 1.0], [1.792666039E12, 1.0], [1.792666047E12, 1.0], [1.792666045E12, 1.0], [1.792666043E12, 1.0], [1.792666031E12, 1.0], [1.792666029E12, 1.0], [1.792666072E12, 1.0], [1.792666027E12, 1.0], [1.79266607E12, 1.0], [1.792666037E12, 1.0], [1.792666035E12, 1.0], [1.792666033E12, 1.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.792666021E12, 3.0], [1.792666064E12, 1.17999999999995], [1.792666019E12, 2.0], [1.792666062E12, 2.0], [1.792666017E12, 2.67999999999995], [1.79266606E12, 1.7999999999999545], [1.792666025E12, 2.8799999999999955], [1.792666068E12, 1.0], [1.792666023E12, 3.0], [1.792666066E12, 2.0], [1.792666052E12, 2.0], [1.79266605E12, 1.0], [1.792666015E12, 4.0], [1.792666058E12, 1.0], [1.792666013E12, 3.0], [1.792666056E12, 2.0], [1.792666054E12, 1.0], [1.792666042E12, 1.0], [1.79266604E12, 1.7200000000000273], [1.792666038E12, 1.0], [1.792666048E12, 2.0], [1.792666046E12, 2.0], [1.792666044E12, 1.8700000000000045], [1.792666032E12, 2.0], [1.79266603E12, 1.2699999999999818], [1.792666073E12, 1.2199999999999704], [1.792666071E12, 2.0], [1.792666028E12, 1.0], [1.792666036E12, 2.0], [1.792666034E12, 2.0], [1.792666063E12, 1.0], [1.79266602E12, 3.0], [1.792666018E12, 2.0], [1.792666061E12, 1.0], [1.792666059E12, 1.0], [1.792666026E12, 2.0], [1.792666069E12, 1.8400000000000318], [1.792666067E12, 1.0], [1.792666024E12, 2.7999999999999545], [1.792666022E12, 2.0], [1.792666065E12, 1.0], [1.792666053E12, 2.0], [1.792666051E12, 1.0], [1.792666049E12, 1.0], [1.792666016E12, 3.0], [1.792666014E12, 3.3700000000000045], [1.792666057E12, 1.0], [1.792666055E12, 1.0], [1.792666041E12, 1.0], [1.792666039E12, 2.0], [1.792666047E12, 1.0], [1.792666045E12, 1.0], [1.792666043E12, 1.0], [1.792666031E12, 2.0], [1.792666029E12, 1.419999999999959], [1.792666072E12, 1.0], [1.792666027E12, 1.0], [1.79266607E12, 1.990000000000009], [1.792666037E12, 1.0], [1.792666035E12, 1.0], [1.792666033E12, 1.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.792666021E12, 1.0], [1.792666064E12, 1.0], [1.792666019E12, 1.0], [1.792666062E12, 1.0], [1.792666017E12, 1.0], [1.79266606E12, 1.0], [1.792666025E12, 1.0], [1.792666068E12, 1.0], [1.792666023E12, 1.0], [1.792666066E12, 1.0], [1.792666052E12, 1.0], [1.79266605E12, 1.0], [1.792666015E12, 1.0], [1.792666058E12, 1.0], [1.792666013E12, 1.0], [1.792666056E12, 1.0], [1.792666054E12, 1.0], [1.792666042E12, 1.0], [1.79266604E12, 1.0], [1.792666038E12, 1.0], [1.792666048E12, 1.0], [1.792666046E12, 1.0], [1.792666044E12, 1.0], [1.792666032E12, 1.0], [1.79266603E12, 1.0], [1.792666073E12, 1.0], [1.792666071E12, 1.0], [1.792666028E12, 1.0], [1.792666036E12, 1.0], [1.792666034E12, 1.0], [1.792666063E12, 1.0], [1.79266602E12, 1.0], [1.792666018E12, 1.0], [1.792666061E12, 1.0], [1.792666059E12, 1.0], [1.792666026E12, 1.0], [1.792666069E12, 1.0], [1.792666067E12, 1.0], [1.792666024E12, 1.0], [1.792666022E12, 1.0], [1.792666065E12, 1.0], [1.792666053E12, 1.0], [1.792666051E12, 1.0], [1.792666049E12, 1.0], [1.792666016E12, 1.0], [1.792666014E12, 1.0], [1.792666057E12, 1.0], [1.792666055E12, 1.0], [1.792666041E12, 1.0], [1.792666039E12, 1.0], [1.792666047E12, 1.0], [1.792666045E12, 1.0], [1.792666043E12, 1.0], [1.792666031E12, 1.0], [1.792666029E12, 1.0], [1.792666072E12, 1.0], [1.792666027E12, 1.0], [1.79266607E12, 1.0], [1.792666037E12, 1.0], [1.792666035E12, 1.0], [1.792666033E12, 1.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.792666021E12, 1.0], [1.792666064E12, 1.0], [1.792666019E12, 1.0], [1.792666062E12, 1.0], [1.792666017E12, 1.3999999999999773], [1.79266606E12, 1.0], [1.792666025E12, 1.0], [1.792666068E12, 1.0], [1.792666023E12, 1.0], [1.792666066E12, 1.0], [1.792666052E12, 1.0], [1.79266605E12, 1.0], [1.792666015E12, 2.0], [1.792666058E12, 1.0], [1.792666013E12, 2.0], [1.792666056E12, 1.0], [1.792666054E12, 1.0], [1.792666042E12, 1.0], [1.79266604E12, 1.0], [1.792666038E12, 1.0], [1.792666048E12, 1.0], [1.792666046E12, 1.0], [1.792666044E12, 1.0], [1.792666032E12, 1.0], [1.79266603E12, 1.0], [1.792666073E12, 1.0], [1.792666071E12, 1.0], [1.792666028E12, 1.0], [1.792666036E12, 1.0], [1.792666034E12, 1.0], [1.792666063E12, 1.0], [1.79266602E12, 1.0], [1.792666018E12, 1.0], [1.792666061E12, 1.0], [1.792666059E12, 1.0], [1.792666026E12, 1.0], [1.792666069E12, 1.0], [1.792666067E12, 1.0], [1.792666024E12, 1.0], [1.792666022E12, 1.0], [1.792666065E12, 1.0], [1.792666053E12, 1.0], [1.792666051E12, 1.0], [1.792666049E12, 1.0], [1.792666016E12, 2.0], [1.792666014E12, 2.0], [1.792666057E12, 1.0], [1.792666055E12, 1.0], [1.792666041E12, 1.0], [1.792666039E12, 1.0], [1.792666047E12, 1.0], [1.792666045E12, 1.0], [1.792666043E12, 1.0], [1.792666031E12, 1.0], [1.792666029E12, 1.0], [1.792666072E12, 1.0], [1.792666027E12, 1.0], [1.79266607E12, 1.0], [1.792666037E12, 1.0], [1.792666035E12, 1.0], [1.792666033E12, 1.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792666073E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1.0, "minX": 277.0, "maxY": 1.0, "series": [{"data": [[762.0, 1.0], [781.0, 1.0], [795.0, 1.0], [831.0, 1.0], [818.0, 1.0], [875.0, 1.0], [870.0, 1.0], [865.0, 1.0], [897.0, 1.0], [907.0, 1.0], [919.0, 1.0], [911.0, 1.0], [924.0, 1.0], [957.0, 1.0], [965.0, 1.0], [983.0, 1.0], [972.0, 1.0], [963.0, 1.0], [981.0, 1.0], [984.0, 1.0], [989.0, 1.0], [978.0, 1.0], [1021.0, 1.0], [1016.0, 1.0], [999.0, 1.0], [1006.0, 1.0], [1015.0, 1.0], [1005.0, 1.0], [1003.0, 1.0], [1000.0, 1.0], [1012.0, 1.0], [1023.0, 1.0], [1022.0, 1.0], [1008.0, 1.0], [1009.0, 1.0], [1010.0, 1.0], [1011.0, 1.0], [1017.0, 1.0], [1019.0, 1.0], [1020.0, 1.0], [1028.0, 1.0], [1027.0, 1.0], [1026.0, 1.0], [1024.0, 1.0], [1029.0, 1.0], [277.0, 1.0], [458.0, 1.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1029.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1.0, "minX": 277.0, "maxY": 1.0, "series": [{"data": [[762.0, 1.0], [781.0, 1.0], [795.0, 1.0], [831.0, 1.0], [818.0, 1.0], [875.0, 1.0], [870.0, 1.0], [865.0, 1.0], [897.0, 1.0], [907.0, 1.0], [919.0, 1.0], [911.0, 1.0], [924.0, 1.0], [957.0, 1.0], [965.0, 1.0], [983.0, 1.0], [972.0, 1.0], [963.0, 1.0], [981.0, 1.0], [984.0, 1.0], [989.0, 1.0], [978.0, 1.0], [1021.0, 1.0], [1016.0, 1.0], [999.0, 1.0], [1006.0, 1.0], [1015.0, 1.0], [1005.0, 1.0], [1003.0, 1.0], [1000.0, 1.0], [1012.0, 1.0], [1023.0, 1.0], [1022.0, 1.0], [1008.0, 1.0], [1009.0, 1.0], [1010.0, 1.0], [1011.0, 1.0], [1017.0, 1.0], [1019.0, 1.0], [1020.0, 1.0], [1028.0, 1.0], [1027.0, 1.0], [1026.0, 1.0], [1024.0, 1.0], [1029.0, 1.0], [277.0, 1.0], [458.0, 1.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1029.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 276.0, "minX": 1.792666013E12, "maxY": 1029.0, "series": [{"data": [[1.792666021E12, 897.0], [1.792666064E12, 981.0], [1.792666019E12, 870.0], [1.792666062E12, 989.0], [1.792666017E12, 831.0], [1.79266606E12, 1019.0], [1.792666025E12, 911.0], [1.792666068E12, 1009.0], [1.792666023E12, 906.0], [1.792666066E12, 1011.0], [1.792666052E12, 1022.0], [1.79266605E12, 1020.0], [1.792666015E12, 781.0], [1.792666058E12, 1026.0], [1.792666013E12, 459.0], [1.792666056E12, 983.0], [1.792666054E12, 1010.0], [1.792666042E12, 1012.0], [1.79266604E12, 1028.0], [1.792666038E12, 1028.0], [1.792666048E12, 1015.0], [1.792666046E12, 1021.0], [1.792666044E12, 1012.0], [1.792666032E12, 981.0], [1.79266603E12, 972.0], [1.792666073E12, 276.0], [1.792666071E12, 1029.0], [1.792666028E12, 983.0], [1.792666036E12, 1017.0], [1.792666034E12, 985.0], [1.792666063E12, 978.0], [1.79266602E12, 865.0], [1.792666018E12, 875.0], [1.792666061E12, 1024.0], [1.792666059E12, 1023.0], [1.792666026E12, 924.0], [1.792666069E12, 1014.0], [1.792666067E12, 1026.0], [1.792666024E12, 920.0], [1.792666022E12, 818.0], [1.792666065E12, 1006.0], [1.792666053E12, 1003.0], [1.792666051E12, 1020.0], [1.792666049E12, 1008.0], [1.792666016E12, 795.0], [1.792666014E12, 762.0], [1.792666057E12, 1023.0], [1.792666055E12, 1010.0], [1.792666041E12, 1003.0], [1.792666039E12, 1004.0], [1.792666047E12, 1017.0], [1.792666045E12, 1015.0], [1.792666043E12, 1023.0], [1.792666031E12, 963.0], [1.792666029E12, 957.0], [1.792666072E12, 1000.0], [1.792666027E12, 965.0], [1.79266607E12, 1001.0], [1.792666037E12, 1021.0], [1.792666035E12, 1014.0], [1.792666033E12, 998.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792666073E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 277.0, "minX": 1.792666013E12, "maxY": 1029.0, "series": [{"data": [[1.792666021E12, 897.0], [1.792666064E12, 981.0], [1.792666019E12, 870.0], [1.792666062E12, 989.0], [1.792666017E12, 831.0], [1.79266606E12, 1019.0], [1.792666025E12, 911.0], [1.792666068E12, 1009.0], [1.792666023E12, 907.0], [1.792666066E12, 1011.0], [1.792666052E12, 1022.0], [1.79266605E12, 1019.0], [1.792666015E12, 781.0], [1.792666058E12, 1026.0], [1.792666013E12, 458.0], [1.792666056E12, 983.0], [1.792666054E12, 1010.0], [1.792666042E12, 1012.0], [1.79266604E12, 1027.0], [1.792666038E12, 1028.0], [1.792666048E12, 1016.0], [1.792666046E12, 1021.0], [1.792666044E12, 1012.0], [1.792666032E12, 981.0], [1.79266603E12, 972.0], [1.792666073E12, 277.0], [1.792666071E12, 1029.0], [1.792666028E12, 983.0], [1.792666036E12, 1016.0], [1.792666034E12, 984.0], [1.792666063E12, 978.0], [1.79266602E12, 865.0], [1.792666018E12, 875.0], [1.792666061E12, 1024.0], [1.792666059E12, 1023.0], [1.792666026E12, 924.0], [1.792666069E12, 1015.0], [1.792666067E12, 1026.0], [1.792666024E12, 919.0], [1.792666022E12, 818.0], [1.792666065E12, 1006.0], [1.792666053E12, 1003.0], [1.792666051E12, 1020.0], [1.792666049E12, 1008.0], [1.792666016E12, 795.0], [1.792666014E12, 762.0], [1.792666057E12, 1023.0], [1.792666055E12, 1010.0], [1.792666041E12, 1003.0], [1.792666039E12, 1005.0], [1.792666047E12, 1017.0], [1.792666045E12, 1015.0], [1.792666043E12, 1023.0], [1.792666031E12, 963.0], [1.792666029E12, 957.0], [1.792666072E12, 1000.0], [1.792666027E12, 965.0], [1.79266607E12, 1000.0], [1.792666037E12, 1021.0], [1.792666035E12, 1015.0], [1.792666033E12, 999.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792666073E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 277.0, "minX": 1.792666013E12, "maxY": 1029.0, "series": [{"data": [[1.792666021E12, 897.0], [1.792666064E12, 981.0], [1.792666019E12, 870.0], [1.792666062E12, 989.0], [1.792666017E12, 831.0], [1.79266606E12, 1019.0], [1.792666025E12, 911.0], [1.792666068E12, 1009.0], [1.792666023E12, 907.0], [1.792666066E12, 1011.0], [1.792666052E12, 1022.0], [1.79266605E12, 1019.0], [1.792666015E12, 781.0], [1.792666058E12, 1026.0], [1.792666013E12, 458.0], [1.792666056E12, 983.0], [1.792666054E12, 1010.0], [1.792666042E12, 1012.0], [1.79266604E12, 1027.0], [1.792666038E12, 1028.0], [1.792666048E12, 1016.0], [1.792666046E12, 1021.0], [1.792666044E12, 1012.0], [1.792666032E12, 981.0], [1.79266603E12, 972.0], [1.792666073E12, 277.0], [1.792666071E12, 1029.0], [1.792666028E12, 983.0], [1.792666036E12, 1016.0], [1.792666034E12, 984.0], [1.792666063E12, 978.0], [1.79266602E12, 865.0], [1.792666018E12, 875.0], [1.792666061E12, 1024.0], [1.792666059E12, 1023.0], [1.792666026E12, 924.0], [1.792666069E12, 1015.0], [1.792666067E12, 1026.0], [1.792666024E12, 919.0], [1.792666022E12, 818.0], [1.792666065E12, 1006.0], [1.792666053E12, 1003.0], [1.792666051E12, 1020.0], [1.792666049E12, 1008.0], [1.792666016E12, 795.0], [1.792666014E12, 762.0], [1.792666057E12, 1023.0], [1.792666055E12, 1010.0], [1.792666041E12, 1003.0], [1.792666039E12, 1005.0], [1.792666047E12, 1017.0], [1.792666045E12, 1015.0], [1.792666043E12, 1023.0], [1.792666031E12, 963.0], [1.792666029E12, 957.0], [1.792666072E12, 1000.0], [1.792666027E12, 965.0], [1.79266607E12, 1000.0], [1.792666037E12, 1021.0], [1.792666035E12, 1015.0], [1.792666033E12, 999.0]], "isOverall": false, "label": "Products-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792666073E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 277.0, "minX": 1.792666013E12, "maxY": 1029.0, "series": [{"data": [[1.792666021E12, 897.0], [1.792666064E12, 981.0], [1.792666019E12, 870.0], [1.792666062E12, 989.0], [1.792666017E12, 831.0], [1.79266606E12, 1019.0], [1.792666025E12, 911.0], [1.792666068E12, 1009.0], [1.792666023E12, 907.0], [1.792666066E12, 1011.0], [1.792666052E12, 1022.0], [1.79266605E12, 1019.0], [1.792666015E12, 781.0], [1.792666058E12, 1026.0], [1.792666013E12, 458.0], [1.792666056E12, 983.0], [1.792666054E12, 1010.0], [1.792666042E12, 1012.0], [1.79266604E12, 1027.0], [1.792666038E12, 1028.0], [1.792666048E12, 1016.0], [1.792666046E12, 1021.0], [1.792666044E12, 1012.0], [1.792666032E12, 981.0], [1.79266603E12, 972.0], [1.792666073E12, 277.0], [1.792666071E12, 1029.0], [1.792666028E12, 983.0], [1.792666036E12, 1016.0], [1.792666034E12, 984.0], [1.792666063E12, 978.0], [1.79266602E12, 865.0], [1.792666018E12, 875.0], [1.792666061E12, 1024.0], [1.792666059E12, 1023.0], [1.792666026E12, 924.0], [1.792666069E12, 1015.0], [1.792666067E12, 1026.0], [1.792666024E12, 919.0], [1.792666022E12, 818.0], [1.792666065E12, 1006.0], [1.792666053E12, 1003.0], [1.792666051E12, 1020.0], [1.792666049E12, 1008.0], [1.792666016E12, 795.0], [1.792666014E12, 762.0], [1.792666057E12, 1023.0], [1.792666055E12, 1010.0], [1.792666041E12, 1003.0], [1.792666039E12, 1005.0], [1.792666047E12, 1017.0], [1.792666045E12, 1015.0], [1.792666043E12, 1023.0], [1.792666031E12, 963.0], [1.792666029E12, 957.0], [1.792666072E12, 1000.0], [1.792666027E12, 965.0], [1.79266607E12, 1000.0], [1.792666037E12, 1021.0], [1.792666035E12, 1015.0], [1.792666033E12, 999.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792666073E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


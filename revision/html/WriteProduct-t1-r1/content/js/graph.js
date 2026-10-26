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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 46.0, "series": [{"data": [[0.0, 4.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 4.0], [1.5, 4.0], [1.6, 4.0], [1.7, 4.0], [1.8, 4.0], [1.9, 4.0], [2.0, 4.0], [2.1, 4.0], [2.2, 4.0], [2.3, 4.0], [2.4, 4.0], [2.5, 4.0], [2.6, 4.0], [2.7, 4.0], [2.8, 4.0], [2.9, 4.0], [3.0, 4.0], [3.1, 4.0], [3.2, 4.0], [3.3, 4.0], [3.4, 4.0], [3.5, 4.0], [3.6, 4.0], [3.7, 4.0], [3.8, 4.0], [3.9, 4.0], [4.0, 4.0], [4.1, 4.0], [4.2, 4.0], [4.3, 4.0], [4.4, 4.0], [4.5, 4.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 4.0], [5.2, 4.0], [5.3, 4.0], [5.4, 4.0], [5.5, 4.0], [5.6, 4.0], [5.7, 4.0], [5.8, 4.0], [5.9, 4.0], [6.0, 4.0], [6.1, 4.0], [6.2, 4.0], [6.3, 4.0], [6.4, 4.0], [6.5, 4.0], [6.6, 4.0], [6.7, 4.0], [6.8, 4.0], [6.9, 4.0], [7.0, 4.0], [7.1, 4.0], [7.2, 4.0], [7.3, 4.0], [7.4, 4.0], [7.5, 4.0], [7.6, 4.0], [7.7, 4.0], [7.8, 4.0], [7.9, 4.0], [8.0, 4.0], [8.1, 4.0], [8.2, 4.0], [8.3, 4.0], [8.4, 4.0], [8.5, 4.0], [8.6, 4.0], [8.7, 4.0], [8.8, 4.0], [8.9, 4.0], [9.0, 4.0], [9.1, 4.0], [9.2, 4.0], [9.3, 4.0], [9.4, 4.0], [9.5, 4.0], [9.6, 4.0], [9.7, 4.0], [9.8, 4.0], [9.9, 4.0], [10.0, 4.0], [10.1, 4.0], [10.2, 4.0], [10.3, 4.0], [10.4, 4.0], [10.5, 4.0], [10.6, 4.0], [10.7, 4.0], [10.8, 4.0], [10.9, 4.0], [11.0, 4.0], [11.1, 4.0], [11.2, 4.0], [11.3, 4.0], [11.4, 4.0], [11.5, 4.0], [11.6, 4.0], [11.7, 4.0], [11.8, 4.0], [11.9, 4.0], [12.0, 4.0], [12.1, 4.0], [12.2, 4.0], [12.3, 4.0], [12.4, 4.0], [12.5, 4.0], [12.6, 4.0], [12.7, 4.0], [12.8, 4.0], [12.9, 4.0], [13.0, 4.0], [13.1, 4.0], [13.2, 4.0], [13.3, 4.0], [13.4, 4.0], [13.5, 4.0], [13.6, 4.0], [13.7, 4.0], [13.8, 4.0], [13.9, 4.0], [14.0, 4.0], [14.1, 4.0], [14.2, 4.0], [14.3, 4.0], [14.4, 4.0], [14.5, 4.0], [14.6, 4.0], [14.7, 4.0], [14.8, 4.0], [14.9, 4.0], [15.0, 4.0], [15.1, 4.0], [15.2, 4.0], [15.3, 4.0], [15.4, 4.0], [15.5, 4.0], [15.6, 4.0], [15.7, 4.0], [15.8, 4.0], [15.9, 4.0], [16.0, 4.0], [16.1, 4.0], [16.2, 4.0], [16.3, 4.0], [16.4, 4.0], [16.5, 4.0], [16.6, 4.0], [16.7, 4.0], [16.8, 4.0], [16.9, 4.0], [17.0, 4.0], [17.1, 4.0], [17.2, 4.0], [17.3, 4.0], [17.4, 4.0], [17.5, 4.0], [17.6, 4.0], [17.7, 4.0], [17.8, 4.0], [17.9, 4.0], [18.0, 4.0], [18.1, 4.0], [18.2, 4.0], [18.3, 4.0], [18.4, 4.0], [18.5, 4.0], [18.6, 4.0], [18.7, 4.0], [18.8, 4.0], [18.9, 4.0], [19.0, 4.0], [19.1, 4.0], [19.2, 4.0], [19.3, 4.0], [19.4, 4.0], [19.5, 4.0], [19.6, 4.0], [19.7, 4.0], [19.8, 4.0], [19.9, 4.0], [20.0, 4.0], [20.1, 4.0], [20.2, 4.0], [20.3, 4.0], [20.4, 4.0], [20.5, 4.0], [20.6, 4.0], [20.7, 4.0], [20.8, 4.0], [20.9, 4.0], [21.0, 4.0], [21.1, 4.0], [21.2, 4.0], [21.3, 4.0], [21.4, 4.0], [21.5, 4.0], [21.6, 4.0], [21.7, 4.0], [21.8, 4.0], [21.9, 4.0], [22.0, 4.0], [22.1, 4.0], [22.2, 4.0], [22.3, 4.0], [22.4, 4.0], [22.5, 4.0], [22.6, 4.0], [22.7, 4.0], [22.8, 4.0], [22.9, 4.0], [23.0, 4.0], [23.1, 4.0], [23.2, 4.0], [23.3, 4.0], [23.4, 4.0], [23.5, 4.0], [23.6, 4.0], [23.7, 4.0], [23.8, 4.0], [23.9, 4.0], [24.0, 4.0], [24.1, 4.0], [24.2, 4.0], [24.3, 4.0], [24.4, 4.0], [24.5, 4.0], [24.6, 4.0], [24.7, 4.0], [24.8, 4.0], [24.9, 4.0], [25.0, 4.0], [25.1, 4.0], [25.2, 4.0], [25.3, 4.0], [25.4, 4.0], [25.5, 4.0], [25.6, 4.0], [25.7, 4.0], [25.8, 4.0], [25.9, 4.0], [26.0, 4.0], [26.1, 4.0], [26.2, 4.0], [26.3, 4.0], [26.4, 4.0], [26.5, 4.0], [26.6, 4.0], [26.7, 4.0], [26.8, 4.0], [26.9, 4.0], [27.0, 4.0], [27.1, 4.0], [27.2, 4.0], [27.3, 4.0], [27.4, 4.0], [27.5, 4.0], [27.6, 4.0], [27.7, 4.0], [27.8, 4.0], [27.9, 4.0], [28.0, 4.0], [28.1, 4.0], [28.2, 4.0], [28.3, 4.0], [28.4, 4.0], [28.5, 4.0], [28.6, 4.0], [28.7, 4.0], [28.8, 4.0], [28.9, 4.0], [29.0, 4.0], [29.1, 4.0], [29.2, 4.0], [29.3, 4.0], [29.4, 4.0], [29.5, 4.0], [29.6, 4.0], [29.7, 4.0], [29.8, 4.0], [29.9, 4.0], [30.0, 4.0], [30.1, 4.0], [30.2, 4.0], [30.3, 4.0], [30.4, 4.0], [30.5, 4.0], [30.6, 4.0], [30.7, 4.0], [30.8, 4.0], [30.9, 4.0], [31.0, 5.0], [31.1, 5.0], [31.2, 5.0], [31.3, 5.0], [31.4, 5.0], [31.5, 5.0], [31.6, 5.0], [31.7, 5.0], [31.8, 5.0], [31.9, 5.0], [32.0, 5.0], [32.1, 5.0], [32.2, 5.0], [32.3, 5.0], [32.4, 5.0], [32.5, 5.0], [32.6, 5.0], [32.7, 5.0], [32.8, 5.0], [32.9, 5.0], [33.0, 5.0], [33.1, 5.0], [33.2, 5.0], [33.3, 5.0], [33.4, 5.0], [33.5, 5.0], [33.6, 5.0], [33.7, 5.0], [33.8, 5.0], [33.9, 5.0], [34.0, 5.0], [34.1, 5.0], [34.2, 5.0], [34.3, 5.0], [34.4, 5.0], [34.5, 5.0], [34.6, 5.0], [34.7, 5.0], [34.8, 5.0], [34.9, 5.0], [35.0, 5.0], [35.1, 5.0], [35.2, 5.0], [35.3, 5.0], [35.4, 5.0], [35.5, 5.0], [35.6, 5.0], [35.7, 5.0], [35.8, 5.0], [35.9, 5.0], [36.0, 5.0], [36.1, 5.0], [36.2, 5.0], [36.3, 5.0], [36.4, 5.0], [36.5, 5.0], [36.6, 5.0], [36.7, 5.0], [36.8, 5.0], [36.9, 5.0], [37.0, 5.0], [37.1, 5.0], [37.2, 5.0], [37.3, 5.0], [37.4, 5.0], [37.5, 5.0], [37.6, 5.0], [37.7, 5.0], [37.8, 5.0], [37.9, 5.0], [38.0, 5.0], [38.1, 5.0], [38.2, 5.0], [38.3, 5.0], [38.4, 5.0], [38.5, 5.0], [38.6, 5.0], [38.7, 5.0], [38.8, 5.0], [38.9, 5.0], [39.0, 5.0], [39.1, 5.0], [39.2, 5.0], [39.3, 5.0], [39.4, 5.0], [39.5, 5.0], [39.6, 5.0], [39.7, 5.0], [39.8, 5.0], [39.9, 5.0], [40.0, 5.0], [40.1, 5.0], [40.2, 5.0], [40.3, 5.0], [40.4, 5.0], [40.5, 5.0], [40.6, 5.0], [40.7, 5.0], [40.8, 5.0], [40.9, 5.0], [41.0, 5.0], [41.1, 5.0], [41.2, 5.0], [41.3, 5.0], [41.4, 5.0], [41.5, 5.0], [41.6, 5.0], [41.7, 5.0], [41.8, 5.0], [41.9, 5.0], [42.0, 5.0], [42.1, 5.0], [42.2, 5.0], [42.3, 5.0], [42.4, 5.0], [42.5, 5.0], [42.6, 5.0], [42.7, 5.0], [42.8, 5.0], [42.9, 5.0], [43.0, 5.0], [43.1, 5.0], [43.2, 5.0], [43.3, 5.0], [43.4, 5.0], [43.5, 5.0], [43.6, 5.0], [43.7, 5.0], [43.8, 5.0], [43.9, 5.0], [44.0, 5.0], [44.1, 5.0], [44.2, 5.0], [44.3, 5.0], [44.4, 5.0], [44.5, 5.0], [44.6, 5.0], [44.7, 5.0], [44.8, 5.0], [44.9, 5.0], [45.0, 5.0], [45.1, 5.0], [45.2, 5.0], [45.3, 5.0], [45.4, 5.0], [45.5, 5.0], [45.6, 5.0], [45.7, 5.0], [45.8, 5.0], [45.9, 5.0], [46.0, 5.0], [46.1, 5.0], [46.2, 5.0], [46.3, 5.0], [46.4, 5.0], [46.5, 5.0], [46.6, 5.0], [46.7, 5.0], [46.8, 5.0], [46.9, 5.0], [47.0, 5.0], [47.1, 5.0], [47.2, 5.0], [47.3, 5.0], [47.4, 5.0], [47.5, 5.0], [47.6, 5.0], [47.7, 5.0], [47.8, 5.0], [47.9, 5.0], [48.0, 5.0], [48.1, 5.0], [48.2, 5.0], [48.3, 5.0], [48.4, 5.0], [48.5, 5.0], [48.6, 5.0], [48.7, 5.0], [48.8, 5.0], [48.9, 5.0], [49.0, 5.0], [49.1, 5.0], [49.2, 5.0], [49.3, 5.0], [49.4, 5.0], [49.5, 5.0], [49.6, 5.0], [49.7, 5.0], [49.8, 5.0], [49.9, 5.0], [50.0, 5.0], [50.1, 5.0], [50.2, 5.0], [50.3, 5.0], [50.4, 5.0], [50.5, 5.0], [50.6, 5.0], [50.7, 5.0], [50.8, 5.0], [50.9, 5.0], [51.0, 5.0], [51.1, 5.0], [51.2, 5.0], [51.3, 5.0], [51.4, 5.0], [51.5, 5.0], [51.6, 5.0], [51.7, 5.0], [51.8, 5.0], [51.9, 5.0], [52.0, 5.0], [52.1, 5.0], [52.2, 5.0], [52.3, 5.0], [52.4, 5.0], [52.5, 5.0], [52.6, 5.0], [52.7, 5.0], [52.8, 5.0], [52.9, 5.0], [53.0, 5.0], [53.1, 5.0], [53.2, 5.0], [53.3, 5.0], [53.4, 5.0], [53.5, 5.0], [53.6, 5.0], [53.7, 5.0], [53.8, 5.0], [53.9, 5.0], [54.0, 5.0], [54.1, 5.0], [54.2, 5.0], [54.3, 5.0], [54.4, 5.0], [54.5, 5.0], [54.6, 5.0], [54.7, 5.0], [54.8, 5.0], [54.9, 5.0], [55.0, 5.0], [55.1, 5.0], [55.2, 5.0], [55.3, 5.0], [55.4, 5.0], [55.5, 5.0], [55.6, 5.0], [55.7, 5.0], [55.8, 5.0], [55.9, 5.0], [56.0, 5.0], [56.1, 5.0], [56.2, 5.0], [56.3, 5.0], [56.4, 5.0], [56.5, 5.0], [56.6, 5.0], [56.7, 5.0], [56.8, 5.0], [56.9, 5.0], [57.0, 5.0], [57.1, 5.0], [57.2, 5.0], [57.3, 5.0], [57.4, 5.0], [57.5, 5.0], [57.6, 5.0], [57.7, 5.0], [57.8, 5.0], [57.9, 5.0], [58.0, 5.0], [58.1, 5.0], [58.2, 5.0], [58.3, 5.0], [58.4, 5.0], [58.5, 5.0], [58.6, 5.0], [58.7, 5.0], [58.8, 5.0], [58.9, 5.0], [59.0, 5.0], [59.1, 5.0], [59.2, 5.0], [59.3, 5.0], [59.4, 5.0], [59.5, 5.0], [59.6, 5.0], [59.7, 5.0], [59.8, 5.0], [59.9, 5.0], [60.0, 5.0], [60.1, 5.0], [60.2, 5.0], [60.3, 5.0], [60.4, 5.0], [60.5, 5.0], [60.6, 5.0], [60.7, 5.0], [60.8, 5.0], [60.9, 5.0], [61.0, 5.0], [61.1, 5.0], [61.2, 5.0], [61.3, 5.0], [61.4, 5.0], [61.5, 5.0], [61.6, 5.0], [61.7, 5.0], [61.8, 5.0], [61.9, 5.0], [62.0, 5.0], [62.1, 5.0], [62.2, 5.0], [62.3, 5.0], [62.4, 5.0], [62.5, 5.0], [62.6, 5.0], [62.7, 5.0], [62.8, 5.0], [62.9, 5.0], [63.0, 5.0], [63.1, 5.0], [63.2, 5.0], [63.3, 5.0], [63.4, 5.0], [63.5, 5.0], [63.6, 5.0], [63.7, 5.0], [63.8, 5.0], [63.9, 5.0], [64.0, 5.0], [64.1, 5.0], [64.2, 5.0], [64.3, 5.0], [64.4, 5.0], [64.5, 5.0], [64.6, 5.0], [64.7, 5.0], [64.8, 5.0], [64.9, 5.0], [65.0, 5.0], [65.1, 5.0], [65.2, 5.0], [65.3, 5.0], [65.4, 5.0], [65.5, 5.0], [65.6, 5.0], [65.7, 5.0], [65.8, 5.0], [65.9, 5.0], [66.0, 5.0], [66.1, 5.0], [66.2, 5.0], [66.3, 5.0], [66.4, 5.0], [66.5, 5.0], [66.6, 5.0], [66.7, 5.0], [66.8, 5.0], [66.9, 5.0], [67.0, 5.0], [67.1, 5.0], [67.2, 5.0], [67.3, 5.0], [67.4, 5.0], [67.5, 5.0], [67.6, 5.0], [67.7, 5.0], [67.8, 5.0], [67.9, 5.0], [68.0, 5.0], [68.1, 5.0], [68.2, 5.0], [68.3, 5.0], [68.4, 5.0], [68.5, 5.0], [68.6, 5.0], [68.7, 5.0], [68.8, 5.0], [68.9, 5.0], [69.0, 5.0], [69.1, 5.0], [69.2, 5.0], [69.3, 5.0], [69.4, 5.0], [69.5, 5.0], [69.6, 5.0], [69.7, 5.0], [69.8, 5.0], [69.9, 5.0], [70.0, 5.0], [70.1, 5.0], [70.2, 5.0], [70.3, 5.0], [70.4, 5.0], [70.5, 5.0], [70.6, 5.0], [70.7, 5.0], [70.8, 5.0], [70.9, 5.0], [71.0, 5.0], [71.1, 5.0], [71.2, 5.0], [71.3, 5.0], [71.4, 5.0], [71.5, 5.0], [71.6, 5.0], [71.7, 5.0], [71.8, 5.0], [71.9, 5.0], [72.0, 5.0], [72.1, 5.0], [72.2, 5.0], [72.3, 5.0], [72.4, 5.0], [72.5, 5.0], [72.6, 5.0], [72.7, 5.0], [72.8, 5.0], [72.9, 5.0], [73.0, 5.0], [73.1, 5.0], [73.2, 5.0], [73.3, 5.0], [73.4, 5.0], [73.5, 5.0], [73.6, 5.0], [73.7, 5.0], [73.8, 5.0], [73.9, 5.0], [74.0, 5.0], [74.1, 5.0], [74.2, 5.0], [74.3, 5.0], [74.4, 5.0], [74.5, 5.0], [74.6, 5.0], [74.7, 5.0], [74.8, 5.0], [74.9, 5.0], [75.0, 5.0], [75.1, 5.0], [75.2, 5.0], [75.3, 5.0], [75.4, 5.0], [75.5, 5.0], [75.6, 5.0], [75.7, 5.0], [75.8, 5.0], [75.9, 5.0], [76.0, 5.0], [76.1, 5.0], [76.2, 5.0], [76.3, 5.0], [76.4, 5.0], [76.5, 5.0], [76.6, 5.0], [76.7, 5.0], [76.8, 5.0], [76.9, 5.0], [77.0, 5.0], [77.1, 5.0], [77.2, 5.0], [77.3, 5.0], [77.4, 5.0], [77.5, 5.0], [77.6, 5.0], [77.7, 5.0], [77.8, 5.0], [77.9, 5.0], [78.0, 5.0], [78.1, 5.0], [78.2, 5.0], [78.3, 5.0], [78.4, 5.0], [78.5, 5.0], [78.6, 5.0], [78.7, 5.0], [78.8, 5.0], [78.9, 5.0], [79.0, 5.0], [79.1, 5.0], [79.2, 5.0], [79.3, 5.0], [79.4, 5.0], [79.5, 5.0], [79.6, 5.0], [79.7, 5.0], [79.8, 5.0], [79.9, 5.0], [80.0, 5.0], [80.1, 5.0], [80.2, 5.0], [80.3, 5.0], [80.4, 5.0], [80.5, 5.0], [80.6, 5.0], [80.7, 5.0], [80.8, 5.0], [80.9, 5.0], [81.0, 5.0], [81.1, 5.0], [81.2, 5.0], [81.3, 5.0], [81.4, 5.0], [81.5, 5.0], [81.6, 5.0], [81.7, 5.0], [81.8, 5.0], [81.9, 5.0], [82.0, 5.0], [82.1, 5.0], [82.2, 5.0], [82.3, 5.0], [82.4, 5.0], [82.5, 5.0], [82.6, 5.0], [82.7, 5.0], [82.8, 5.0], [82.9, 5.0], [83.0, 5.0], [83.1, 5.0], [83.2, 5.0], [83.3, 5.0], [83.4, 5.0], [83.5, 5.0], [83.6, 5.0], [83.7, 5.0], [83.8, 5.0], [83.9, 5.0], [84.0, 5.0], [84.1, 5.0], [84.2, 5.0], [84.3, 5.0], [84.4, 5.0], [84.5, 5.0], [84.6, 5.0], [84.7, 5.0], [84.8, 5.0], [84.9, 5.0], [85.0, 5.0], [85.1, 5.0], [85.2, 5.0], [85.3, 5.0], [85.4, 5.0], [85.5, 5.0], [85.6, 5.0], [85.7, 5.0], [85.8, 5.0], [85.9, 5.0], [86.0, 5.0], [86.1, 5.0], [86.2, 5.0], [86.3, 5.0], [86.4, 5.0], [86.5, 5.0], [86.6, 5.0], [86.7, 5.0], [86.8, 5.0], [86.9, 5.0], [87.0, 5.0], [87.1, 5.0], [87.2, 5.0], [87.3, 5.0], [87.4, 5.0], [87.5, 5.0], [87.6, 6.0], [87.7, 6.0], [87.8, 6.0], [87.9, 6.0], [88.0, 6.0], [88.1, 6.0], [88.2, 6.0], [88.3, 6.0], [88.4, 6.0], [88.5, 6.0], [88.6, 6.0], [88.7, 6.0], [88.8, 6.0], [88.9, 6.0], [89.0, 6.0], [89.1, 6.0], [89.2, 6.0], [89.3, 6.0], [89.4, 6.0], [89.5, 6.0], [89.6, 6.0], [89.7, 6.0], [89.8, 6.0], [89.9, 6.0], [90.0, 6.0], [90.1, 6.0], [90.2, 6.0], [90.3, 6.0], [90.4, 6.0], [90.5, 6.0], [90.6, 6.0], [90.7, 6.0], [90.8, 6.0], [90.9, 6.0], [91.0, 6.0], [91.1, 6.0], [91.2, 6.0], [91.3, 6.0], [91.4, 6.0], [91.5, 6.0], [91.6, 6.0], [91.7, 6.0], [91.8, 6.0], [91.9, 6.0], [92.0, 6.0], [92.1, 6.0], [92.2, 6.0], [92.3, 6.0], [92.4, 6.0], [92.5, 6.0], [92.6, 6.0], [92.7, 6.0], [92.8, 6.0], [92.9, 6.0], [93.0, 6.0], [93.1, 6.0], [93.2, 6.0], [93.3, 6.0], [93.4, 6.0], [93.5, 6.0], [93.6, 6.0], [93.7, 6.0], [93.8, 6.0], [93.9, 6.0], [94.0, 6.0], [94.1, 6.0], [94.2, 6.0], [94.3, 6.0], [94.4, 6.0], [94.5, 6.0], [94.6, 6.0], [94.7, 6.0], [94.8, 6.0], [94.9, 6.0], [95.0, 6.0], [95.1, 6.0], [95.2, 6.0], [95.3, 6.0], [95.4, 6.0], [95.5, 6.0], [95.6, 6.0], [95.7, 6.0], [95.8, 6.0], [95.9, 6.0], [96.0, 6.0], [96.1, 6.0], [96.2, 6.0], [96.3, 6.0], [96.4, 6.0], [96.5, 6.0], [96.6, 6.0], [96.7, 6.0], [96.8, 6.0], [96.9, 6.0], [97.0, 6.0], [97.1, 6.0], [97.2, 6.0], [97.3, 6.0], [97.4, 6.0], [97.5, 6.0], [97.6, 6.0], [97.7, 7.0], [97.8, 7.0], [97.9, 7.0], [98.0, 7.0], [98.1, 7.0], [98.2, 7.0], [98.3, 7.0], [98.4, 7.0], [98.5, 7.0], [98.6, 7.0], [98.7, 7.0], [98.8, 7.0], [98.9, 7.0], [99.0, 7.0], [99.1, 7.0], [99.2, 7.0], [99.3, 7.0], [99.4, 8.0], [99.5, 8.0], [99.6, 8.0], [99.7, 8.0], [99.8, 9.0], [99.9, 10.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 12056.0, "minX": 0.0, "maxY": 12056.0, "series": [{"data": [[0.0, 12056.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4.9E-324, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12056.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 12056.0, "series": [{"data": [[0.0, 12056.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.792667137E12, "maxY": 1.0, "series": [{"data": [[1.79266717E12, 1.0], [1.792667172E12, 1.0], [1.792667174E12, 1.0], [1.792667176E12, 1.0], [1.792667178E12, 1.0], [1.792667158E12, 1.0], [1.79266716E12, 1.0], [1.792667162E12, 1.0], [1.792667164E12, 1.0], [1.792667166E12, 1.0], [1.792667168E12, 1.0], [1.792667148E12, 1.0], [1.792667191E12, 1.0], [1.792667193E12, 1.0], [1.79266715E12, 1.0], [1.792667152E12, 1.0], [1.792667195E12, 1.0], [1.792667197E12, 1.0], [1.792667154E12, 1.0], [1.792667156E12, 1.0], [1.792667179E12, 1.0], [1.792667181E12, 1.0], [1.792667138E12, 1.0], [1.79266714E12, 1.0], [1.792667183E12, 1.0], [1.792667185E12, 1.0], [1.792667142E12, 1.0], [1.792667144E12, 1.0], [1.792667187E12, 1.0], [1.792667189E12, 1.0], [1.792667146E12, 1.0], [1.792667169E12, 1.0], [1.792667171E12, 1.0], [1.792667173E12, 1.0], [1.792667175E12, 1.0], [1.792667177E12, 1.0], [1.792667159E12, 1.0], [1.792667161E12, 1.0], [1.792667163E12, 1.0], [1.792667165E12, 1.0], [1.792667167E12, 1.0], [1.792667147E12, 1.0], [1.79266719E12, 1.0], [1.792667149E12, 1.0], [1.792667192E12, 1.0], [1.792667151E12, 1.0], [1.792667194E12, 1.0], [1.792667153E12, 1.0], [1.792667196E12, 1.0], [1.792667155E12, 1.0], [1.792667157E12, 1.0], [1.792667137E12, 1.0], [1.79266718E12, 1.0], [1.792667139E12, 1.0], [1.792667182E12, 1.0], [1.792667141E12, 1.0], [1.792667184E12, 1.0], [1.792667143E12, 1.0], [1.792667186E12, 1.0], [1.792667145E12, 1.0], [1.792667188E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667197E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4.852936297279359, "minX": 1.0, "maxY": 4.852936297279359, "series": [{"data": [[1.0, 4.852936297279359]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 4.852936297279359]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7560.0, "minX": 1.792667137E12, "maxY": 99008.0, "series": [{"data": [[1.79266717E12, 96638.0], [1.792667172E12, 93320.0], [1.792667174E12, 96164.0], [1.792667176E12, 98534.0], [1.792667178E12, 97112.0], [1.792667158E12, 94742.0], [1.79266716E12, 96638.0], [1.792667162E12, 96638.0], [1.792667164E12, 96135.0], [1.792667166E12, 97112.0], [1.792667168E12, 96164.0], [1.792667148E12, 93596.0], [1.792667191E12, 98534.0], [1.792667193E12, 97586.0], [1.79266715E12, 93596.0], [1.792667152E12, 95015.0], [1.792667195E12, 96638.0], [1.792667197E12, 80996.0], [1.792667154E12, 94069.0], [1.792667156E12, 95584.0], [1.792667179E12, 96638.0], [1.792667181E12, 96638.0], [1.792667138E12, 84609.0], [1.79266714E12, 91704.0], [1.792667183E12, 97586.0], [1.792667185E12, 98060.0], [1.792667142E12, 89339.0], [1.792667144E12, 90758.0], [1.792667187E12, 95690.0], [1.792667189E12, 96638.0], [1.792667146E12, 92650.0], [1.792667169E12, 94742.0], [1.792667171E12, 97112.0], [1.792667173E12, 97586.0], [1.792667175E12, 95690.0], [1.792667177E12, 97586.0], [1.792667159E12, 94268.0], [1.792667161E12, 94742.0], [1.792667163E12, 95690.0], [1.792667165E12, 97586.0], [1.792667167E12, 95690.0], [1.792667147E12, 92650.0], [1.79266719E12, 96638.0], [1.792667149E12, 93123.0], [1.792667192E12, 97112.0], [1.792667151E12, 95961.0], [1.792667194E12, 98060.0], [1.792667153E12, 94069.0], [1.792667196E12, 99008.0], [1.792667155E12, 94069.0], [1.792667157E12, 95216.0], [1.792667137E12, 8514.0], [1.79266718E12, 98534.0], [1.792667139E12, 87920.0], [1.792667182E12, 98534.0], [1.792667141E12, 89339.0], [1.792667184E12, 97586.0], [1.792667143E12, 90758.0], [1.792667186E12, 97083.0], [1.792667145E12, 91260.0], [1.792667188E12, 96164.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79266717E12, 85680.0], [1.792667172E12, 82740.0], [1.792667174E12, 85260.0], [1.792667176E12, 87360.0], [1.792667178E12, 86100.0], [1.792667158E12, 84000.0], [1.79266716E12, 85680.0], [1.792667162E12, 85680.0], [1.792667164E12, 85260.0], [1.792667166E12, 86100.0], [1.792667168E12, 85260.0], [1.792667148E12, 83160.0], [1.792667191E12, 87360.0], [1.792667193E12, 86520.0], [1.79266715E12, 83160.0], [1.792667152E12, 84420.0], [1.792667195E12, 85680.0], [1.792667197E12, 71820.0], [1.792667154E12, 83580.0], [1.792667156E12, 84840.0], [1.792667179E12, 85680.0], [1.792667181E12, 85680.0], [1.792667138E12, 75180.0], [1.79266714E12, 81480.0], [1.792667183E12, 86520.0], [1.792667185E12, 86940.0], [1.792667142E12, 79380.0], [1.792667144E12, 80640.0], [1.792667187E12, 84840.0], [1.792667189E12, 85680.0], [1.792667146E12, 82320.0], [1.792667169E12, 84000.0], [1.792667171E12, 86100.0], [1.792667173E12, 86520.0], [1.792667175E12, 84840.0], [1.792667177E12, 86520.0], [1.792667159E12, 83580.0], [1.792667161E12, 84000.0], [1.792667163E12, 84840.0], [1.792667165E12, 86520.0], [1.792667167E12, 84840.0], [1.792667147E12, 82320.0], [1.79266719E12, 85680.0], [1.792667149E12, 82740.0], [1.792667192E12, 86100.0], [1.792667151E12, 85260.0], [1.792667194E12, 86940.0], [1.792667153E12, 83580.0], [1.792667196E12, 87780.0], [1.792667155E12, 83580.0], [1.792667157E12, 84420.0], [1.792667137E12, 7560.0], [1.79266718E12, 87360.0], [1.792667139E12, 78120.0], [1.792667182E12, 87360.0], [1.792667141E12, 79380.0], [1.792667184E12, 86520.0], [1.792667143E12, 80640.0], [1.792667186E12, 86100.0], [1.792667145E12, 81060.0], [1.792667188E12, 85260.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667197E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4.706730769230769, "minX": 1.792667137E12, "maxY": 5.318435754189947, "series": [{"data": [[1.79266717E12, 4.818627450980394], [1.792667172E12, 4.979695431472081], [1.792667174E12, 4.807881773399018], [1.792667176E12, 4.7115384615384635], [1.792667178E12, 4.804878048780488], [1.792667158E12, 4.9049999999999985], [1.79266716E12, 4.779411764705887], [1.792667162E12, 4.78921568627451], [1.792667164E12, 4.832512315270935], [1.792667166E12, 4.780487804878046], [1.792667168E12, 4.857142857142857], [1.792667148E12, 4.898989898989902], [1.792667191E12, 4.706730769230772], [1.792667193E12, 4.747572815533975], [1.79266715E12, 4.909090909090906], [1.792667152E12, 4.81094527363184], [1.792667195E12, 4.813725490196078], [1.792667197E12, 4.78362573099415], [1.792667154E12, 4.894472361809043], [1.792667156E12, 4.826732673267327], [1.792667179E12, 4.8578431372549025], [1.792667181E12, 4.808823529411764], [1.792667138E12, 5.318435754189947], [1.79266714E12, 4.912371134020618], [1.792667183E12, 4.766990291262137], [1.792667185E12, 4.753623188405795], [1.792667142E12, 5.079365079365079], [1.792667144E12, 5.010416666666667], [1.792667187E12, 4.861386138613862], [1.792667189E12, 4.789215686274513], [1.792667146E12, 4.903061224489796], [1.792667169E12, 4.9399999999999995], [1.792667171E12, 4.790243902439026], [1.792667173E12, 4.771844660194178], [1.792667175E12, 4.896039603960397], [1.792667177E12, 4.762135922330096], [1.792667159E12, 4.839195979899498], [1.792667161E12, 4.894999999999996], [1.792667163E12, 4.8217821782178225], [1.792667165E12, 4.781553398058253], [1.792667167E12, 4.876237623762376], [1.792667147E12, 5.020408163265309], [1.79266719E12, 4.81862745098039], [1.792667149E12, 4.994923857868019], [1.792667192E12, 4.795121951219512], [1.792667151E12, 4.793103448275862], [1.792667194E12, 4.772946859903382], [1.792667153E12, 4.904522613065326], [1.792667196E12, 4.736842105263159], [1.792667155E12, 4.914572864321608], [1.792667157E12, 4.820895522388059], [1.792667137E12, 5.222222222222222], [1.79266718E12, 4.706730769230769], [1.792667139E12, 5.0430107526881764], [1.792667182E12, 4.735576923076925], [1.792667141E12, 4.973544973544973], [1.792667184E12, 4.74271844660194], [1.792667143E12, 5.046874999999998], [1.792667186E12, 4.7707317073170765], [1.792667145E12, 5.010362694300521], [1.792667188E12, 4.817733990147782]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667197E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4.7019230769230775, "minX": 1.792667137E12, "maxY": 5.31284916201117, "series": [{"data": [[1.79266717E12, 4.818627450980394], [1.792667172E12, 4.974619289340101], [1.792667174E12, 4.802955665024634], [1.792667176E12, 4.7019230769230775], [1.792667178E12, 4.804878048780488], [1.792667158E12, 4.8950000000000005], [1.79266716E12, 4.779411764705887], [1.792667162E12, 4.78921568627451], [1.792667164E12, 4.827586206896551], [1.792667166E12, 4.780487804878046], [1.792667168E12, 4.857142857142857], [1.792667148E12, 4.898989898989902], [1.792667191E12, 4.706730769230772], [1.792667193E12, 4.74271844660194], [1.79266715E12, 4.909090909090906], [1.792667152E12, 4.805970149253733], [1.792667195E12, 4.813725490196078], [1.792667197E12, 4.777777777777777], [1.792667154E12, 4.8894472361809], [1.792667156E12, 4.8217821782178225], [1.792667179E12, 4.8578431372549025], [1.792667181E12, 4.808823529411764], [1.792667138E12, 5.31284916201117], [1.79266714E12, 4.912371134020618], [1.792667183E12, 4.766990291262137], [1.792667185E12, 4.748792270531399], [1.792667142E12, 5.0740740740740735], [1.792667144E12, 5.010416666666667], [1.792667187E12, 4.861386138613862], [1.792667189E12, 4.784313725490199], [1.792667146E12, 4.892857142857145], [1.792667169E12, 4.9350000000000005], [1.792667171E12, 4.785365853658532], [1.792667173E12, 4.766990291262141], [1.792667175E12, 4.891089108910891], [1.792667177E12, 4.762135922330096], [1.792667159E12, 4.834170854271357], [1.792667161E12, 4.894999999999996], [1.792667163E12, 4.8217821782178225], [1.792667165E12, 4.781553398058253], [1.792667167E12, 4.871287128712871], [1.792667147E12, 5.020408163265309], [1.79266719E12, 4.813725490196076], [1.792667149E12, 4.994923857868019], [1.792667192E12, 4.795121951219512], [1.792667151E12, 4.788177339901475], [1.792667194E12, 4.772946859903382], [1.792667153E12, 4.904522613065326], [1.792667196E12, 4.736842105263159], [1.792667155E12, 4.904522613065326], [1.792667157E12, 4.815920398009951], [1.792667137E12, 5.222222222222222], [1.79266718E12, 4.706730769230769], [1.792667139E12, 5.03225806451613], [1.792667182E12, 4.735576923076925], [1.792667141E12, 4.9682539682539675], [1.792667184E12, 4.74271844660194], [1.792667143E12, 5.046874999999998], [1.792667186E12, 4.765853658536588], [1.792667145E12, 4.994818652849739], [1.792667188E12, 4.817733990147782]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667197E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.792667137E12, "maxY": 0.014563106796116505, "series": [{"data": [[1.79266717E12, 0.0049019607843137246], [1.792667172E12, 0.005076142131979695], [1.792667174E12, 0.004926108374384235], [1.792667176E12, 0.009615384615384612], [1.792667178E12, 0.004878048780487804], [1.792667158E12, 0.005000000000000005], [1.79266716E12, 0.0], [1.792667162E12, 0.0], [1.792667164E12, 0.004926108374384242], [1.792667166E12, 0.0], [1.792667168E12, 0.0], [1.792667148E12, 0.00505050505050505], [1.792667191E12, 0.004807692307692305], [1.792667193E12, 0.0], [1.79266715E12, 0.00505050505050505], [1.792667152E12, 0.0], [1.792667195E12, 0.0049019607843137246], [1.792667197E12, 0.0], [1.792667154E12, 0.0], [1.792667156E12, 0.00495049504950495], [1.792667179E12, 0.009803921568627449], [1.792667181E12, 0.0], [1.792667138E12, 0.005586592178770951], [1.79266714E12, 0.0], [1.792667183E12, 0.0], [1.792667185E12, 0.00483091787439614], [1.792667142E12, 0.005291005291005292], [1.792667144E12, 0.005208333333333333], [1.792667187E12, 0.009900990099009906], [1.792667189E12, 0.0049019607843137246], [1.792667146E12, 0.005102040816326536], [1.792667169E12, 0.0], [1.792667171E12, 0.009756097560975606], [1.792667173E12, 0.009708737864077666], [1.792667175E12, 0.0], [1.792667177E12, 0.004854368932038834], [1.792667159E12, 0.0], [1.792667161E12, 0.005000000000000005], [1.792667163E12, 0.00495049504950495], [1.792667165E12, 0.014563106796116505], [1.792667167E12, 0.004950495049504949], [1.792667147E12, 0.00510204081632653], [1.79266719E12, 0.0049019607843137246], [1.792667149E12, 0.0], [1.792667192E12, 0.0], [1.792667151E12, 0.004926108374384236], [1.792667194E12, 0.0], [1.792667153E12, 0.010050251256281407], [1.792667196E12, 0.00956937799043062], [1.792667155E12, 0.005025125628140703], [1.792667157E12, 0.009950248756218904], [1.792667137E12, 0.0], [1.79266718E12, 0.0], [1.792667139E12, 0.005376344086021506], [1.792667182E12, 0.009615384615384612], [1.792667141E12, 0.010582010582010583], [1.792667184E12, 0.0], [1.792667143E12, 0.0], [1.792667186E12, 0.004878048780487804], [1.792667145E12, 0.0], [1.792667188E12, 0.004926108374384236]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667197E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.792667137E12, "maxY": 46.0, "series": [{"data": [[1.79266717E12, 9.0], [1.792667172E12, 7.0], [1.792667174E12, 9.0], [1.792667176E12, 7.0], [1.792667178E12, 10.0], [1.792667158E12, 11.0], [1.79266716E12, 7.0], [1.792667162E12, 7.0], [1.792667164E12, 11.0], [1.792667166E12, 8.0], [1.792667168E12, 11.0], [1.792667148E12, 9.0], [1.792667191E12, 8.0], [1.792667193E12, 8.0], [1.79266715E12, 7.0], [1.792667152E12, 7.0], [1.792667195E12, 7.0], [1.792667197E12, 7.0], [1.792667154E12, 9.0], [1.792667156E12, 7.0], [1.792667179E12, 15.0], [1.792667181E12, 7.0], [1.792667138E12, 46.0], [1.79266714E12, 8.0], [1.792667183E12, 7.0], [1.792667185E12, 8.0], [1.792667142E12, 9.0], [1.792667144E12, 13.0], [1.792667187E12, 9.0], [1.792667189E12, 8.0], [1.792667146E12, 10.0], [1.792667169E12, 9.0], [1.792667171E12, 6.0], [1.792667173E12, 8.0], [1.792667175E12, 13.0], [1.792667177E12, 7.0], [1.792667159E12, 10.0], [1.792667161E12, 7.0], [1.792667163E12, 13.0], [1.792667165E12, 7.0], [1.792667167E12, 8.0], [1.792667147E12, 8.0], [1.79266719E12, 9.0], [1.792667149E12, 9.0], [1.792667192E12, 9.0], [1.792667151E12, 7.0], [1.792667194E12, 10.0], [1.792667153E12, 8.0], [1.792667196E12, 7.0], [1.792667155E12, 8.0], [1.792667157E12, 7.0], [1.792667137E12, 6.0], [1.79266718E12, 12.0], [1.792667139E12, 14.0], [1.792667182E12, 9.0], [1.792667141E12, 8.0], [1.792667184E12, 10.0], [1.792667143E12, 10.0], [1.792667186E12, 9.0], [1.792667145E12, 7.0], [1.792667188E12, 10.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79266717E12, 4.0], [1.792667172E12, 4.0], [1.792667174E12, 4.0], [1.792667176E12, 4.0], [1.792667178E12, 4.0], [1.792667158E12, 4.0], [1.79266716E12, 4.0], [1.792667162E12, 4.0], [1.792667164E12, 4.0], [1.792667166E12, 4.0], [1.792667168E12, 4.0], [1.792667148E12, 4.0], [1.792667191E12, 4.0], [1.792667193E12, 4.0], [1.79266715E12, 4.0], [1.792667152E12, 4.0], [1.792667195E12, 4.0], [1.792667197E12, 4.0], [1.792667154E12, 4.0], [1.792667156E12, 4.0], [1.792667179E12, 4.0], [1.792667181E12, 4.0], [1.792667138E12, 4.0], [1.79266714E12, 4.0], [1.792667183E12, 4.0], [1.792667185E12, 4.0], [1.792667142E12, 4.0], [1.792667144E12, 4.0], [1.792667187E12, 4.0], [1.792667189E12, 4.0], [1.792667146E12, 4.0], [1.792667169E12, 4.0], [1.792667171E12, 4.0], [1.792667173E12, 4.0], [1.792667175E12, 4.0], [1.792667177E12, 4.0], [1.792667159E12, 4.0], [1.792667161E12, 4.0], [1.792667163E12, 4.0], [1.792667165E12, 4.0], [1.792667167E12, 4.0], [1.792667147E12, 4.0], [1.79266719E12, 4.0], [1.792667149E12, 4.0], [1.792667192E12, 4.0], [1.792667151E12, 4.0], [1.792667194E12, 4.0], [1.792667153E12, 4.0], [1.792667196E12, 4.0], [1.792667155E12, 4.0], [1.792667157E12, 4.0], [1.792667137E12, 4.0], [1.79266718E12, 4.0], [1.792667139E12, 4.0], [1.792667182E12, 4.0], [1.792667141E12, 4.0], [1.792667184E12, 4.0], [1.792667143E12, 4.0], [1.792667186E12, 4.0], [1.792667145E12, 4.0], [1.792667188E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79266717E12, 6.0], [1.792667172E12, 6.0], [1.792667174E12, 6.0], [1.792667176E12, 5.0], [1.792667178E12, 5.0], [1.792667158E12, 6.0], [1.79266716E12, 5.0], [1.792667162E12, 6.0], [1.792667164E12, 6.0], [1.792667166E12, 6.0], [1.792667168E12, 6.0], [1.792667148E12, 6.0], [1.792667191E12, 5.0], [1.792667193E12, 6.0], [1.79266715E12, 6.0], [1.792667152E12, 6.0], [1.792667195E12, 6.0], [1.792667197E12, 6.0], [1.792667154E12, 6.0], [1.792667156E12, 6.0], [1.792667179E12, 6.0], [1.792667181E12, 6.0], [1.792667138E12, 6.0], [1.79266714E12, 6.0], [1.792667183E12, 6.0], [1.792667185E12, 6.0], [1.792667142E12, 6.0], [1.792667144E12, 6.0], [1.792667187E12, 6.0], [1.792667189E12, 6.0], [1.792667146E12, 6.0], [1.792667169E12, 6.0], [1.792667171E12, 5.400000000000006], [1.792667173E12, 5.0], [1.792667175E12, 6.0], [1.792667177E12, 6.0], [1.792667159E12, 6.0], [1.792667161E12, 6.0], [1.792667163E12, 5.0], [1.792667165E12, 5.300000000000011], [1.792667167E12, 6.0], [1.792667147E12, 6.0], [1.79266719E12, 6.0], [1.792667149E12, 6.0], [1.792667192E12, 5.0], [1.792667151E12, 6.0], [1.792667194E12, 6.0], [1.792667153E12, 6.0], [1.792667196E12, 6.0], [1.792667155E12, 6.0], [1.792667157E12, 6.0], [1.792667137E12, 6.0], [1.79266718E12, 5.099999999999994], [1.792667139E12, 6.0], [1.792667182E12, 6.0], [1.792667141E12, 6.0], [1.792667184E12, 6.0], [1.792667143E12, 6.0], [1.792667186E12, 6.0], [1.792667145E12, 6.0], [1.792667188E12, 6.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79266717E12, 7.949999999999989], [1.792667172E12, 7.0], [1.792667174E12, 7.0], [1.792667176E12, 6.909999999999997], [1.792667178E12, 8.879999999999995], [1.792667158E12, 7.0], [1.79266716E12, 7.0], [1.792667162E12, 6.949999999999989], [1.792667164E12, 7.0], [1.792667166E12, 7.0], [1.792667168E12, 7.0], [1.792667148E12, 8.009999999999991], [1.792667191E12, 6.909999999999997], [1.792667193E12, 7.0], [1.79266715E12, 7.0], [1.792667152E12, 7.0], [1.792667195E12, 7.0], [1.792667197E12, 6.280000000000001], [1.792667154E12, 8.0], [1.792667156E12, 7.0], [1.792667179E12, 7.0], [1.792667181E12, 7.0], [1.792667138E12, 15.599999999999568], [1.79266714E12, 7.050000000000011], [1.792667183E12, 6.0], [1.792667185E12, 7.0], [1.792667142E12, 8.099999999999994], [1.792667144E12, 8.349999999999966], [1.792667187E12, 7.969999999999999], [1.792667189E12, 6.949999999999989], [1.792667146E12, 10.0], [1.792667169E12, 8.0], [1.792667171E12, 6.0], [1.792667173E12, 7.930000000000007], [1.792667175E12, 7.969999999999999], [1.792667177E12, 7.0], [1.792667159E12, 8.0], [1.792667161E12, 7.0], [1.792667163E12, 7.969999999999999], [1.792667165E12, 6.0], [1.792667167E12, 7.969999999999999], [1.792667147E12, 7.030000000000001], [1.79266719E12, 7.949999999999989], [1.792667149E12, 8.02000000000001], [1.792667192E12, 8.0], [1.792667151E12, 7.0], [1.792667194E12, 7.9199999999999875], [1.792667153E12, 8.0], [1.792667196E12, 7.0], [1.792667155E12, 7.0], [1.792667157E12, 7.0], [1.792667137E12, 6.0], [1.79266718E12, 7.0], [1.792667139E12, 8.779999999999973], [1.792667182E12, 7.909999999999997], [1.792667141E12, 8.0], [1.792667184E12, 7.930000000000007], [1.792667143E12, 10.0], [1.792667186E12, 6.0], [1.792667145E12, 7.0], [1.792667188E12, 7.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79266717E12, 5.0], [1.792667172E12, 5.0], [1.792667174E12, 5.0], [1.792667176E12, 5.0], [1.792667178E12, 5.0], [1.792667158E12, 5.0], [1.79266716E12, 5.0], [1.792667162E12, 5.0], [1.792667164E12, 5.0], [1.792667166E12, 5.0], [1.792667168E12, 5.0], [1.792667148E12, 5.0], [1.792667191E12, 5.0], [1.792667193E12, 5.0], [1.79266715E12, 5.0], [1.792667152E12, 5.0], [1.792667195E12, 5.0], [1.792667197E12, 5.0], [1.792667154E12, 5.0], [1.792667156E12, 5.0], [1.792667179E12, 5.0], [1.792667181E12, 5.0], [1.792667138E12, 5.0], [1.79266714E12, 5.0], [1.792667183E12, 5.0], [1.792667185E12, 5.0], [1.792667142E12, 5.0], [1.792667144E12, 5.0], [1.792667187E12, 5.0], [1.792667189E12, 5.0], [1.792667146E12, 5.0], [1.792667169E12, 5.0], [1.792667171E12, 5.0], [1.792667173E12, 5.0], [1.792667175E12, 5.0], [1.792667177E12, 5.0], [1.792667159E12, 5.0], [1.792667161E12, 5.0], [1.792667163E12, 5.0], [1.792667165E12, 5.0], [1.792667167E12, 5.0], [1.792667147E12, 5.0], [1.79266719E12, 5.0], [1.792667149E12, 5.0], [1.792667192E12, 5.0], [1.792667151E12, 5.0], [1.792667194E12, 5.0], [1.792667153E12, 5.0], [1.792667196E12, 5.0], [1.792667155E12, 5.0], [1.792667157E12, 5.0], [1.792667137E12, 5.0], [1.79266718E12, 5.0], [1.792667139E12, 5.0], [1.792667182E12, 5.0], [1.792667141E12, 5.0], [1.792667184E12, 5.0], [1.792667143E12, 5.0], [1.792667186E12, 5.0], [1.792667145E12, 5.0], [1.792667188E12, 5.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79266717E12, 6.0], [1.792667172E12, 6.0], [1.792667174E12, 6.0], [1.792667176E12, 6.0], [1.792667178E12, 6.0], [1.792667158E12, 6.0], [1.79266716E12, 6.0], [1.792667162E12, 6.0], [1.792667164E12, 6.0], [1.792667166E12, 6.0], [1.792667168E12, 6.0], [1.792667148E12, 6.0], [1.792667191E12, 6.0], [1.792667193E12, 6.0], [1.79266715E12, 6.0], [1.792667152E12, 6.0], [1.792667195E12, 6.0], [1.792667197E12, 6.0], [1.792667154E12, 6.0], [1.792667156E12, 6.0], [1.792667179E12, 6.0], [1.792667181E12, 6.0], [1.792667138E12, 6.0], [1.79266714E12, 6.0], [1.792667183E12, 6.0], [1.792667185E12, 6.0], [1.792667142E12, 6.0], [1.792667144E12, 6.0], [1.792667187E12, 6.0], [1.792667189E12, 6.0], [1.792667146E12, 6.0], [1.792667169E12, 6.0], [1.792667171E12, 6.0], [1.792667173E12, 6.0], [1.792667175E12, 6.0], [1.792667177E12, 6.0], [1.792667159E12, 6.0], [1.792667161E12, 6.0], [1.792667163E12, 6.0], [1.792667165E12, 6.0], [1.792667167E12, 6.0], [1.792667147E12, 6.0], [1.79266719E12, 6.0], [1.792667149E12, 6.0], [1.792667192E12, 6.0], [1.792667151E12, 6.0], [1.792667194E12, 6.0], [1.792667153E12, 6.0], [1.792667196E12, 6.0], [1.792667155E12, 6.0], [1.792667157E12, 6.0], [1.792667137E12, 6.0], [1.79266718E12, 6.0], [1.792667139E12, 6.0], [1.792667182E12, 6.0], [1.792667141E12, 6.0], [1.792667184E12, 6.0], [1.792667143E12, 6.0], [1.792667186E12, 6.0], [1.792667145E12, 6.0], [1.792667188E12, 6.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667197E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5.0, "minX": 18.0, "maxY": 5.0, "series": [{"data": [[171.0, 5.0], [179.0, 5.0], [186.0, 5.0], [189.0, 5.0], [194.0, 5.0], [192.0, 5.0], [193.0, 5.0], [196.0, 5.0], [198.0, 5.0], [197.0, 5.0], [199.0, 5.0], [203.0, 5.0], [201.0, 5.0], [202.0, 5.0], [200.0, 5.0], [204.0, 5.0], [206.0, 5.0], [205.0, 5.0], [207.0, 5.0], [208.0, 5.0], [209.0, 5.0], [18.0, 5.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 209.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5.0, "minX": 18.0, "maxY": 5.0, "series": [{"data": [[171.0, 5.0], [179.0, 5.0], [186.0, 5.0], [189.0, 5.0], [194.0, 5.0], [192.0, 5.0], [193.0, 5.0], [196.0, 5.0], [198.0, 5.0], [197.0, 5.0], [199.0, 5.0], [203.0, 5.0], [201.0, 5.0], [202.0, 5.0], [200.0, 5.0], [204.0, 5.0], [206.0, 5.0], [205.0, 5.0], [207.0, 5.0], [208.0, 5.0], [209.0, 5.0], [18.0, 5.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 209.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 18.0, "minX": 1.792667137E12, "maxY": 209.0, "series": [{"data": [[1.79266717E12, 204.0], [1.792667172E12, 197.0], [1.792667174E12, 203.0], [1.792667176E12, 208.0], [1.792667178E12, 205.0], [1.792667158E12, 199.0], [1.79266716E12, 204.0], [1.792667162E12, 204.0], [1.792667164E12, 203.0], [1.792667166E12, 205.0], [1.792667168E12, 203.0], [1.792667148E12, 198.0], [1.792667191E12, 208.0], [1.792667193E12, 206.0], [1.79266715E12, 198.0], [1.792667152E12, 201.0], [1.792667195E12, 204.0], [1.792667197E12, 170.0], [1.792667154E12, 199.0], [1.792667156E12, 202.0], [1.792667179E12, 204.0], [1.792667181E12, 204.0], [1.792667138E12, 180.0], [1.79266714E12, 194.0], [1.792667183E12, 206.0], [1.792667185E12, 207.0], [1.792667142E12, 189.0], [1.792667144E12, 192.0], [1.792667187E12, 202.0], [1.792667189E12, 204.0], [1.792667146E12, 196.0], [1.792667169E12, 200.0], [1.792667171E12, 205.0], [1.792667173E12, 206.0], [1.792667175E12, 202.0], [1.792667177E12, 206.0], [1.792667159E12, 200.0], [1.792667161E12, 200.0], [1.792667163E12, 202.0], [1.792667165E12, 206.0], [1.792667167E12, 202.0], [1.792667147E12, 196.0], [1.79266719E12, 204.0], [1.792667149E12, 197.0], [1.792667192E12, 205.0], [1.792667151E12, 203.0], [1.792667194E12, 207.0], [1.792667153E12, 199.0], [1.792667196E12, 209.0], [1.792667155E12, 199.0], [1.792667157E12, 201.0], [1.792667137E12, 18.0], [1.79266718E12, 208.0], [1.792667139E12, 186.0], [1.792667182E12, 208.0], [1.792667141E12, 189.0], [1.792667184E12, 206.0], [1.792667143E12, 192.0], [1.792667186E12, 205.0], [1.792667145E12, 193.0], [1.792667188E12, 203.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667197E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 18.0, "minX": 1.792667137E12, "maxY": 209.0, "series": [{"data": [[1.79266717E12, 204.0], [1.792667172E12, 197.0], [1.792667174E12, 203.0], [1.792667176E12, 208.0], [1.792667178E12, 205.0], [1.792667158E12, 200.0], [1.79266716E12, 204.0], [1.792667162E12, 204.0], [1.792667164E12, 203.0], [1.792667166E12, 205.0], [1.792667168E12, 203.0], [1.792667148E12, 198.0], [1.792667191E12, 208.0], [1.792667193E12, 206.0], [1.79266715E12, 198.0], [1.792667152E12, 201.0], [1.792667195E12, 204.0], [1.792667197E12, 171.0], [1.792667154E12, 199.0], [1.792667156E12, 202.0], [1.792667179E12, 204.0], [1.792667181E12, 204.0], [1.792667138E12, 179.0], [1.79266714E12, 194.0], [1.792667183E12, 206.0], [1.792667185E12, 207.0], [1.792667142E12, 189.0], [1.792667144E12, 192.0], [1.792667187E12, 202.0], [1.792667189E12, 204.0], [1.792667146E12, 196.0], [1.792667169E12, 200.0], [1.792667171E12, 205.0], [1.792667173E12, 206.0], [1.792667175E12, 202.0], [1.792667177E12, 206.0], [1.792667159E12, 199.0], [1.792667161E12, 200.0], [1.792667163E12, 202.0], [1.792667165E12, 206.0], [1.792667167E12, 202.0], [1.792667147E12, 196.0], [1.79266719E12, 204.0], [1.792667149E12, 197.0], [1.792667192E12, 205.0], [1.792667151E12, 203.0], [1.792667194E12, 207.0], [1.792667153E12, 199.0], [1.792667196E12, 209.0], [1.792667155E12, 199.0], [1.792667157E12, 201.0], [1.792667137E12, 18.0], [1.79266718E12, 208.0], [1.792667139E12, 186.0], [1.792667182E12, 208.0], [1.792667141E12, 189.0], [1.792667184E12, 206.0], [1.792667143E12, 192.0], [1.792667186E12, 205.0], [1.792667145E12, 193.0], [1.792667188E12, 203.0]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667197E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 18.0, "minX": 1.792667137E12, "maxY": 209.0, "series": [{"data": [[1.79266717E12, 204.0], [1.792667172E12, 197.0], [1.792667174E12, 203.0], [1.792667176E12, 208.0], [1.792667178E12, 205.0], [1.792667158E12, 200.0], [1.79266716E12, 204.0], [1.792667162E12, 204.0], [1.792667164E12, 203.0], [1.792667166E12, 205.0], [1.792667168E12, 203.0], [1.792667148E12, 198.0], [1.792667191E12, 208.0], [1.792667193E12, 206.0], [1.79266715E12, 198.0], [1.792667152E12, 201.0], [1.792667195E12, 204.0], [1.792667197E12, 171.0], [1.792667154E12, 199.0], [1.792667156E12, 202.0], [1.792667179E12, 204.0], [1.792667181E12, 204.0], [1.792667138E12, 179.0], [1.79266714E12, 194.0], [1.792667183E12, 206.0], [1.792667185E12, 207.0], [1.792667142E12, 189.0], [1.792667144E12, 192.0], [1.792667187E12, 202.0], [1.792667189E12, 204.0], [1.792667146E12, 196.0], [1.792667169E12, 200.0], [1.792667171E12, 205.0], [1.792667173E12, 206.0], [1.792667175E12, 202.0], [1.792667177E12, 206.0], [1.792667159E12, 199.0], [1.792667161E12, 200.0], [1.792667163E12, 202.0], [1.792667165E12, 206.0], [1.792667167E12, 202.0], [1.792667147E12, 196.0], [1.79266719E12, 204.0], [1.792667149E12, 197.0], [1.792667192E12, 205.0], [1.792667151E12, 203.0], [1.792667194E12, 207.0], [1.792667153E12, 199.0], [1.792667196E12, 209.0], [1.792667155E12, 199.0], [1.792667157E12, 201.0], [1.792667137E12, 18.0], [1.79266718E12, 208.0], [1.792667139E12, 186.0], [1.792667182E12, 208.0], [1.792667141E12, 189.0], [1.792667184E12, 206.0], [1.792667143E12, 192.0], [1.792667186E12, 205.0], [1.792667145E12, 193.0], [1.792667188E12, 203.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667197E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 18.0, "minX": 1.792667137E12, "maxY": 209.0, "series": [{"data": [[1.79266717E12, 204.0], [1.792667172E12, 197.0], [1.792667174E12, 203.0], [1.792667176E12, 208.0], [1.792667178E12, 205.0], [1.792667158E12, 200.0], [1.79266716E12, 204.0], [1.792667162E12, 204.0], [1.792667164E12, 203.0], [1.792667166E12, 205.0], [1.792667168E12, 203.0], [1.792667148E12, 198.0], [1.792667191E12, 208.0], [1.792667193E12, 206.0], [1.79266715E12, 198.0], [1.792667152E12, 201.0], [1.792667195E12, 204.0], [1.792667197E12, 171.0], [1.792667154E12, 199.0], [1.792667156E12, 202.0], [1.792667179E12, 204.0], [1.792667181E12, 204.0], [1.792667138E12, 179.0], [1.79266714E12, 194.0], [1.792667183E12, 206.0], [1.792667185E12, 207.0], [1.792667142E12, 189.0], [1.792667144E12, 192.0], [1.792667187E12, 202.0], [1.792667189E12, 204.0], [1.792667146E12, 196.0], [1.792667169E12, 200.0], [1.792667171E12, 205.0], [1.792667173E12, 206.0], [1.792667175E12, 202.0], [1.792667177E12, 206.0], [1.792667159E12, 199.0], [1.792667161E12, 200.0], [1.792667163E12, 202.0], [1.792667165E12, 206.0], [1.792667167E12, 202.0], [1.792667147E12, 196.0], [1.79266719E12, 204.0], [1.792667149E12, 197.0], [1.792667192E12, 205.0], [1.792667151E12, 203.0], [1.792667194E12, 207.0], [1.792667153E12, 199.0], [1.792667196E12, 209.0], [1.792667155E12, 199.0], [1.792667157E12, 201.0], [1.792667137E12, 18.0], [1.79266718E12, 208.0], [1.792667139E12, 186.0], [1.792667182E12, 208.0], [1.792667141E12, 189.0], [1.792667184E12, 206.0], [1.792667143E12, 192.0], [1.792667186E12, 205.0], [1.792667145E12, 193.0], [1.792667188E12, 203.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667197E12, "title": "Total Transactions Per Second"}},
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


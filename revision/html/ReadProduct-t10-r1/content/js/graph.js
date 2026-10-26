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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 28.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 1.0], [4.1, 1.0], [4.2, 1.0], [4.3, 1.0], [4.4, 1.0], [4.5, 1.0], [4.6, 1.0], [4.7, 1.0], [4.8, 1.0], [4.9, 1.0], [5.0, 1.0], [5.1, 1.0], [5.2, 1.0], [5.3, 1.0], [5.4, 1.0], [5.5, 1.0], [5.6, 1.0], [5.7, 1.0], [5.8, 1.0], [5.9, 1.0], [6.0, 1.0], [6.1, 1.0], [6.2, 1.0], [6.3, 1.0], [6.4, 1.0], [6.5, 1.0], [6.6, 1.0], [6.7, 1.0], [6.8, 1.0], [6.9, 1.0], [7.0, 1.0], [7.1, 1.0], [7.2, 1.0], [7.3, 1.0], [7.4, 1.0], [7.5, 1.0], [7.6, 1.0], [7.7, 1.0], [7.8, 1.0], [7.9, 1.0], [8.0, 1.0], [8.1, 1.0], [8.2, 1.0], [8.3, 1.0], [8.4, 1.0], [8.5, 1.0], [8.6, 1.0], [8.7, 1.0], [8.8, 1.0], [8.9, 1.0], [9.0, 1.0], [9.1, 1.0], [9.2, 1.0], [9.3, 1.0], [9.4, 1.0], [9.5, 1.0], [9.6, 1.0], [9.7, 1.0], [9.8, 1.0], [9.9, 1.0], [10.0, 1.0], [10.1, 1.0], [10.2, 1.0], [10.3, 1.0], [10.4, 1.0], [10.5, 1.0], [10.6, 1.0], [10.7, 1.0], [10.8, 1.0], [10.9, 1.0], [11.0, 1.0], [11.1, 1.0], [11.2, 1.0], [11.3, 1.0], [11.4, 1.0], [11.5, 1.0], [11.6, 1.0], [11.7, 1.0], [11.8, 1.0], [11.9, 1.0], [12.0, 1.0], [12.1, 1.0], [12.2, 1.0], [12.3, 1.0], [12.4, 1.0], [12.5, 1.0], [12.6, 1.0], [12.7, 1.0], [12.8, 1.0], [12.9, 1.0], [13.0, 1.0], [13.1, 1.0], [13.2, 1.0], [13.3, 2.0], [13.4, 2.0], [13.5, 2.0], [13.6, 2.0], [13.7, 2.0], [13.8, 2.0], [13.9, 2.0], [14.0, 2.0], [14.1, 2.0], [14.2, 2.0], [14.3, 2.0], [14.4, 2.0], [14.5, 2.0], [14.6, 2.0], [14.7, 2.0], [14.8, 2.0], [14.9, 2.0], [15.0, 2.0], [15.1, 2.0], [15.2, 2.0], [15.3, 2.0], [15.4, 2.0], [15.5, 2.0], [15.6, 2.0], [15.7, 2.0], [15.8, 2.0], [15.9, 2.0], [16.0, 2.0], [16.1, 2.0], [16.2, 2.0], [16.3, 2.0], [16.4, 2.0], [16.5, 2.0], [16.6, 2.0], [16.7, 2.0], [16.8, 2.0], [16.9, 2.0], [17.0, 2.0], [17.1, 2.0], [17.2, 2.0], [17.3, 2.0], [17.4, 2.0], [17.5, 2.0], [17.6, 2.0], [17.7, 2.0], [17.8, 2.0], [17.9, 2.0], [18.0, 2.0], [18.1, 2.0], [18.2, 2.0], [18.3, 2.0], [18.4, 2.0], [18.5, 2.0], [18.6, 2.0], [18.7, 2.0], [18.8, 2.0], [18.9, 2.0], [19.0, 2.0], [19.1, 2.0], [19.2, 2.0], [19.3, 2.0], [19.4, 2.0], [19.5, 2.0], [19.6, 2.0], [19.7, 2.0], [19.8, 2.0], [19.9, 2.0], [20.0, 2.0], [20.1, 2.0], [20.2, 2.0], [20.3, 2.0], [20.4, 2.0], [20.5, 2.0], [20.6, 2.0], [20.7, 2.0], [20.8, 2.0], [20.9, 2.0], [21.0, 2.0], [21.1, 2.0], [21.2, 2.0], [21.3, 2.0], [21.4, 2.0], [21.5, 2.0], [21.6, 2.0], [21.7, 2.0], [21.8, 2.0], [21.9, 2.0], [22.0, 2.0], [22.1, 2.0], [22.2, 2.0], [22.3, 2.0], [22.4, 2.0], [22.5, 2.0], [22.6, 2.0], [22.7, 2.0], [22.8, 2.0], [22.9, 2.0], [23.0, 2.0], [23.1, 2.0], [23.2, 2.0], [23.3, 2.0], [23.4, 2.0], [23.5, 2.0], [23.6, 2.0], [23.7, 2.0], [23.8, 2.0], [23.9, 2.0], [24.0, 2.0], [24.1, 2.0], [24.2, 2.0], [24.3, 2.0], [24.4, 2.0], [24.5, 2.0], [24.6, 2.0], [24.7, 2.0], [24.8, 2.0], [24.9, 2.0], [25.0, 2.0], [25.1, 2.0], [25.2, 2.0], [25.3, 2.0], [25.4, 2.0], [25.5, 2.0], [25.6, 2.0], [25.7, 2.0], [25.8, 2.0], [25.9, 2.0], [26.0, 2.0], [26.1, 2.0], [26.2, 2.0], [26.3, 2.0], [26.4, 2.0], [26.5, 2.0], [26.6, 2.0], [26.7, 2.0], [26.8, 2.0], [26.9, 2.0], [27.0, 2.0], [27.1, 2.0], [27.2, 2.0], [27.3, 2.0], [27.4, 2.0], [27.5, 2.0], [27.6, 2.0], [27.7, 2.0], [27.8, 2.0], [27.9, 2.0], [28.0, 2.0], [28.1, 2.0], [28.2, 2.0], [28.3, 2.0], [28.4, 2.0], [28.5, 2.0], [28.6, 2.0], [28.7, 2.0], [28.8, 2.0], [28.9, 2.0], [29.0, 2.0], [29.1, 2.0], [29.2, 2.0], [29.3, 2.0], [29.4, 2.0], [29.5, 2.0], [29.6, 2.0], [29.7, 2.0], [29.8, 2.0], [29.9, 2.0], [30.0, 2.0], [30.1, 2.0], [30.2, 2.0], [30.3, 2.0], [30.4, 2.0], [30.5, 2.0], [30.6, 2.0], [30.7, 2.0], [30.8, 2.0], [30.9, 2.0], [31.0, 2.0], [31.1, 2.0], [31.2, 2.0], [31.3, 2.0], [31.4, 2.0], [31.5, 2.0], [31.6, 2.0], [31.7, 2.0], [31.8, 2.0], [31.9, 2.0], [32.0, 2.0], [32.1, 2.0], [32.2, 2.0], [32.3, 2.0], [32.4, 2.0], [32.5, 2.0], [32.6, 2.0], [32.7, 2.0], [32.8, 2.0], [32.9, 2.0], [33.0, 2.0], [33.1, 2.0], [33.2, 2.0], [33.3, 2.0], [33.4, 2.0], [33.5, 2.0], [33.6, 2.0], [33.7, 2.0], [33.8, 2.0], [33.9, 2.0], [34.0, 2.0], [34.1, 2.0], [34.2, 2.0], [34.3, 2.0], [34.4, 2.0], [34.5, 2.0], [34.6, 2.0], [34.7, 2.0], [34.8, 2.0], [34.9, 2.0], [35.0, 2.0], [35.1, 2.0], [35.2, 2.0], [35.3, 2.0], [35.4, 2.0], [35.5, 2.0], [35.6, 2.0], [35.7, 2.0], [35.8, 2.0], [35.9, 2.0], [36.0, 2.0], [36.1, 2.0], [36.2, 2.0], [36.3, 2.0], [36.4, 2.0], [36.5, 2.0], [36.6, 2.0], [36.7, 2.0], [36.8, 2.0], [36.9, 2.0], [37.0, 2.0], [37.1, 2.0], [37.2, 2.0], [37.3, 2.0], [37.4, 2.0], [37.5, 2.0], [37.6, 2.0], [37.7, 2.0], [37.8, 2.0], [37.9, 2.0], [38.0, 2.0], [38.1, 2.0], [38.2, 2.0], [38.3, 2.0], [38.4, 2.0], [38.5, 2.0], [38.6, 2.0], [38.7, 2.0], [38.8, 2.0], [38.9, 2.0], [39.0, 2.0], [39.1, 2.0], [39.2, 2.0], [39.3, 2.0], [39.4, 2.0], [39.5, 2.0], [39.6, 2.0], [39.7, 2.0], [39.8, 2.0], [39.9, 2.0], [40.0, 2.0], [40.1, 2.0], [40.2, 2.0], [40.3, 2.0], [40.4, 2.0], [40.5, 2.0], [40.6, 2.0], [40.7, 2.0], [40.8, 2.0], [40.9, 2.0], [41.0, 2.0], [41.1, 2.0], [41.2, 2.0], [41.3, 2.0], [41.4, 2.0], [41.5, 2.0], [41.6, 2.0], [41.7, 2.0], [41.8, 2.0], [41.9, 2.0], [42.0, 2.0], [42.1, 2.0], [42.2, 2.0], [42.3, 2.0], [42.4, 2.0], [42.5, 2.0], [42.6, 2.0], [42.7, 2.0], [42.8, 2.0], [42.9, 2.0], [43.0, 2.0], [43.1, 2.0], [43.2, 2.0], [43.3, 2.0], [43.4, 2.0], [43.5, 2.0], [43.6, 2.0], [43.7, 2.0], [43.8, 2.0], [43.9, 2.0], [44.0, 2.0], [44.1, 2.0], [44.2, 2.0], [44.3, 2.0], [44.4, 2.0], [44.5, 2.0], [44.6, 2.0], [44.7, 2.0], [44.8, 2.0], [44.9, 2.0], [45.0, 2.0], [45.1, 2.0], [45.2, 2.0], [45.3, 2.0], [45.4, 2.0], [45.5, 2.0], [45.6, 2.0], [45.7, 2.0], [45.8, 2.0], [45.9, 2.0], [46.0, 2.0], [46.1, 2.0], [46.2, 2.0], [46.3, 2.0], [46.4, 2.0], [46.5, 2.0], [46.6, 2.0], [46.7, 2.0], [46.8, 2.0], [46.9, 2.0], [47.0, 2.0], [47.1, 2.0], [47.2, 2.0], [47.3, 2.0], [47.4, 2.0], [47.5, 2.0], [47.6, 2.0], [47.7, 2.0], [47.8, 2.0], [47.9, 2.0], [48.0, 2.0], [48.1, 2.0], [48.2, 2.0], [48.3, 2.0], [48.4, 2.0], [48.5, 2.0], [48.6, 2.0], [48.7, 2.0], [48.8, 2.0], [48.9, 2.0], [49.0, 2.0], [49.1, 2.0], [49.2, 2.0], [49.3, 2.0], [49.4, 2.0], [49.5, 2.0], [49.6, 2.0], [49.7, 2.0], [49.8, 2.0], [49.9, 2.0], [50.0, 2.0], [50.1, 2.0], [50.2, 2.0], [50.3, 2.0], [50.4, 2.0], [50.5, 2.0], [50.6, 2.0], [50.7, 2.0], [50.8, 2.0], [50.9, 2.0], [51.0, 2.0], [51.1, 2.0], [51.2, 2.0], [51.3, 2.0], [51.4, 2.0], [51.5, 2.0], [51.6, 2.0], [51.7, 2.0], [51.8, 2.0], [51.9, 2.0], [52.0, 2.0], [52.1, 2.0], [52.2, 2.0], [52.3, 2.0], [52.4, 2.0], [52.5, 2.0], [52.6, 2.0], [52.7, 2.0], [52.8, 2.0], [52.9, 2.0], [53.0, 2.0], [53.1, 2.0], [53.2, 2.0], [53.3, 2.0], [53.4, 2.0], [53.5, 2.0], [53.6, 2.0], [53.7, 2.0], [53.8, 2.0], [53.9, 2.0], [54.0, 2.0], [54.1, 2.0], [54.2, 2.0], [54.3, 2.0], [54.4, 2.0], [54.5, 2.0], [54.6, 2.0], [54.7, 2.0], [54.8, 2.0], [54.9, 2.0], [55.0, 2.0], [55.1, 2.0], [55.2, 2.0], [55.3, 2.0], [55.4, 2.0], [55.5, 2.0], [55.6, 2.0], [55.7, 2.0], [55.8, 2.0], [55.9, 2.0], [56.0, 2.0], [56.1, 2.0], [56.2, 2.0], [56.3, 2.0], [56.4, 2.0], [56.5, 2.0], [56.6, 2.0], [56.7, 2.0], [56.8, 2.0], [56.9, 2.0], [57.0, 2.0], [57.1, 2.0], [57.2, 2.0], [57.3, 2.0], [57.4, 2.0], [57.5, 2.0], [57.6, 2.0], [57.7, 2.0], [57.8, 2.0], [57.9, 2.0], [58.0, 2.0], [58.1, 2.0], [58.2, 2.0], [58.3, 2.0], [58.4, 2.0], [58.5, 2.0], [58.6, 2.0], [58.7, 2.0], [58.8, 2.0], [58.9, 2.0], [59.0, 2.0], [59.1, 2.0], [59.2, 2.0], [59.3, 2.0], [59.4, 2.0], [59.5, 2.0], [59.6, 2.0], [59.7, 2.0], [59.8, 2.0], [59.9, 2.0], [60.0, 2.0], [60.1, 2.0], [60.2, 2.0], [60.3, 2.0], [60.4, 2.0], [60.5, 2.0], [60.6, 2.0], [60.7, 2.0], [60.8, 2.0], [60.9, 2.0], [61.0, 2.0], [61.1, 2.0], [61.2, 2.0], [61.3, 2.0], [61.4, 2.0], [61.5, 3.0], [61.6, 3.0], [61.7, 3.0], [61.8, 3.0], [61.9, 3.0], [62.0, 3.0], [62.1, 3.0], [62.2, 3.0], [62.3, 3.0], [62.4, 3.0], [62.5, 3.0], [62.6, 3.0], [62.7, 3.0], [62.8, 3.0], [62.9, 3.0], [63.0, 3.0], [63.1, 3.0], [63.2, 3.0], [63.3, 3.0], [63.4, 3.0], [63.5, 3.0], [63.6, 3.0], [63.7, 3.0], [63.8, 3.0], [63.9, 3.0], [64.0, 3.0], [64.1, 3.0], [64.2, 3.0], [64.3, 3.0], [64.4, 3.0], [64.5, 3.0], [64.6, 3.0], [64.7, 3.0], [64.8, 3.0], [64.9, 3.0], [65.0, 3.0], [65.1, 3.0], [65.2, 3.0], [65.3, 3.0], [65.4, 3.0], [65.5, 3.0], [65.6, 3.0], [65.7, 3.0], [65.8, 3.0], [65.9, 3.0], [66.0, 3.0], [66.1, 3.0], [66.2, 3.0], [66.3, 3.0], [66.4, 3.0], [66.5, 3.0], [66.6, 3.0], [66.7, 3.0], [66.8, 3.0], [66.9, 3.0], [67.0, 3.0], [67.1, 3.0], [67.2, 3.0], [67.3, 3.0], [67.4, 3.0], [67.5, 3.0], [67.6, 3.0], [67.7, 3.0], [67.8, 3.0], [67.9, 3.0], [68.0, 3.0], [68.1, 3.0], [68.2, 3.0], [68.3, 3.0], [68.4, 3.0], [68.5, 3.0], [68.6, 3.0], [68.7, 3.0], [68.8, 3.0], [68.9, 3.0], [69.0, 3.0], [69.1, 3.0], [69.2, 3.0], [69.3, 3.0], [69.4, 3.0], [69.5, 3.0], [69.6, 3.0], [69.7, 3.0], [69.8, 3.0], [69.9, 3.0], [70.0, 3.0], [70.1, 3.0], [70.2, 3.0], [70.3, 3.0], [70.4, 3.0], [70.5, 3.0], [70.6, 3.0], [70.7, 3.0], [70.8, 3.0], [70.9, 3.0], [71.0, 3.0], [71.1, 3.0], [71.2, 3.0], [71.3, 3.0], [71.4, 3.0], [71.5, 3.0], [71.6, 3.0], [71.7, 3.0], [71.8, 3.0], [71.9, 3.0], [72.0, 3.0], [72.1, 3.0], [72.2, 3.0], [72.3, 3.0], [72.4, 3.0], [72.5, 3.0], [72.6, 3.0], [72.7, 3.0], [72.8, 3.0], [72.9, 3.0], [73.0, 3.0], [73.1, 3.0], [73.2, 3.0], [73.3, 3.0], [73.4, 3.0], [73.5, 3.0], [73.6, 3.0], [73.7, 3.0], [73.8, 3.0], [73.9, 3.0], [74.0, 3.0], [74.1, 3.0], [74.2, 3.0], [74.3, 3.0], [74.4, 3.0], [74.5, 3.0], [74.6, 3.0], [74.7, 3.0], [74.8, 3.0], [74.9, 3.0], [75.0, 3.0], [75.1, 3.0], [75.2, 3.0], [75.3, 3.0], [75.4, 3.0], [75.5, 3.0], [75.6, 3.0], [75.7, 3.0], [75.8, 3.0], [75.9, 3.0], [76.0, 3.0], [76.1, 3.0], [76.2, 3.0], [76.3, 3.0], [76.4, 3.0], [76.5, 3.0], [76.6, 3.0], [76.7, 3.0], [76.8, 3.0], [76.9, 3.0], [77.0, 3.0], [77.1, 3.0], [77.2, 3.0], [77.3, 3.0], [77.4, 3.0], [77.5, 3.0], [77.6, 3.0], [77.7, 3.0], [77.8, 3.0], [77.9, 3.0], [78.0, 3.0], [78.1, 3.0], [78.2, 3.0], [78.3, 3.0], [78.4, 3.0], [78.5, 3.0], [78.6, 3.0], [78.7, 3.0], [78.8, 3.0], [78.9, 3.0], [79.0, 3.0], [79.1, 3.0], [79.2, 3.0], [79.3, 3.0], [79.4, 3.0], [79.5, 3.0], [79.6, 3.0], [79.7, 3.0], [79.8, 3.0], [79.9, 3.0], [80.0, 3.0], [80.1, 3.0], [80.2, 3.0], [80.3, 3.0], [80.4, 3.0], [80.5, 3.0], [80.6, 3.0], [80.7, 3.0], [80.8, 3.0], [80.9, 3.0], [81.0, 3.0], [81.1, 3.0], [81.2, 3.0], [81.3, 3.0], [81.4, 3.0], [81.5, 3.0], [81.6, 3.0], [81.7, 3.0], [81.8, 3.0], [81.9, 3.0], [82.0, 3.0], [82.1, 3.0], [82.2, 3.0], [82.3, 3.0], [82.4, 3.0], [82.5, 3.0], [82.6, 3.0], [82.7, 3.0], [82.8, 3.0], [82.9, 3.0], [83.0, 3.0], [83.1, 3.0], [83.2, 3.0], [83.3, 3.0], [83.4, 3.0], [83.5, 3.0], [83.6, 3.0], [83.7, 3.0], [83.8, 3.0], [83.9, 3.0], [84.0, 3.0], [84.1, 3.0], [84.2, 3.0], [84.3, 3.0], [84.4, 3.0], [84.5, 3.0], [84.6, 3.0], [84.7, 3.0], [84.8, 3.0], [84.9, 3.0], [85.0, 3.0], [85.1, 3.0], [85.2, 3.0], [85.3, 3.0], [85.4, 3.0], [85.5, 3.0], [85.6, 3.0], [85.7, 3.0], [85.8, 3.0], [85.9, 3.0], [86.0, 3.0], [86.1, 3.0], [86.2, 3.0], [86.3, 3.0], [86.4, 3.0], [86.5, 3.0], [86.6, 3.0], [86.7, 3.0], [86.8, 3.0], [86.9, 3.0], [87.0, 3.0], [87.1, 3.0], [87.2, 3.0], [87.3, 3.0], [87.4, 3.0], [87.5, 3.0], [87.6, 3.0], [87.7, 3.0], [87.8, 3.0], [87.9, 3.0], [88.0, 3.0], [88.1, 3.0], [88.2, 3.0], [88.3, 3.0], [88.4, 4.0], [88.5, 4.0], [88.6, 4.0], [88.7, 4.0], [88.8, 4.0], [88.9, 4.0], [89.0, 4.0], [89.1, 4.0], [89.2, 4.0], [89.3, 4.0], [89.4, 4.0], [89.5, 4.0], [89.6, 4.0], [89.7, 4.0], [89.8, 4.0], [89.9, 4.0], [90.0, 4.0], [90.1, 4.0], [90.2, 4.0], [90.3, 4.0], [90.4, 4.0], [90.5, 4.0], [90.6, 4.0], [90.7, 4.0], [90.8, 4.0], [90.9, 4.0], [91.0, 4.0], [91.1, 4.0], [91.2, 4.0], [91.3, 4.0], [91.4, 4.0], [91.5, 4.0], [91.6, 4.0], [91.7, 4.0], [91.8, 4.0], [91.9, 4.0], [92.0, 4.0], [92.1, 4.0], [92.2, 4.0], [92.3, 4.0], [92.4, 4.0], [92.5, 4.0], [92.6, 4.0], [92.7, 4.0], [92.8, 4.0], [92.9, 4.0], [93.0, 4.0], [93.1, 4.0], [93.2, 4.0], [93.3, 4.0], [93.4, 4.0], [93.5, 4.0], [93.6, 4.0], [93.7, 4.0], [93.8, 4.0], [93.9, 4.0], [94.0, 4.0], [94.1, 4.0], [94.2, 4.0], [94.3, 4.0], [94.4, 4.0], [94.5, 4.0], [94.6, 4.0], [94.7, 4.0], [94.8, 4.0], [94.9, 4.0], [95.0, 4.0], [95.1, 4.0], [95.2, 4.0], [95.3, 4.0], [95.4, 4.0], [95.5, 4.0], [95.6, 4.0], [95.7, 4.0], [95.8, 4.0], [95.9, 4.0], [96.0, 4.0], [96.1, 4.0], [96.2, 4.0], [96.3, 4.0], [96.4, 5.0], [96.5, 5.0], [96.6, 5.0], [96.7, 5.0], [96.8, 5.0], [96.9, 5.0], [97.0, 5.0], [97.1, 5.0], [97.2, 5.0], [97.3, 5.0], [97.4, 5.0], [97.5, 5.0], [97.6, 5.0], [97.7, 5.0], [97.8, 5.0], [97.9, 5.0], [98.0, 5.0], [98.1, 5.0], [98.2, 5.0], [98.3, 5.0], [98.4, 5.0], [98.5, 6.0], [98.6, 6.0], [98.7, 6.0], [98.8, 6.0], [98.9, 6.0], [99.0, 6.0], [99.1, 7.0], [99.2, 7.0], [99.3, 7.0], [99.4, 8.0], [99.5, 8.0], [99.6, 9.0], [99.7, 10.0], [99.8, 11.0], [99.9, 12.0]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 234955.0, "minX": 0.0, "maxY": 234955.0, "series": [{"data": [[0.0, 234955.0]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4.9E-324, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 234955.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 234955.0, "series": [{"data": [[0.0, 234955.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.75995449374289, "minX": 1.79266631E12, "maxY": 10.0, "series": [{"data": [[1.79266632E12, 10.0], [1.792666318E12, 10.0], [1.792666361E12, 10.0], [1.792666359E12, 10.0], [1.792666316E12, 10.0], [1.792666367E12, 10.0], [1.792666324E12, 10.0], [1.792666322E12, 10.0], [1.792666365E12, 10.0], [1.792666363E12, 10.0], [1.792666351E12, 10.0], [1.792666349E12, 10.0], [1.792666347E12, 10.0], [1.792666314E12, 10.0], [1.792666357E12, 10.0], [1.792666355E12, 10.0], [1.792666312E12, 10.0], [1.79266631E12, 10.0], [1.792666353E12, 10.0], [1.792666341E12, 10.0], [1.792666339E12, 10.0], [1.792666337E12, 10.0], [1.792666345E12, 10.0], [1.792666343E12, 10.0], [1.792666329E12, 10.0], [1.792666327E12, 10.0], [1.79266637E12, 9.75995449374289], [1.792666335E12, 10.0], [1.792666333E12, 10.0], [1.792666331E12, 10.0], [1.792666319E12, 10.0], [1.792666362E12, 10.0], [1.792666317E12, 10.0], [1.79266636E12, 10.0], [1.792666315E12, 10.0], [1.792666358E12, 10.0], [1.792666325E12, 10.0], [1.792666368E12, 10.0], [1.792666323E12, 10.0], [1.792666366E12, 10.0], [1.792666321E12, 10.0], [1.792666364E12, 10.0], [1.792666352E12, 10.0], [1.79266635E12, 10.0], [1.792666348E12, 10.0], [1.792666313E12, 10.0], [1.792666356E12, 10.0], [1.792666311E12, 10.0], [1.792666354E12, 10.0], [1.79266634E12, 10.0], [1.792666338E12, 10.0], [1.792666346E12, 10.0], [1.792666344E12, 10.0], [1.792666342E12, 10.0], [1.79266633E12, 10.0], [1.792666328E12, 10.0], [1.792666326E12, 10.0], [1.792666369E12, 10.0], [1.792666336E12, 10.0], [1.792666334E12, 10.0], [1.792666332E12, 10.0]], "isOverall": false, "label": "线程组", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.79266637E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 0.9, "minX": 1.0, "maxY": 2.4516411974843737, "series": [{"data": [[8.0, 1.0], [4.0, 1.0], [2.0, 1.0], [1.0, 0.9], [9.0, 2.0], [10.0, 2.4516411974843737], [5.0, 1.5], [6.0, 1.625], [3.0, 2.4], [7.0, 1.980392156862746]], "isOverall": false, "label": "Products", "isController": false}, {"data": [[9.998203911387288, 2.451341746291771]], "isOverall": false, "label": "Products-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 457310.0, "minX": 1.79266631E12, "maxY": 1889223.0, "series": [{"data": [[1.79266632E12, 1854707.0], [1.792666318E12, 1849412.0], [1.792666361E12, 1841900.0], [1.792666359E12, 1861702.0], [1.792666316E12, 1844703.0], [1.792666367E12, 1866410.0], [1.792666324E12, 1846673.0], [1.792666322E12, 1854636.0], [1.792666365E12, 1889223.0], [1.792666363E12, 1875892.0], [1.792666351E12, 1874394.0], [1.792666349E12, 1867962.0], [1.792666347E12, 1871317.0], [1.792666314E12, 1827486.0], [1.792666357E12, 1847618.0], [1.792666355E12, 1839574.0], [1.792666312E12, 1847577.0], [1.79266631E12, 905468.0], [1.792666353E12, 1831230.0], [1.792666341E12, 1848974.0], [1.792666339E12, 1871686.0], [1.792666337E12, 1838071.0], [1.792666345E12, 1879025.0], [1.792666343E12, 1886880.0], [1.792666329E12, 1845268.0], [1.792666327E12, 1842369.0], [1.79266637E12, 832585.0], [1.792666335E12, 1862237.0], [1.792666333E12, 1876935.0], [1.792666331E12, 1861357.0], [1.792666319E12, 1863208.0], [1.792666362E12, 1887211.0], [1.792666317E12, 1860332.0], [1.79266636E12, 1850442.0], [1.792666315E12, 1833386.0], [1.792666358E12, 1836269.0], [1.792666325E12, 1859885.0], [1.792666368E12, 1856536.0], [1.792666323E12, 1877022.0], [1.792666366E12, 1848541.0], [1.792666321E12, 1854702.0], [1.792666364E12, 1844271.0], [1.792666352E12, 1850832.0], [1.79266635E12, 1860724.0], [1.792666348E12, 1874427.0], [1.792666313E12, 1841440.0], [1.792666356E12, 1862183.0], [1.792666311E12, 1845238.0], [1.792666354E12, 1816428.0], [1.79266634E12, 1872688.0], [1.792666338E12, 1846174.0], [1.792666346E12, 1831338.0], [1.792666344E12, 1846084.0], [1.792666342E12, 1856592.0], [1.79266633E12, 1857508.0], [1.792666328E12, 1859832.0], [1.792666326E12, 1824206.0], [1.792666369E12, 1877290.0], [1.792666336E12, 1835252.0], [1.792666334E12, 1849900.0], [1.792666332E12, 1870405.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79266632E12, 1019438.0], [1.792666318E12, 1016575.0], [1.792666361E12, 1012415.0], [1.792666359E12, 1023339.0], [1.792666316E12, 1013975.0], [1.792666367E12, 1025944.0], [1.792666324E12, 1015015.0], [1.792666322E12, 1019437.0], [1.792666365E12, 1038680.0], [1.792666363E12, 1031141.0], [1.792666351E12, 1030357.0], [1.792666349E12, 1026721.0], [1.792666347E12, 1028543.0], [1.792666314E12, 1004612.0], [1.792666357E12, 1015536.0], [1.792666355E12, 1011116.0], [1.792666312E12, 1015537.0], [1.79266631E12, 497105.0], [1.792666353E12, 1006437.0], [1.792666341E12, 1016316.0], [1.792666339E12, 1028799.0], [1.792666337E12, 1010335.0], [1.792666345E12, 1032704.0], [1.792666343E12, 1037123.0], [1.792666329E12, 1014237.0], [1.792666327E12, 1012676.0], [1.79266637E12, 457310.0], [1.792666335E12, 1023602.0], [1.792666333E12, 1031659.0], [1.792666331E12, 1023078.0], [1.792666319E12, 1024123.0], [1.792666362E12, 1037383.0], [1.792666317E12, 1022560.0], [1.79266636E12, 1017097.0], [1.792666315E12, 1007730.0], [1.792666358E12, 1009295.0], [1.792666325E12, 1022300.0], [1.792666368E12, 1020479.0], [1.792666323E12, 1031664.0], [1.792666366E12, 1016055.0], [1.792666321E12, 1019438.0], [1.792666364E12, 1013717.0], [1.792666352E12, 1017357.0], [1.79266635E12, 1022818.0], [1.792666348E12, 1030362.0], [1.792666313E12, 1012154.0], [1.792666356E12, 1023599.0], [1.792666311E12, 1014237.0], [1.792666354E12, 998369.0], [1.79266634E12, 1029324.0], [1.792666338E12, 1014757.0], [1.792666346E12, 1006691.0], [1.792666344E12, 1014756.0], [1.792666342E12, 1020479.0], [1.79266633E12, 1020998.0], [1.792666328E12, 1022298.0], [1.792666326E12, 1002789.0], [1.792666369E12, 1031922.0], [1.792666336E12, 1008772.0], [1.792666334E12, 1016837.0], [1.792666332E12, 1028023.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.79266637E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2.3683935112506513, "minX": 1.79266631E12, "maxY": 2.505471599791562, "series": [{"data": [[1.79266632E12, 2.442459811176323], [1.792666318E12, 2.459570112589565], [1.792666361E12, 2.4699383350462543], [1.792666359E12, 2.4522114895780307], [1.792666316E12, 2.4676757311441775], [1.792666367E12, 2.4429513184584173], [1.792666324E12, 2.475397232188621], [1.792666322E12, 2.443990813983163], [1.792666365E12, 2.410718757826198], [1.792666363E12, 2.441977800201821], [1.792666351E12, 2.437010855844479], [1.792666349E12, 2.4423612870534543], [1.792666347E12, 2.436519979767317], [1.792666314E12, 2.485758674262032], [1.792666357E12, 2.455942622950825], [1.792666355E12, 2.4646256753280182], [1.792666312E12, 2.4344262295081984], [1.79266631E12, 2.3683935112506513], [1.792666353E12, 2.4851382786249614], [1.792666341E12, 2.4525211159457405], [1.792666339E12, 2.433881163084702], [1.792666337E12, 2.4752832131822937], [1.792666345E12, 2.4347607052896776], [1.792666343E12, 2.4135941810885373], [1.792666329E12, 2.4503718902282676], [1.792666327E12, 2.4790649884407947], [1.79266637E12, 2.443117178612064], [1.792666335E12, 2.437102922490473], [1.792666333E12, 2.4273827534039314], [1.792666331E12, 2.437579455886088], [1.792666319E12, 2.44627889255778], [1.792666362E12, 2.4247743229689056], [1.792666317E12, 2.4454337318748354], [1.79266636E12, 2.4465473145780097], [1.792666315E12, 2.484770263293754], [1.792666358E12, 2.47680412371134], [1.792666325E12, 2.4516539440203573], [1.792666368E12, 2.460616874840684], [1.792666323E12, 2.4319213313161843], [1.792666366E12, 2.461341525857651], [1.792666321E12, 2.464149017606526], [1.792666364E12, 2.469078778547602], [1.792666352E12, 2.4538481206852434], [1.79266635E12, 2.4374364191251328], [1.792666348E12, 2.4385256248422134], [1.792666313E12, 2.448213826779744], [1.792666356E12, 2.451334180432019], [1.792666311E12, 2.4095922031290127], [1.792666354E12, 2.505471599791562], [1.79266634E12, 2.422542330048018], [1.792666338E12, 2.4685977954370713], [1.792666346E12, 2.4700258397932795], [1.792666344E12, 2.4598820815175637], [1.792666342E12, 2.4677542696915635], [1.79266633E12, 2.4428025477707034], [1.792666328E12, 2.454452926208662], [1.792666326E12, 2.5001297016861264], [1.792666369E12, 2.4275270985631425], [1.792666336E12, 2.480402269210934], [1.792666334E12, 2.453824507546686], [1.792666332E12, 2.4364878542510096]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.79266637E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2.366300366300372, "minX": 1.79266631E12, "maxY": 2.5041688379364335, "series": [{"data": [[1.79266632E12, 2.4409288083694767], [1.792666318E12, 2.458290685772769], [1.792666361E12, 2.4678828365878687], [1.792666359E12, 2.4509405185561843], [1.792666316E12, 2.466649563878903], [1.792666367E12, 2.4424442190669375], [1.792666324E12, 2.4738595592004122], [1.792666322E12, 2.442204644041846], [1.792666365E12, 2.4102178812922643], [1.792666363E12, 2.4402119071644846], [1.792666351E12, 2.435748548346385], [1.792666349E12, 2.4405877881935654], [1.792666347E12, 2.4347496206373243], [1.792666314E12, 2.4842050750906295], [1.792666357E12, 2.4551741803278735], [1.792666355E12, 2.463339336249034], [1.792666312E12, 2.432377049180327], [1.79266631E12, 2.366300366300372], [1.792666353E12, 2.483587490307571], [1.792666341E12, 2.451241361658568], [1.792666339E12, 2.432364096080908], [1.792666337E12, 2.4747682801235804], [1.792666345E12, 2.4335012594458503], [1.792666343E12, 2.4125909204915996], [1.792666329E12, 2.4485765580918186], [1.792666327E12, 2.475982532751083], [1.79266637E12, 2.4414106939704214], [1.792666335E12, 2.4355781448538734], [1.792666333E12, 2.42637418053454], [1.792666331E12, 2.4368166793796107], [1.792666319E12, 2.44424688849377], [1.792666362E12, 2.4232698094282803], [1.792666317E12, 2.4446705672856845], [1.79266636E12, 2.445268542199478], [1.792666315E12, 2.4837377387713024], [1.792666358E12, 2.476030927835051], [1.792666325E12, 2.4508905852417295], [1.792666368E12, 2.4598521539638076], [1.792666323E12, 2.4311649016641463], [1.792666366E12, 2.4603174603174534], [1.792666321E12, 2.4626180147997023], [1.792666364E12, 2.467539132666154], [1.792666352E12, 2.453592431603175], [1.79266635E12, 2.436419125127158], [1.792666348E12, 2.437515778843732], [1.792666313E12, 2.4461578000514104], [1.792666356E12, 2.4495552731893238], [1.792666311E12, 2.407283918953578], [1.792666354E12, 2.5041688379364335], [1.79266634E12, 2.4207733131159923], [1.792666338E12, 2.467316072801847], [1.792666346E12, 2.4684754521963783], [1.792666344E12, 2.4591130479364227], [1.792666342E12, 2.467244455773639], [1.79266633E12, 2.4417834394904405], [1.792666328E12, 2.453435114503816], [1.792666326E12, 2.4990920881971403], [1.792666369E12, 2.4267708595916355], [1.792666336E12, 2.479112944816917], [1.792666334E12, 2.453312867741101], [1.792666332E12, 2.434210526315794]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.79266637E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 5.008765339343861E-4, "minX": 1.79266631E12, "maxY": 0.007849293563579267, "series": [{"data": [[1.79266632E12, 0.005103342689461615], [1.792666318E12, 0.002047082906857729], [1.792666361E12, 0.0012846865364851009], [1.792666359E12, 0.003812913065582104], [1.792666316E12, 0.0028219599794766554], [1.792666367E12, 0.0012677484787018284], [1.792666324E12, 0.002306509482316762], [1.792666322E12, 0.002041337075784637], [1.792666365E12, 5.008765339343861E-4], [1.792666363E12, 7.568113017154383E-4], [1.792666351E12, 0.0012623074981065448], [1.792666349E12, 0.0017734988598935907], [1.792666347E12, 0.0017703591299949397], [1.792666314E12, 0.004919730709476964], [1.792666357E12, 0.0020491803278688543], [1.792666355E12, 0.0018008747105737076], [1.792666312E12, 0.005122950819672162], [1.79266631E12, 0.007849293563579267], [1.792666353E12, 0.0015507883173946759], [1.792666341E12, 0.002047606859482982], [1.792666339E12, 0.0015170670037926704], [1.792666337E12, 0.002059732234809473], [1.792666345E12, 0.0025188916876574333], [1.792666343E12, 0.0012540757461750724], [1.792666329E12, 0.0025647601949217854], [1.792666327E12, 0.0010274852298998208], [1.79266637E12, 0.007394766780432306], [1.792666335E12, 0.0012706480304955545], [1.792666333E12, 0.0015128593040847208], [1.792666331E12, 0.0015255530129672033], [1.792666319E12, 0.0010160020320040648], [1.792666362E12, 0.0020060180541624875], [1.792666317E12, 0.004324599338590693], [1.79266636E12, 5.115089514066509E-4], [1.792666315E12, 0.002839442436757874], [1.792666358E12, 0.002319587628865979], [1.792666325E12, 0.0017811704834605586], [1.792666368E12, 0.0017843487127198587], [1.792666323E12, 0.002017145738779629], [1.792666366E12, 0.0023041474654377954], [1.792666321E12, 0.0020413370757846397], [1.792666364E12, 0.0015396458814472677], [1.792666352E12, 0.0020455126566095625], [1.79266635E12, 0.002797558494404884], [1.792666348E12, 0.0022721534965917775], [1.792666313E12, 0.006168080185042403], [1.792666356E12, 0.0010165184243964424], [1.792666311E12, 0.003334188253398311], [1.792666354E12, 0.0026055237102657635], [1.79266634E12, 0.0015163002274450343], [1.792666338E12, 0.0015380671622660862], [1.792666346E12, 0.00465116279069768], [1.792666344E12, 0.002050756216354782], [1.792666342E12, 0.0020392556716798374], [1.79266633E12, 0.0030573248407643324], [1.792666328E12, 0.0012722646310432612], [1.792666326E12, 0.0010376134889753573], [1.792666369E12, 0.002268716914544999], [1.792666336E12, 0.0010314595152140275], [1.792666334E12, 0.0030698388334612268], [1.792666332E12, 0.005060728744939287]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.79266637E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.79266631E12, "maxY": 28.0, "series": [{"data": [[1.79266632E12, 15.0], [1.792666318E12, 14.0], [1.792666361E12, 13.0], [1.792666359E12, 12.0], [1.792666316E12, 13.0], [1.792666367E12, 13.0], [1.792666324E12, 14.0], [1.792666322E12, 13.0], [1.792666365E12, 14.0], [1.792666363E12, 15.0], [1.792666351E12, 12.0], [1.792666349E12, 13.0], [1.792666347E12, 13.0], [1.792666314E12, 16.0], [1.792666357E12, 14.0], [1.792666355E12, 12.0], [1.792666312E12, 19.0], [1.79266631E12, 13.0], [1.792666353E12, 17.0], [1.792666341E12, 14.0], [1.792666339E12, 15.0], [1.792666337E12, 16.0], [1.792666345E12, 14.0], [1.792666343E12, 14.0], [1.792666329E12, 14.0], [1.792666327E12, 13.0], [1.79266637E12, 16.0], [1.792666335E12, 13.0], [1.792666333E12, 13.0], [1.792666331E12, 13.0], [1.792666319E12, 14.0], [1.792666362E12, 13.0], [1.792666317E12, 15.0], [1.79266636E12, 13.0], [1.792666315E12, 17.0], [1.792666358E12, 28.0], [1.792666325E12, 14.0], [1.792666368E12, 14.0], [1.792666323E12, 12.0], [1.792666366E12, 16.0], [1.792666321E12, 13.0], [1.792666364E12, 16.0], [1.792666352E12, 13.0], [1.79266635E12, 12.0], [1.792666348E12, 13.0], [1.792666313E12, 16.0], [1.792666356E12, 15.0], [1.792666311E12, 17.0], [1.792666354E12, 20.0], [1.79266634E12, 10.0], [1.792666338E12, 14.0], [1.792666346E12, 12.0], [1.792666344E12, 14.0], [1.792666342E12, 15.0], [1.79266633E12, 12.0], [1.792666328E12, 13.0], [1.792666326E12, 19.0], [1.792666369E12, 14.0], [1.792666336E12, 16.0], [1.792666334E12, 13.0], [1.792666332E12, 14.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79266632E12, 1.0], [1.792666318E12, 0.0], [1.792666361E12, 1.0], [1.792666359E12, 1.0], [1.792666316E12, 0.0], [1.792666367E12, 1.0], [1.792666324E12, 1.0], [1.792666322E12, 0.0], [1.792666365E12, 1.0], [1.792666363E12, 1.0], [1.792666351E12, 1.0], [1.792666349E12, 1.0], [1.792666347E12, 1.0], [1.792666314E12, 1.0], [1.792666357E12, 1.0], [1.792666355E12, 0.0], [1.792666312E12, 1.0], [1.79266631E12, 1.0], [1.792666353E12, 1.0], [1.792666341E12, 0.0], [1.792666339E12, 1.0], [1.792666337E12, 0.0], [1.792666345E12, 1.0], [1.792666343E12, 1.0], [1.792666329E12, 1.0], [1.792666327E12, 1.0], [1.79266637E12, 0.0], [1.792666335E12, 1.0], [1.792666333E12, 1.0], [1.792666331E12, 1.0], [1.792666319E12, 1.0], [1.792666362E12, 1.0], [1.792666317E12, 1.0], [1.79266636E12, 0.0], [1.792666315E12, 0.0], [1.792666358E12, 1.0], [1.792666325E12, 1.0], [1.792666368E12, 1.0], [1.792666323E12, 1.0], [1.792666366E12, 1.0], [1.792666321E12, 1.0], [1.792666364E12, 1.0], [1.792666352E12, 0.0], [1.79266635E12, 1.0], [1.792666348E12, 1.0], [1.792666313E12, 1.0], [1.792666356E12, 1.0], [1.792666311E12, 1.0], [1.792666354E12, 1.0], [1.79266634E12, 1.0], [1.792666338E12, 1.0], [1.792666346E12, 1.0], [1.792666344E12, 1.0], [1.792666342E12, 1.0], [1.79266633E12, 1.0], [1.792666328E12, 0.0], [1.792666326E12, 1.0], [1.792666369E12, 1.0], [1.792666336E12, 1.0], [1.792666334E12, 0.0], [1.792666332E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79266632E12, 4.0], [1.792666318E12, 4.0], [1.792666361E12, 4.0], [1.792666359E12, 4.0], [1.792666316E12, 4.0], [1.792666367E12, 4.0], [1.792666324E12, 4.0], [1.792666322E12, 4.0], [1.792666365E12, 4.0], [1.792666363E12, 4.0], [1.792666351E12, 4.0], [1.792666349E12, 4.0], [1.792666347E12, 4.0], [1.792666314E12, 4.0], [1.792666357E12, 4.0], [1.792666355E12, 4.0], [1.792666312E12, 4.0], [1.79266631E12, 4.0], [1.792666353E12, 4.0], [1.792666341E12, 4.0], [1.792666339E12, 4.0], [1.792666337E12, 4.0], [1.792666345E12, 4.0], [1.792666343E12, 4.0], [1.792666329E12, 4.0], [1.792666327E12, 4.0], [1.79266637E12, 4.0], [1.792666335E12, 4.0], [1.792666333E12, 4.0], [1.792666331E12, 4.0], [1.792666319E12, 4.0], [1.792666362E12, 4.0], [1.792666317E12, 4.0], [1.79266636E12, 4.0], [1.792666315E12, 4.0], [1.792666358E12, 4.0], [1.792666325E12, 4.0], [1.792666368E12, 4.0], [1.792666323E12, 3.0], [1.792666366E12, 4.0], [1.792666321E12, 4.0], [1.792666364E12, 4.0], [1.792666352E12, 4.0], [1.79266635E12, 4.0], [1.792666348E12, 4.0], [1.792666313E12, 4.0], [1.792666356E12, 4.0], [1.792666311E12, 4.0], [1.792666354E12, 4.0], [1.79266634E12, 4.0], [1.792666338E12, 4.0], [1.792666346E12, 4.0], [1.792666344E12, 4.0], [1.792666342E12, 4.0], [1.79266633E12, 3.0], [1.792666328E12, 4.0], [1.792666326E12, 4.0], [1.792666369E12, 4.0], [1.792666336E12, 4.0], [1.792666334E12, 4.0], [1.792666332E12, 3.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79266632E12, 6.0], [1.792666318E12, 7.0], [1.792666361E12, 6.0], [1.792666359E12, 7.0], [1.792666316E12, 7.0099999999997635], [1.792666367E12, 6.0], [1.792666324E12, 7.0], [1.792666322E12, 6.0], [1.792666365E12, 5.0], [1.792666363E12, 6.0], [1.792666351E12, 6.0], [1.792666349E12, 6.0], [1.792666347E12, 6.0], [1.792666314E12, 7.0], [1.792666357E12, 6.0], [1.792666355E12, 8.0], [1.792666312E12, 8.0], [1.79266631E12, 6.0], [1.792666353E12, 7.0], [1.792666341E12, 6.920000000000073], [1.792666339E12, 6.0], [1.792666337E12, 7.0], [1.792666345E12, 6.0], [1.792666343E12, 6.0], [1.792666329E12, 7.0], [1.792666327E12, 8.0], [1.79266637E12, 8.0], [1.792666335E12, 6.0], [1.792666333E12, 6.0], [1.792666331E12, 6.0], [1.792666319E12, 6.0], [1.792666362E12, 6.0], [1.792666317E12, 6.0], [1.79266636E12, 6.0], [1.792666315E12, 9.0], [1.792666358E12, 7.0], [1.792666325E12, 6.0], [1.792666368E12, 6.0], [1.792666323E12, 6.0], [1.792666366E12, 7.0], [1.792666321E12, 6.0], [1.792666364E12, 6.0], [1.792666352E12, 7.0], [1.79266635E12, 6.0], [1.792666348E12, 6.0], [1.792666313E12, 8.0], [1.792666356E12, 6.0], [1.792666311E12, 7.0], [1.792666354E12, 8.0], [1.79266634E12, 6.0], [1.792666338E12, 6.0], [1.792666346E12, 6.0], [1.792666344E12, 6.0], [1.792666342E12, 6.0], [1.79266633E12, 6.739999999999782], [1.792666328E12, 6.690000000000055], [1.792666326E12, 7.0], [1.792666369E12, 6.0], [1.792666336E12, 7.0], [1.792666334E12, 6.0], [1.792666332E12, 5.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79266632E12, 2.0], [1.792666318E12, 2.0], [1.792666361E12, 2.0], [1.792666359E12, 2.0], [1.792666316E12, 2.0], [1.792666367E12, 2.0], [1.792666324E12, 2.0], [1.792666322E12, 2.0], [1.792666365E12, 2.0], [1.792666363E12, 2.0], [1.792666351E12, 2.0], [1.792666349E12, 2.0], [1.792666347E12, 2.0], [1.792666314E12, 2.0], [1.792666357E12, 2.0], [1.792666355E12, 2.0], [1.792666312E12, 2.0], [1.79266631E12, 2.0], [1.792666353E12, 2.0], [1.792666341E12, 2.0], [1.792666339E12, 2.0], [1.792666337E12, 2.0], [1.792666345E12, 2.0], [1.792666343E12, 2.0], [1.792666329E12, 2.0], [1.792666327E12, 2.0], [1.79266637E12, 2.0], [1.792666335E12, 2.0], [1.792666333E12, 2.0], [1.792666331E12, 2.0], [1.792666319E12, 2.0], [1.792666362E12, 2.0], [1.792666317E12, 2.0], [1.79266636E12, 2.0], [1.792666315E12, 2.0], [1.792666358E12, 2.0], [1.792666325E12, 2.0], [1.792666368E12, 2.0], [1.792666323E12, 2.0], [1.792666366E12, 2.0], [1.792666321E12, 2.0], [1.792666364E12, 2.0], [1.792666352E12, 2.0], [1.79266635E12, 2.0], [1.792666348E12, 2.0], [1.792666313E12, 2.0], [1.792666356E12, 2.0], [1.792666311E12, 2.0], [1.792666354E12, 2.0], [1.79266634E12, 2.0], [1.792666338E12, 2.0], [1.792666346E12, 2.0], [1.792666344E12, 2.0], [1.792666342E12, 2.0], [1.79266633E12, 2.0], [1.792666328E12, 2.0], [1.792666326E12, 2.0], [1.792666369E12, 2.0], [1.792666336E12, 2.0], [1.792666334E12, 2.0], [1.792666332E12, 2.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79266632E12, 4.0], [1.792666318E12, 4.0], [1.792666361E12, 4.0], [1.792666359E12, 4.0], [1.792666316E12, 4.0], [1.792666367E12, 4.0], [1.792666324E12, 4.0], [1.792666322E12, 4.0], [1.792666365E12, 4.0], [1.792666363E12, 4.0], [1.792666351E12, 4.0], [1.792666349E12, 4.0], [1.792666347E12, 4.0], [1.792666314E12, 4.0], [1.792666357E12, 4.0], [1.792666355E12, 4.0], [1.792666312E12, 4.0], [1.79266631E12, 4.0], [1.792666353E12, 4.0], [1.792666341E12, 4.0], [1.792666339E12, 4.0], [1.792666337E12, 4.0], [1.792666345E12, 4.0], [1.792666343E12, 4.0], [1.792666329E12, 4.0], [1.792666327E12, 5.0], [1.79266637E12, 4.0], [1.792666335E12, 4.0], [1.792666333E12, 4.0], [1.792666331E12, 4.0], [1.792666319E12, 4.0], [1.792666362E12, 4.0], [1.792666317E12, 4.0], [1.79266636E12, 4.0], [1.792666315E12, 4.0], [1.792666358E12, 4.0], [1.792666325E12, 4.0], [1.792666368E12, 4.0], [1.792666323E12, 4.0], [1.792666366E12, 4.0], [1.792666321E12, 4.0], [1.792666364E12, 4.0], [1.792666352E12, 4.0], [1.79266635E12, 4.0], [1.792666348E12, 4.0], [1.792666313E12, 4.0], [1.792666356E12, 4.0], [1.792666311E12, 4.0], [1.792666354E12, 5.0], [1.79266634E12, 4.0], [1.792666338E12, 4.0], [1.792666346E12, 4.0], [1.792666344E12, 4.0], [1.792666342E12, 4.0], [1.79266633E12, 4.0], [1.792666328E12, 4.0], [1.792666326E12, 5.0], [1.792666369E12, 4.0], [1.792666336E12, 4.0], [1.792666334E12, 4.0], [1.792666332E12, 4.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.79266637E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2.0, "minX": 1758.0, "maxY": 2.0, "series": [{"data": [[1758.0, 2.0], [1911.0, 2.0], [3838.0, 2.0], [3937.0, 2.0], [3899.0, 2.0], [3904.0, 2.0], [3891.0, 2.0], [3862.0, 2.0], [3870.0, 2.0], [3869.0, 2.0], [3902.0, 2.0], [3901.0, 2.0], [3855.0, 2.0], [3874.0, 2.0], [3878.0, 2.0], [3884.0, 2.0], [3880.0, 2.0], [3887.0, 2.0], [3898.0, 2.0], [3897.0, 2.0], [3893.0, 2.0], [3892.0, 2.0], [3931.0, 2.0], [3932.0, 2.0], [3933.0, 2.0], [3935.0, 2.0], [3934.0, 2.0], [3930.0, 2.0], [3925.0, 2.0], [3923.0, 2.0], [3908.0, 2.0], [3907.0, 2.0], [3906.0, 2.0], [3909.0, 2.0], [3911.0, 2.0], [3910.0, 2.0], [3919.0, 2.0], [3966.0, 2.0], [3967.0, 2.0], [3964.0, 2.0], [3957.0, 2.0], [3961.0, 2.0], [3952.0, 2.0], [3947.0, 2.0], [3944.0, 2.0], [3954.0, 2.0], [3955.0, 2.0], [3987.0, 2.0], [3970.0, 2.0], [3988.0, 2.0], [3993.0, 2.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3993.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2.0, "minX": 1758.0, "maxY": 2.0, "series": [{"data": [[1758.0, 2.0], [1911.0, 2.0], [3838.0, 2.0], [3937.0, 2.0], [3899.0, 2.0], [3904.0, 2.0], [3891.0, 2.0], [3862.0, 2.0], [3870.0, 2.0], [3869.0, 2.0], [3902.0, 2.0], [3901.0, 2.0], [3855.0, 2.0], [3874.0, 2.0], [3878.0, 2.0], [3884.0, 2.0], [3880.0, 2.0], [3887.0, 2.0], [3898.0, 2.0], [3897.0, 2.0], [3893.0, 2.0], [3892.0, 2.0], [3931.0, 2.0], [3932.0, 2.0], [3933.0, 2.0], [3935.0, 2.0], [3934.0, 2.0], [3930.0, 2.0], [3925.0, 2.0], [3923.0, 2.0], [3908.0, 2.0], [3907.0, 2.0], [3906.0, 2.0], [3909.0, 2.0], [3911.0, 2.0], [3910.0, 2.0], [3919.0, 2.0], [3966.0, 2.0], [3967.0, 2.0], [3964.0, 2.0], [3957.0, 2.0], [3961.0, 2.0], [3952.0, 2.0], [3947.0, 2.0], [3944.0, 2.0], [3954.0, 2.0], [3955.0, 2.0], [3987.0, 2.0], [3970.0, 2.0], [3988.0, 2.0], [3993.0, 2.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3993.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1748.0, "minX": 1.79266631E12, "maxY": 3995.0, "series": [{"data": [[1.79266632E12, 3922.0], [1.792666318E12, 3908.0], [1.792666361E12, 3891.0], [1.792666359E12, 3933.0], [1.792666316E12, 3900.0], [1.792666367E12, 3944.0], [1.792666324E12, 3902.0], [1.792666322E12, 3921.0], [1.792666365E12, 3995.0], [1.792666363E12, 3965.0], [1.792666351E12, 3962.0], [1.792666349E12, 3948.0], [1.792666347E12, 3954.0], [1.792666314E12, 3862.0], [1.792666357E12, 3904.0], [1.792666355E12, 3887.0], [1.792666312E12, 3904.0], [1.79266631E12, 1921.0], [1.792666353E12, 3868.0], [1.792666341E12, 3905.0], [1.792666339E12, 3955.0], [1.792666337E12, 3886.0], [1.792666345E12, 3971.0], [1.792666343E12, 3986.0], [1.792666329E12, 3899.0], [1.792666327E12, 3895.0], [1.79266637E12, 1748.0], [1.792666335E12, 3935.0], [1.792666333E12, 3965.0], [1.792666331E12, 3932.0], [1.792666319E12, 3934.0], [1.792666362E12, 3988.0], [1.792666317E12, 3931.0], [1.79266636E12, 3911.0], [1.792666315E12, 3872.0], [1.792666358E12, 3880.0], [1.792666325E12, 3929.0], [1.792666368E12, 3924.0], [1.792666323E12, 3966.0], [1.792666366E12, 3905.0], [1.792666321E12, 3917.0], [1.792666364E12, 3895.0], [1.792666352E12, 3911.0], [1.79266635E12, 3931.0], [1.792666348E12, 3960.0], [1.792666313E12, 3891.0], [1.792666356E12, 3935.0], [1.792666311E12, 3899.0], [1.792666354E12, 3839.0], [1.79266634E12, 3957.0], [1.792666338E12, 3901.0], [1.792666346E12, 3870.0], [1.792666344E12, 3901.0], [1.792666342E12, 3925.0], [1.79266633E12, 3925.0], [1.792666328E12, 3930.0], [1.792666326E12, 3854.0], [1.792666369E12, 3967.0], [1.792666336E12, 3876.0], [1.792666334E12, 3910.0], [1.792666332E12, 3953.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.79266637E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1758.0, "minX": 1.79266631E12, "maxY": 3993.0, "series": [{"data": [[1.79266632E12, 3919.0], [1.792666318E12, 3908.0], [1.792666361E12, 3892.0], [1.792666359E12, 3934.0], [1.792666316E12, 3898.0], [1.792666367E12, 3944.0], [1.792666324E12, 3902.0], [1.792666322E12, 3919.0], [1.792666365E12, 3993.0], [1.792666363E12, 3964.0], [1.792666351E12, 3961.0], [1.792666349E12, 3947.0], [1.792666347E12, 3954.0], [1.792666314E12, 3862.0], [1.792666357E12, 3904.0], [1.792666355E12, 3887.0], [1.792666312E12, 3904.0], [1.79266631E12, 1911.0], [1.792666353E12, 3869.0], [1.792666341E12, 3907.0], [1.792666339E12, 3955.0], [1.792666337E12, 3884.0], [1.792666345E12, 3970.0], [1.792666343E12, 3987.0], [1.792666329E12, 3899.0], [1.792666327E12, 3893.0], [1.79266637E12, 1758.0], [1.792666335E12, 3935.0], [1.792666333E12, 3966.0], [1.792666331E12, 3933.0], [1.792666319E12, 3937.0], [1.792666362E12, 3988.0], [1.792666317E12, 3931.0], [1.79266636E12, 3910.0], [1.792666315E12, 3874.0], [1.792666358E12, 3880.0], [1.792666325E12, 3930.0], [1.792666368E12, 3923.0], [1.792666323E12, 3966.0], [1.792666366E12, 3906.0], [1.792666321E12, 3919.0], [1.792666364E12, 3897.0], [1.792666352E12, 3911.0], [1.79266635E12, 3932.0], [1.792666348E12, 3961.0], [1.792666313E12, 3891.0], [1.792666356E12, 3935.0], [1.792666311E12, 3899.0], [1.792666354E12, 3838.0], [1.79266634E12, 3957.0], [1.792666338E12, 3901.0], [1.792666346E12, 3870.0], [1.792666344E12, 3901.0], [1.792666342E12, 3923.0], [1.79266633E12, 3925.0], [1.792666328E12, 3930.0], [1.792666326E12, 3855.0], [1.792666369E12, 3967.0], [1.792666336E12, 3878.0], [1.792666334E12, 3909.0], [1.792666332E12, 3952.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.79266637E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1758.0, "minX": 1.79266631E12, "maxY": 3993.0, "series": [{"data": [[1.79266632E12, 3919.0], [1.792666318E12, 3908.0], [1.792666361E12, 3892.0], [1.792666359E12, 3934.0], [1.792666316E12, 3898.0], [1.792666367E12, 3944.0], [1.792666324E12, 3902.0], [1.792666322E12, 3919.0], [1.792666365E12, 3993.0], [1.792666363E12, 3964.0], [1.792666351E12, 3961.0], [1.792666349E12, 3947.0], [1.792666347E12, 3954.0], [1.792666314E12, 3862.0], [1.792666357E12, 3904.0], [1.792666355E12, 3887.0], [1.792666312E12, 3904.0], [1.79266631E12, 1911.0], [1.792666353E12, 3869.0], [1.792666341E12, 3907.0], [1.792666339E12, 3955.0], [1.792666337E12, 3884.0], [1.792666345E12, 3970.0], [1.792666343E12, 3987.0], [1.792666329E12, 3899.0], [1.792666327E12, 3893.0], [1.79266637E12, 1758.0], [1.792666335E12, 3935.0], [1.792666333E12, 3966.0], [1.792666331E12, 3933.0], [1.792666319E12, 3937.0], [1.792666362E12, 3988.0], [1.792666317E12, 3931.0], [1.79266636E12, 3910.0], [1.792666315E12, 3874.0], [1.792666358E12, 3880.0], [1.792666325E12, 3930.0], [1.792666368E12, 3923.0], [1.792666323E12, 3966.0], [1.792666366E12, 3906.0], [1.792666321E12, 3919.0], [1.792666364E12, 3897.0], [1.792666352E12, 3911.0], [1.79266635E12, 3932.0], [1.792666348E12, 3961.0], [1.792666313E12, 3891.0], [1.792666356E12, 3935.0], [1.792666311E12, 3899.0], [1.792666354E12, 3838.0], [1.79266634E12, 3957.0], [1.792666338E12, 3901.0], [1.792666346E12, 3870.0], [1.792666344E12, 3901.0], [1.792666342E12, 3923.0], [1.79266633E12, 3925.0], [1.792666328E12, 3930.0], [1.792666326E12, 3855.0], [1.792666369E12, 3967.0], [1.792666336E12, 3878.0], [1.792666334E12, 3909.0], [1.792666332E12, 3952.0]], "isOverall": false, "label": "Products-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.79266637E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1758.0, "minX": 1.79266631E12, "maxY": 3993.0, "series": [{"data": [[1.79266632E12, 3919.0], [1.792666318E12, 3908.0], [1.792666361E12, 3892.0], [1.792666359E12, 3934.0], [1.792666316E12, 3898.0], [1.792666367E12, 3944.0], [1.792666324E12, 3902.0], [1.792666322E12, 3919.0], [1.792666365E12, 3993.0], [1.792666363E12, 3964.0], [1.792666351E12, 3961.0], [1.792666349E12, 3947.0], [1.792666347E12, 3954.0], [1.792666314E12, 3862.0], [1.792666357E12, 3904.0], [1.792666355E12, 3887.0], [1.792666312E12, 3904.0], [1.79266631E12, 1911.0], [1.792666353E12, 3869.0], [1.792666341E12, 3907.0], [1.792666339E12, 3955.0], [1.792666337E12, 3884.0], [1.792666345E12, 3970.0], [1.792666343E12, 3987.0], [1.792666329E12, 3899.0], [1.792666327E12, 3893.0], [1.79266637E12, 1758.0], [1.792666335E12, 3935.0], [1.792666333E12, 3966.0], [1.792666331E12, 3933.0], [1.792666319E12, 3937.0], [1.792666362E12, 3988.0], [1.792666317E12, 3931.0], [1.79266636E12, 3910.0], [1.792666315E12, 3874.0], [1.792666358E12, 3880.0], [1.792666325E12, 3930.0], [1.792666368E12, 3923.0], [1.792666323E12, 3966.0], [1.792666366E12, 3906.0], [1.792666321E12, 3919.0], [1.792666364E12, 3897.0], [1.792666352E12, 3911.0], [1.79266635E12, 3932.0], [1.792666348E12, 3961.0], [1.792666313E12, 3891.0], [1.792666356E12, 3935.0], [1.792666311E12, 3899.0], [1.792666354E12, 3838.0], [1.79266634E12, 3957.0], [1.792666338E12, 3901.0], [1.792666346E12, 3870.0], [1.792666344E12, 3901.0], [1.792666342E12, 3923.0], [1.79266633E12, 3925.0], [1.792666328E12, 3930.0], [1.792666326E12, 3855.0], [1.792666369E12, 3967.0], [1.792666336E12, 3878.0], [1.792666334E12, 3909.0], [1.792666332E12, 3952.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.79266637E12, "title": "Total Transactions Per Second"}},
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


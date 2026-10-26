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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 21.0, "series": [{"data": [[0.0, 4.0], [0.1, 5.0], [0.2, 5.0], [0.3, 5.0], [0.4, 5.0], [0.5, 5.0], [0.6, 5.0], [0.7, 5.0], [0.8, 5.0], [0.9, 5.0], [1.0, 5.0], [1.1, 5.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 6.0], [2.2, 6.0], [2.3, 6.0], [2.4, 6.0], [2.5, 6.0], [2.6, 6.0], [2.7, 6.0], [2.8, 6.0], [2.9, 6.0], [3.0, 6.0], [3.1, 6.0], [3.2, 6.0], [3.3, 6.0], [3.4, 6.0], [3.5, 6.0], [3.6, 6.0], [3.7, 6.0], [3.8, 6.0], [3.9, 6.0], [4.0, 6.0], [4.1, 6.0], [4.2, 6.0], [4.3, 6.0], [4.4, 6.0], [4.5, 6.0], [4.6, 6.0], [4.7, 6.0], [4.8, 6.0], [4.9, 6.0], [5.0, 6.0], [5.1, 6.0], [5.2, 6.0], [5.3, 6.0], [5.4, 6.0], [5.5, 6.0], [5.6, 6.0], [5.7, 6.0], [5.8, 6.0], [5.9, 6.0], [6.0, 6.0], [6.1, 6.0], [6.2, 6.0], [6.3, 6.0], [6.4, 6.0], [6.5, 6.0], [6.6, 6.0], [6.7, 6.0], [6.8, 6.0], [6.9, 6.0], [7.0, 6.0], [7.1, 6.0], [7.2, 6.0], [7.3, 6.0], [7.4, 6.0], [7.5, 6.0], [7.6, 6.0], [7.7, 6.0], [7.8, 6.0], [7.9, 6.0], [8.0, 6.0], [8.1, 6.0], [8.2, 6.0], [8.3, 6.0], [8.4, 6.0], [8.5, 6.0], [8.6, 6.0], [8.7, 6.0], [8.8, 6.0], [8.9, 6.0], [9.0, 6.0], [9.1, 6.0], [9.2, 6.0], [9.3, 6.0], [9.4, 6.0], [9.5, 6.0], [9.6, 6.0], [9.7, 6.0], [9.8, 6.0], [9.9, 6.0], [10.0, 6.0], [10.1, 6.0], [10.2, 6.0], [10.3, 6.0], [10.4, 6.0], [10.5, 6.0], [10.6, 6.0], [10.7, 6.0], [10.8, 6.0], [10.9, 6.0], [11.0, 6.0], [11.1, 6.0], [11.2, 6.0], [11.3, 6.0], [11.4, 6.0], [11.5, 6.0], [11.6, 6.0], [11.7, 6.0], [11.8, 6.0], [11.9, 6.0], [12.0, 6.0], [12.1, 6.0], [12.2, 6.0], [12.3, 6.0], [12.4, 6.0], [12.5, 6.0], [12.6, 6.0], [12.7, 6.0], [12.8, 6.0], [12.9, 6.0], [13.0, 6.0], [13.1, 6.0], [13.2, 6.0], [13.3, 6.0], [13.4, 6.0], [13.5, 6.0], [13.6, 6.0], [13.7, 6.0], [13.8, 6.0], [13.9, 6.0], [14.0, 6.0], [14.1, 6.0], [14.2, 6.0], [14.3, 6.0], [14.4, 6.0], [14.5, 7.0], [14.6, 7.0], [14.7, 7.0], [14.8, 7.0], [14.9, 7.0], [15.0, 7.0], [15.1, 7.0], [15.2, 7.0], [15.3, 7.0], [15.4, 7.0], [15.5, 7.0], [15.6, 7.0], [15.7, 7.0], [15.8, 7.0], [15.9, 7.0], [16.0, 7.0], [16.1, 7.0], [16.2, 7.0], [16.3, 7.0], [16.4, 7.0], [16.5, 7.0], [16.6, 7.0], [16.7, 7.0], [16.8, 7.0], [16.9, 7.0], [17.0, 7.0], [17.1, 7.0], [17.2, 7.0], [17.3, 7.0], [17.4, 7.0], [17.5, 7.0], [17.6, 7.0], [17.7, 7.0], [17.8, 7.0], [17.9, 7.0], [18.0, 7.0], [18.1, 7.0], [18.2, 7.0], [18.3, 7.0], [18.4, 7.0], [18.5, 7.0], [18.6, 7.0], [18.7, 7.0], [18.8, 7.0], [18.9, 7.0], [19.0, 7.0], [19.1, 7.0], [19.2, 7.0], [19.3, 7.0], [19.4, 7.0], [19.5, 7.0], [19.6, 7.0], [19.7, 7.0], [19.8, 7.0], [19.9, 7.0], [20.0, 7.0], [20.1, 7.0], [20.2, 7.0], [20.3, 7.0], [20.4, 7.0], [20.5, 7.0], [20.6, 7.0], [20.7, 7.0], [20.8, 7.0], [20.9, 7.0], [21.0, 7.0], [21.1, 7.0], [21.2, 7.0], [21.3, 7.0], [21.4, 7.0], [21.5, 7.0], [21.6, 7.0], [21.7, 7.0], [21.8, 7.0], [21.9, 7.0], [22.0, 7.0], [22.1, 7.0], [22.2, 7.0], [22.3, 7.0], [22.4, 7.0], [22.5, 7.0], [22.6, 7.0], [22.7, 7.0], [22.8, 7.0], [22.9, 7.0], [23.0, 7.0], [23.1, 7.0], [23.2, 7.0], [23.3, 7.0], [23.4, 7.0], [23.5, 7.0], [23.6, 7.0], [23.7, 7.0], [23.8, 7.0], [23.9, 7.0], [24.0, 7.0], [24.1, 7.0], [24.2, 7.0], [24.3, 7.0], [24.4, 7.0], [24.5, 7.0], [24.6, 7.0], [24.7, 7.0], [24.8, 7.0], [24.9, 7.0], [25.0, 7.0], [25.1, 7.0], [25.2, 7.0], [25.3, 7.0], [25.4, 7.0], [25.5, 7.0], [25.6, 7.0], [25.7, 7.0], [25.8, 7.0], [25.9, 7.0], [26.0, 7.0], [26.1, 7.0], [26.2, 7.0], [26.3, 7.0], [26.4, 7.0], [26.5, 7.0], [26.6, 7.0], [26.7, 7.0], [26.8, 7.0], [26.9, 7.0], [27.0, 7.0], [27.1, 7.0], [27.2, 7.0], [27.3, 7.0], [27.4, 7.0], [27.5, 7.0], [27.6, 7.0], [27.7, 7.0], [27.8, 7.0], [27.9, 7.0], [28.0, 7.0], [28.1, 7.0], [28.2, 7.0], [28.3, 7.0], [28.4, 7.0], [28.5, 7.0], [28.6, 7.0], [28.7, 7.0], [28.8, 7.0], [28.9, 7.0], [29.0, 7.0], [29.1, 7.0], [29.2, 7.0], [29.3, 7.0], [29.4, 7.0], [29.5, 7.0], [29.6, 7.0], [29.7, 7.0], [29.8, 7.0], [29.9, 7.0], [30.0, 7.0], [30.1, 7.0], [30.2, 7.0], [30.3, 7.0], [30.4, 7.0], [30.5, 7.0], [30.6, 7.0], [30.7, 7.0], [30.8, 7.0], [30.9, 7.0], [31.0, 7.0], [31.1, 7.0], [31.2, 7.0], [31.3, 7.0], [31.4, 7.0], [31.5, 7.0], [31.6, 7.0], [31.7, 7.0], [31.8, 7.0], [31.9, 7.0], [32.0, 7.0], [32.1, 7.0], [32.2, 7.0], [32.3, 7.0], [32.4, 7.0], [32.5, 7.0], [32.6, 7.0], [32.7, 7.0], [32.8, 7.0], [32.9, 7.0], [33.0, 7.0], [33.1, 7.0], [33.2, 7.0], [33.3, 7.0], [33.4, 7.0], [33.5, 7.0], [33.6, 7.0], [33.7, 7.0], [33.8, 7.0], [33.9, 7.0], [34.0, 7.0], [34.1, 7.0], [34.2, 7.0], [34.3, 7.0], [34.4, 7.0], [34.5, 7.0], [34.6, 7.0], [34.7, 7.0], [34.8, 7.0], [34.9, 7.0], [35.0, 7.0], [35.1, 7.0], [35.2, 7.0], [35.3, 7.0], [35.4, 7.0], [35.5, 7.0], [35.6, 7.0], [35.7, 7.0], [35.8, 7.0], [35.9, 7.0], [36.0, 7.0], [36.1, 7.0], [36.2, 7.0], [36.3, 7.0], [36.4, 7.0], [36.5, 7.0], [36.6, 7.0], [36.7, 7.0], [36.8, 7.0], [36.9, 7.0], [37.0, 7.0], [37.1, 7.0], [37.2, 7.0], [37.3, 7.0], [37.4, 7.0], [37.5, 8.0], [37.6, 8.0], [37.7, 8.0], [37.8, 8.0], [37.9, 8.0], [38.0, 8.0], [38.1, 8.0], [38.2, 8.0], [38.3, 8.0], [38.4, 8.0], [38.5, 8.0], [38.6, 8.0], [38.7, 8.0], [38.8, 8.0], [38.9, 8.0], [39.0, 8.0], [39.1, 8.0], [39.2, 8.0], [39.3, 8.0], [39.4, 8.0], [39.5, 8.0], [39.6, 8.0], [39.7, 8.0], [39.8, 8.0], [39.9, 8.0], [40.0, 8.0], [40.1, 8.0], [40.2, 8.0], [40.3, 8.0], [40.4, 8.0], [40.5, 8.0], [40.6, 8.0], [40.7, 8.0], [40.8, 8.0], [40.9, 8.0], [41.0, 8.0], [41.1, 8.0], [41.2, 8.0], [41.3, 8.0], [41.4, 8.0], [41.5, 8.0], [41.6, 8.0], [41.7, 8.0], [41.8, 8.0], [41.9, 8.0], [42.0, 8.0], [42.1, 8.0], [42.2, 8.0], [42.3, 8.0], [42.4, 8.0], [42.5, 8.0], [42.6, 8.0], [42.7, 8.0], [42.8, 8.0], [42.9, 8.0], [43.0, 8.0], [43.1, 8.0], [43.2, 8.0], [43.3, 8.0], [43.4, 8.0], [43.5, 8.0], [43.6, 8.0], [43.7, 8.0], [43.8, 8.0], [43.9, 8.0], [44.0, 8.0], [44.1, 8.0], [44.2, 8.0], [44.3, 8.0], [44.4, 8.0], [44.5, 8.0], [44.6, 8.0], [44.7, 8.0], [44.8, 8.0], [44.9, 8.0], [45.0, 8.0], [45.1, 8.0], [45.2, 8.0], [45.3, 8.0], [45.4, 8.0], [45.5, 8.0], [45.6, 8.0], [45.7, 8.0], [45.8, 8.0], [45.9, 8.0], [46.0, 8.0], [46.1, 8.0], [46.2, 8.0], [46.3, 8.0], [46.4, 8.0], [46.5, 8.0], [46.6, 8.0], [46.7, 8.0], [46.8, 8.0], [46.9, 8.0], [47.0, 8.0], [47.1, 8.0], [47.2, 8.0], [47.3, 8.0], [47.4, 8.0], [47.5, 8.0], [47.6, 8.0], [47.7, 8.0], [47.8, 8.0], [47.9, 8.0], [48.0, 8.0], [48.1, 8.0], [48.2, 8.0], [48.3, 8.0], [48.4, 8.0], [48.5, 8.0], [48.6, 8.0], [48.7, 8.0], [48.8, 8.0], [48.9, 8.0], [49.0, 8.0], [49.1, 8.0], [49.2, 8.0], [49.3, 8.0], [49.4, 8.0], [49.5, 8.0], [49.6, 8.0], [49.7, 8.0], [49.8, 8.0], [49.9, 8.0], [50.0, 8.0], [50.1, 8.0], [50.2, 8.0], [50.3, 8.0], [50.4, 8.0], [50.5, 8.0], [50.6, 8.0], [50.7, 8.0], [50.8, 8.0], [50.9, 8.0], [51.0, 8.0], [51.1, 8.0], [51.2, 8.0], [51.3, 8.0], [51.4, 8.0], [51.5, 8.0], [51.6, 8.0], [51.7, 8.0], [51.8, 8.0], [51.9, 8.0], [52.0, 8.0], [52.1, 8.0], [52.2, 8.0], [52.3, 8.0], [52.4, 8.0], [52.5, 8.0], [52.6, 8.0], [52.7, 8.0], [52.8, 8.0], [52.9, 8.0], [53.0, 8.0], [53.1, 8.0], [53.2, 8.0], [53.3, 8.0], [53.4, 8.0], [53.5, 8.0], [53.6, 8.0], [53.7, 8.0], [53.8, 8.0], [53.9, 8.0], [54.0, 8.0], [54.1, 8.0], [54.2, 8.0], [54.3, 8.0], [54.4, 8.0], [54.5, 8.0], [54.6, 8.0], [54.7, 8.0], [54.8, 8.0], [54.9, 8.0], [55.0, 8.0], [55.1, 8.0], [55.2, 8.0], [55.3, 8.0], [55.4, 8.0], [55.5, 8.0], [55.6, 8.0], [55.7, 8.0], [55.8, 8.0], [55.9, 8.0], [56.0, 8.0], [56.1, 8.0], [56.2, 8.0], [56.3, 8.0], [56.4, 8.0], [56.5, 8.0], [56.6, 8.0], [56.7, 8.0], [56.8, 8.0], [56.9, 8.0], [57.0, 8.0], [57.1, 8.0], [57.2, 8.0], [57.3, 8.0], [57.4, 8.0], [57.5, 8.0], [57.6, 8.0], [57.7, 8.0], [57.8, 8.0], [57.9, 8.0], [58.0, 8.0], [58.1, 8.0], [58.2, 8.0], [58.3, 8.0], [58.4, 8.0], [58.5, 8.0], [58.6, 8.0], [58.7, 8.0], [58.8, 8.0], [58.9, 8.0], [59.0, 8.0], [59.1, 8.0], [59.2, 8.0], [59.3, 8.0], [59.4, 8.0], [59.5, 8.0], [59.6, 8.0], [59.7, 8.0], [59.8, 8.0], [59.9, 8.0], [60.0, 8.0], [60.1, 8.0], [60.2, 8.0], [60.3, 8.0], [60.4, 8.0], [60.5, 8.0], [60.6, 8.0], [60.7, 8.0], [60.8, 8.0], [60.9, 8.0], [61.0, 8.0], [61.1, 8.0], [61.2, 8.0], [61.3, 8.0], [61.4, 8.0], [61.5, 8.0], [61.6, 8.0], [61.7, 8.0], [61.8, 8.0], [61.9, 8.0], [62.0, 8.0], [62.1, 8.0], [62.2, 8.0], [62.3, 8.0], [62.4, 8.0], [62.5, 8.0], [62.6, 8.0], [62.7, 8.0], [62.8, 8.0], [62.9, 8.0], [63.0, 8.0], [63.1, 8.0], [63.2, 8.0], [63.3, 8.0], [63.4, 9.0], [63.5, 9.0], [63.6, 9.0], [63.7, 9.0], [63.8, 9.0], [63.9, 9.0], [64.0, 9.0], [64.1, 9.0], [64.2, 9.0], [64.3, 9.0], [64.4, 9.0], [64.5, 9.0], [64.6, 9.0], [64.7, 9.0], [64.8, 9.0], [64.9, 9.0], [65.0, 9.0], [65.1, 9.0], [65.2, 9.0], [65.3, 9.0], [65.4, 9.0], [65.5, 9.0], [65.6, 9.0], [65.7, 9.0], [65.8, 9.0], [65.9, 9.0], [66.0, 9.0], [66.1, 9.0], [66.2, 9.0], [66.3, 9.0], [66.4, 9.0], [66.5, 9.0], [66.6, 9.0], [66.7, 9.0], [66.8, 9.0], [66.9, 9.0], [67.0, 9.0], [67.1, 9.0], [67.2, 9.0], [67.3, 9.0], [67.4, 9.0], [67.5, 9.0], [67.6, 9.0], [67.7, 9.0], [67.8, 9.0], [67.9, 9.0], [68.0, 9.0], [68.1, 9.0], [68.2, 9.0], [68.3, 9.0], [68.4, 9.0], [68.5, 9.0], [68.6, 9.0], [68.7, 9.0], [68.8, 9.0], [68.9, 9.0], [69.0, 9.0], [69.1, 9.0], [69.2, 9.0], [69.3, 9.0], [69.4, 9.0], [69.5, 9.0], [69.6, 9.0], [69.7, 9.0], [69.8, 9.0], [69.9, 9.0], [70.0, 9.0], [70.1, 9.0], [70.2, 9.0], [70.3, 9.0], [70.4, 9.0], [70.5, 9.0], [70.6, 9.0], [70.7, 9.0], [70.8, 9.0], [70.9, 9.0], [71.0, 9.0], [71.1, 9.0], [71.2, 9.0], [71.3, 9.0], [71.4, 9.0], [71.5, 9.0], [71.6, 9.0], [71.7, 9.0], [71.8, 9.0], [71.9, 9.0], [72.0, 9.0], [72.1, 9.0], [72.2, 9.0], [72.3, 9.0], [72.4, 9.0], [72.5, 9.0], [72.6, 9.0], [72.7, 9.0], [72.8, 9.0], [72.9, 9.0], [73.0, 9.0], [73.1, 9.0], [73.2, 9.0], [73.3, 9.0], [73.4, 9.0], [73.5, 9.0], [73.6, 9.0], [73.7, 9.0], [73.8, 9.0], [73.9, 9.0], [74.0, 9.0], [74.1, 9.0], [74.2, 9.0], [74.3, 9.0], [74.4, 9.0], [74.5, 9.0], [74.6, 9.0], [74.7, 9.0], [74.8, 9.0], [74.9, 9.0], [75.0, 9.0], [75.1, 9.0], [75.2, 9.0], [75.3, 9.0], [75.4, 9.0], [75.5, 9.0], [75.6, 9.0], [75.7, 9.0], [75.8, 9.0], [75.9, 9.0], [76.0, 9.0], [76.1, 9.0], [76.2, 9.0], [76.3, 9.0], [76.4, 9.0], [76.5, 9.0], [76.6, 9.0], [76.7, 9.0], [76.8, 9.0], [76.9, 9.0], [77.0, 9.0], [77.1, 9.0], [77.2, 9.0], [77.3, 9.0], [77.4, 9.0], [77.5, 9.0], [77.6, 9.0], [77.7, 9.0], [77.8, 9.0], [77.9, 9.0], [78.0, 9.0], [78.1, 9.0], [78.2, 9.0], [78.3, 9.0], [78.4, 9.0], [78.5, 9.0], [78.6, 9.0], [78.7, 9.0], [78.8, 9.0], [78.9, 9.0], [79.0, 9.0], [79.1, 9.0], [79.2, 9.0], [79.3, 9.0], [79.4, 9.0], [79.5, 9.0], [79.6, 9.0], [79.7, 9.0], [79.8, 9.0], [79.9, 9.0], [80.0, 9.0], [80.1, 9.0], [80.2, 9.0], [80.3, 9.0], [80.4, 9.0], [80.5, 9.0], [80.6, 9.0], [80.7, 9.0], [80.8, 9.0], [80.9, 9.0], [81.0, 9.0], [81.1, 9.0], [81.2, 9.0], [81.3, 9.0], [81.4, 9.0], [81.5, 9.0], [81.6, 9.0], [81.7, 9.0], [81.8, 9.0], [81.9, 9.0], [82.0, 9.0], [82.1, 9.0], [82.2, 9.0], [82.3, 9.0], [82.4, 9.0], [82.5, 9.0], [82.6, 9.0], [82.7, 10.0], [82.8, 10.0], [82.9, 10.0], [83.0, 10.0], [83.1, 10.0], [83.2, 10.0], [83.3, 10.0], [83.4, 10.0], [83.5, 10.0], [83.6, 10.0], [83.7, 10.0], [83.8, 10.0], [83.9, 10.0], [84.0, 10.0], [84.1, 10.0], [84.2, 10.0], [84.3, 10.0], [84.4, 10.0], [84.5, 10.0], [84.6, 10.0], [84.7, 10.0], [84.8, 10.0], [84.9, 10.0], [85.0, 10.0], [85.1, 10.0], [85.2, 10.0], [85.3, 10.0], [85.4, 10.0], [85.5, 10.0], [85.6, 10.0], [85.7, 10.0], [85.8, 10.0], [85.9, 10.0], [86.0, 10.0], [86.1, 10.0], [86.2, 10.0], [86.3, 10.0], [86.4, 10.0], [86.5, 10.0], [86.6, 10.0], [86.7, 10.0], [86.8, 10.0], [86.9, 10.0], [87.0, 10.0], [87.1, 10.0], [87.2, 10.0], [87.3, 10.0], [87.4, 10.0], [87.5, 10.0], [87.6, 10.0], [87.7, 10.0], [87.8, 10.0], [87.9, 10.0], [88.0, 10.0], [88.1, 10.0], [88.2, 10.0], [88.3, 10.0], [88.4, 10.0], [88.5, 10.0], [88.6, 10.0], [88.7, 10.0], [88.8, 10.0], [88.9, 10.0], [89.0, 10.0], [89.1, 10.0], [89.2, 10.0], [89.3, 10.0], [89.4, 10.0], [89.5, 10.0], [89.6, 10.0], [89.7, 10.0], [89.8, 10.0], [89.9, 10.0], [90.0, 10.0], [90.1, 10.0], [90.2, 10.0], [90.3, 10.0], [90.4, 10.0], [90.5, 10.0], [90.6, 10.0], [90.7, 10.0], [90.8, 10.0], [90.9, 10.0], [91.0, 10.0], [91.1, 10.0], [91.2, 10.0], [91.3, 10.0], [91.4, 10.0], [91.5, 10.0], [91.6, 10.0], [91.7, 10.0], [91.8, 10.0], [91.9, 10.0], [92.0, 10.0], [92.1, 10.0], [92.2, 10.0], [92.3, 10.0], [92.4, 10.0], [92.5, 10.0], [92.6, 11.0], [92.7, 11.0], [92.8, 11.0], [92.9, 11.0], [93.0, 11.0], [93.1, 11.0], [93.2, 11.0], [93.3, 11.0], [93.4, 11.0], [93.5, 11.0], [93.6, 11.0], [93.7, 11.0], [93.8, 11.0], [93.9, 11.0], [94.0, 11.0], [94.1, 11.0], [94.2, 11.0], [94.3, 11.0], [94.4, 11.0], [94.5, 11.0], [94.6, 11.0], [94.7, 11.0], [94.8, 11.0], [94.9, 11.0], [95.0, 11.0], [95.1, 11.0], [95.2, 11.0], [95.3, 11.0], [95.4, 11.0], [95.5, 11.0], [95.6, 11.0], [95.7, 11.0], [95.8, 11.0], [95.9, 11.0], [96.0, 11.0], [96.1, 11.0], [96.2, 11.0], [96.3, 11.0], [96.4, 11.0], [96.5, 11.0], [96.6, 11.0], [96.7, 11.0], [96.8, 11.0], [96.9, 12.0], [97.0, 12.0], [97.1, 12.0], [97.2, 12.0], [97.3, 12.0], [97.4, 12.0], [97.5, 12.0], [97.6, 12.0], [97.7, 12.0], [97.8, 12.0], [97.9, 12.0], [98.0, 12.0], [98.1, 12.0], [98.2, 12.0], [98.3, 12.0], [98.4, 12.0], [98.5, 12.0], [98.6, 12.0], [98.7, 13.0], [98.8, 13.0], [98.9, 13.0], [99.0, 13.0], [99.1, 13.0], [99.2, 13.0], [99.3, 13.0], [99.4, 14.0], [99.5, 14.0], [99.6, 14.0], [99.7, 15.0], [99.8, 16.0], [99.9, 16.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 72825.0, "minX": 0.0, "maxY": 72825.0, "series": [{"data": [[0.0, 72825.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4.9E-324, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 72825.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 72825.0, "series": [{"data": [[0.0, 72825.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.767605633802813, "minX": 1.792667392E12, "maxY": 10.0, "series": [{"data": [[1.792667426E12, 10.0], [1.792667428E12, 10.0], [1.79266743E12, 10.0], [1.792667432E12, 10.0], [1.792667434E12, 10.0], [1.792667414E12, 10.0], [1.792667416E12, 10.0], [1.792667418E12, 10.0], [1.79266742E12, 10.0], [1.792667422E12, 10.0], [1.792667424E12, 10.0], [1.792667404E12, 10.0], [1.792667447E12, 10.0], [1.792667449E12, 10.0], [1.792667406E12, 10.0], [1.792667408E12, 10.0], [1.792667451E12, 10.0], [1.79266741E12, 10.0], [1.792667412E12, 10.0], [1.792667435E12, 10.0], [1.792667437E12, 10.0], [1.792667394E12, 10.0], [1.792667396E12, 10.0], [1.792667439E12, 10.0], [1.792667441E12, 10.0], [1.792667398E12, 10.0], [1.7926674E12, 10.0], [1.792667443E12, 10.0], [1.792667445E12, 10.0], [1.792667402E12, 10.0], [1.792667425E12, 10.0], [1.792667427E12, 10.0], [1.792667429E12, 10.0], [1.792667431E12, 10.0], [1.792667433E12, 10.0], [1.792667392E12, 10.0], [1.792667415E12, 10.0], [1.792667417E12, 10.0], [1.792667419E12, 10.0], [1.792667421E12, 10.0], [1.792667423E12, 10.0], [1.792667403E12, 10.0], [1.792667446E12, 10.0], [1.792667405E12, 10.0], [1.792667448E12, 10.0], [1.792667407E12, 10.0], [1.79266745E12, 10.0], [1.792667409E12, 10.0], [1.792667452E12, 9.767605633802813], [1.792667411E12, 10.0], [1.792667413E12, 10.0], [1.792667393E12, 10.0], [1.792667436E12, 10.0], [1.792667395E12, 10.0], [1.792667438E12, 10.0], [1.792667397E12, 10.0], [1.79266744E12, 10.0], [1.792667399E12, 10.0], [1.792667442E12, 10.0], [1.792667401E12, 10.0], [1.792667444E12, 10.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667452E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.0, "maxY": 8.25, "series": [{"data": [[8.0, 6.833333333333333], [1.0, 5.0], [9.0, 6.875], [10.0, 8.134325077952214], [5.0, 8.25], [6.0, 6.0], [7.0, 7.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.999093717816685, 8.133937521455536]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 119280.0, "minX": 1.792667392E12, "maxY": 590643.0, "series": [{"data": [[1.792667426E12, 570377.0], [1.792667428E12, 579828.0], [1.79266743E12, 580834.0], [1.792667432E12, 590314.0], [1.792667434E12, 577932.0], [1.792667414E12, 571296.0], [1.792667416E12, 581279.0], [1.792667418E12, 577487.0], [1.79266742E12, 589308.0], [1.792667422E12, 570793.0], [1.792667424E12, 590643.0], [1.792667404E12, 572718.0], [1.792667447E12, 580302.0], [1.792667449E12, 574111.0], [1.792667406E12, 561342.0], [1.792667408E12, 560897.0], [1.792667451E12, 575533.0], [1.79266741E12, 557047.0], [1.792667412E12, 567533.0], [1.792667435E12, 590285.0], [1.792667437E12, 574614.0], [1.792667394E12, 573221.0], [1.792667396E12, 583591.0], [1.792667439E12, 587886.0], [1.792667441E12, 578435.0], [1.792667398E12, 579354.0], [1.7926674E12, 577932.0], [1.792667443E12, 567504.0], [1.792667445E12, 566082.0], [1.792667402E12, 558498.0], [1.792667425E12, 574198.0], [1.792667427E12, 582169.0], [1.792667429E12, 575030.0], [1.792667431E12, 560810.0], [1.792667433E12, 579770.0], [1.792667392E12, 401502.0], [1.792667415E12, 589753.0], [1.792667417E12, 559417.0], [1.792667419E12, 589724.0], [1.792667421E12, 565163.0], [1.792667423E12, 570851.0], [1.792667403E12, 564215.0], [1.792667446E12, 579799.0], [1.792667405E12, 576984.0], [1.792667448E12, 589308.0], [1.792667407E12, 562735.0], [1.79266745E12, 575591.0], [1.792667409E12, 568955.0], [1.792667452E12, 134529.0], [1.792667411E12, 576036.0], [1.792667413E12, 569371.0], [1.792667393E12, 561816.0], [1.792667436E12, 582169.0], [1.792667395E12, 590227.0], [1.792667438E12, 577429.0], [1.792667397E12, 574140.0], [1.79266744E12, 586435.0], [1.792667399E12, 577458.0], [1.792667442E12, 583088.0], [1.792667401E12, 572215.0], [1.792667444E12, 579383.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.792667426E12, 505680.0], [1.792667428E12, 514080.0], [1.79266743E12, 514920.0], [1.792667432E12, 523320.0], [1.792667434E12, 512400.0], [1.792667414E12, 506520.0], [1.792667416E12, 515340.0], [1.792667418E12, 511980.0], [1.79266742E12, 522480.0], [1.792667422E12, 506100.0], [1.792667424E12, 523740.0], [1.792667404E12, 507780.0], [1.792667447E12, 514500.0], [1.792667449E12, 509040.0], [1.792667406E12, 497700.0], [1.792667408E12, 497280.0], [1.792667451E12, 510300.0], [1.79266741E12, 493920.0], [1.792667412E12, 503160.0], [1.792667435E12, 523320.0], [1.792667437E12, 509460.0], [1.792667394E12, 508200.0], [1.792667396E12, 517440.0], [1.792667439E12, 521220.0], [1.792667441E12, 512820.0], [1.792667398E12, 513660.0], [1.7926674E12, 512400.0], [1.792667443E12, 503160.0], [1.792667445E12, 501900.0], [1.792667402E12, 495180.0], [1.792667425E12, 509040.0], [1.792667427E12, 516180.0], [1.792667429E12, 509880.0], [1.792667431E12, 497280.0], [1.792667433E12, 514080.0], [1.792667392E12, 356580.0], [1.792667415E12, 522900.0], [1.792667417E12, 496020.0], [1.792667419E12, 522900.0], [1.792667421E12, 501060.0], [1.792667423E12, 506100.0], [1.792667403E12, 500220.0], [1.792667446E12, 514080.0], [1.792667405E12, 511560.0], [1.792667448E12, 522480.0], [1.792667407E12, 498960.0], [1.79266745E12, 510300.0], [1.792667409E12, 504420.0], [1.792667452E12, 119280.0], [1.792667411E12, 510720.0], [1.792667413E12, 504840.0], [1.792667393E12, 498120.0], [1.792667436E12, 516180.0], [1.792667395E12, 523320.0], [1.792667438E12, 511980.0], [1.792667397E12, 509040.0], [1.79266744E12, 519960.0], [1.792667399E12, 511980.0], [1.792667442E12, 517020.0], [1.792667401E12, 507360.0], [1.792667444E12, 513660.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667452E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7.886837881219901, "minX": 1.792667392E12, "maxY": 8.413265306122437, "series": [{"data": [[1.792667426E12, 8.143687707641186], [1.792667428E12, 8.08415032679738], [1.79266743E12, 8.090538336052202], [1.792667432E12, 7.9839486356340075], [1.792667434E12, 8.137704918032792], [1.792667414E12, 8.223051409618577], [1.792667416E12, 8.051344743276271], [1.792667418E12, 8.109926168990977], [1.79266742E12, 7.9565916398713785], [1.792667422E12, 8.224066390041504], [1.792667424E12, 7.913392141138739], [1.792667404E12, 8.185277088502893], [1.792667447E12, 8.069387755102035], [1.792667449E12, 8.1493399339934], [1.792667406E12, 8.351054852320676], [1.792667408E12, 8.36064189189189], [1.792667451E12, 8.145679012345674], [1.79266741E12, 8.413265306122437], [1.792667412E12, 8.287979966611028], [1.792667435E12, 7.947030497592305], [1.792667437E12, 8.10469909315746], [1.792667394E12, 8.089256198347107], [1.792667396E12, 7.9788961038961075], [1.792667439E12, 7.9516518936341525], [1.792667441E12, 8.113022113022112], [1.792667398E12, 8.096484055600984], [1.7926674E12, 8.083606557377061], [1.792667443E12, 8.223706176961615], [1.792667445E12, 8.279497907949777], [1.792667402E12, 8.38931297709924], [1.792667425E12, 8.191419141914205], [1.792667427E12, 8.077298616761595], [1.792667429E12, 8.168039538714991], [1.792667431E12, 8.321790540540537], [1.792667433E12, 8.066176470588223], [1.792667392E12, 8.01295641931684], [1.792667415E12, 7.9799196787148725], [1.792667417E12, 8.383573243014403], [1.792667419E12, 7.963855421686746], [1.792667421E12, 8.300922045264041], [1.792667423E12, 8.240663900414942], [1.792667403E12, 8.264483627204003], [1.792667446E12, 8.1168300653595], [1.792667405E12, 8.100985221674861], [1.792667448E12, 7.989549839228298], [1.792667407E12, 8.295454545454552], [1.79266745E12, 8.107818930041141], [1.792667409E12, 8.229808492922567], [1.792667452E12, 8.091549295774653], [1.792667411E12, 8.134868421052639], [1.792667413E12, 8.21713810316141], [1.792667393E12, 8.248735244519393], [1.792667436E12, 8.076484947111467], [1.792667395E12, 7.886837881219901], [1.792667438E12, 8.155865463494667], [1.792667397E12, 8.077557755775574], [1.79266744E12, 8.014539579967693], [1.792667399E12, 8.077112387202627], [1.792667442E12, 8.046303818034112], [1.792667401E12, 8.110927152317878], [1.792667444E12, 8.12591986917417]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667452E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7.8844301765650044, "minX": 1.792667392E12, "maxY": 8.411564625850328, "series": [{"data": [[1.792667426E12, 8.141196013289038], [1.792667428E12, 8.080882352941181], [1.79266743E12, 8.08890701468189], [1.792667432E12, 7.9839486356340075], [1.792667434E12, 8.137704918032792], [1.792667414E12, 8.22222222222222], [1.792667416E12, 8.049714751426249], [1.792667418E12, 8.107465135356842], [1.79266742E12, 7.955787781350485], [1.792667422E12, 8.22323651452283], [1.792667424E12, 7.912590216519644], [1.792667404E12, 8.185277088502893], [1.792667447E12, 8.068571428571431], [1.792667449E12, 8.1493399339934], [1.792667406E12, 8.350210970464147], [1.792667408E12, 8.36064189189189], [1.792667451E12, 8.143209876543219], [1.79266741E12, 8.411564625850328], [1.792667412E12, 8.28464106844743], [1.792667435E12, 7.945425361155707], [1.792667437E12, 8.101401483924153], [1.792667394E12, 8.085950413223134], [1.792667396E12, 7.9788961038961075], [1.792667439E12, 7.9508460918613935], [1.792667441E12, 8.112203112203124], [1.792667398E12, 8.095666394112829], [1.7926674E12, 8.0827868852459], [1.792667443E12, 8.222871452420708], [1.792667445E12, 8.278661087866105], [1.792667402E12, 8.38931297709924], [1.792667425E12, 8.188943894389439], [1.792667427E12, 8.076484947111478], [1.792667429E12, 8.165568369028007], [1.792667431E12, 8.321790540540537], [1.792667433E12, 8.066176470588223], [1.792667392E12, 8.009422850412241], [1.792667415E12, 7.97911646586346], [1.792667417E12, 8.383573243014403], [1.792667419E12, 7.962248995983937], [1.792667421E12, 8.29924559932941], [1.792667423E12, 8.239834024896265], [1.792667403E12, 8.262804366078928], [1.792667446E12, 8.116013071895425], [1.792667405E12, 8.100985221674861], [1.792667448E12, 7.987942122186498], [1.792667407E12, 8.28703703703704], [1.79266745E12, 8.10699588477367], [1.792667409E12, 8.228975853455443], [1.792667452E12, 8.088028169014093], [1.792667411E12, 8.130756578947368], [1.792667413E12, 8.21547420965058], [1.792667393E12, 8.244519392917363], [1.792667436E12, 8.075671277461366], [1.792667395E12, 7.8844301765650044], [1.792667438E12, 8.155865463494667], [1.792667397E12, 8.075907590759064], [1.79266744E12, 8.012924071082397], [1.792667399E12, 8.077112387202627], [1.792667442E12, 8.044679122664506], [1.792667401E12, 8.110099337748348], [1.792667444E12, 8.122649223221579]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667452E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.792667392E12, "maxY": 0.006756756756756761, "series": [{"data": [[1.792667426E12, 0.0016611295681063134], [1.792667428E12, 0.003267973856209152], [1.79266743E12, 0.0], [1.792667432E12, 8.025682182985555E-4], [1.792667434E12, 0.002459016393442625], [1.792667414E12, 0.0016583747927031533], [1.792667416E12, 0.0016299918500407523], [1.792667418E12, 0.003281378178835116], [1.79266742E12, 0.004823151125401934], [1.792667422E12, 8.298755186722001E-4], [1.792667424E12, 0.004811547714514838], [1.792667404E12, 0.004135649296939622], [1.792667447E12, 8.163265306122449E-4], [1.792667449E12, 0.004950495049504951], [1.792667406E12, 0.0016877637130801705], [1.792667408E12, 0.0025337837837837844], [1.792667451E12, 0.00329218106995885], [1.79266741E12, 8.503401360544229E-4], [1.792667412E12, 0.001669449081803007], [1.792667435E12, 0.003210272873194226], [1.792667437E12, 0.002473206924979393], [1.792667394E12, 0.0033057851239669447], [1.792667396E12, 0.002435064935064936], [1.792667439E12, 0.0016116035455278023], [1.792667441E12, 0.0016380016380016411], [1.792667398E12, 0.0016353229762878182], [1.7926674E12, 0.0032786885245901665], [1.792667443E12, 0.0025041736227045088], [1.792667445E12, 0.0033472803347280346], [1.792667402E12, 0.0025445292620865155], [1.792667425E12, 0.002475247524752476], [1.792667427E12, 0.0032546786004882034], [1.792667429E12, 0.0041186161449752925], [1.792667431E12, 0.006756756756756761], [1.792667433E12, 0.004084967320261442], [1.792667392E12, 0.0035335689045936404], [1.792667415E12, 0.0016064257028112479], [1.792667417E12, 0.002540220152413211], [1.792667419E12, 0.004819277108433745], [1.792667421E12, 0.0033528918692372223], [1.792667423E12, 0.0033195020746888005], [1.792667403E12, 0.004198152812762388], [1.792667446E12, 0.004901960784313728], [1.792667405E12, 0.0024630541871921213], [1.792667448E12, 0.001607717041800644], [1.792667407E12, 0.0033670033670033677], [1.79266745E12, 0.002469135802469138], [1.792667409E12, 0.0024979184013322235], [1.792667452E12, 0.00352112676056338], [1.792667411E12, 0.005756578947368425], [1.792667413E12, 0.004159733777038277], [1.792667393E12, 0.005902192242833045], [1.792667436E12, 0.001627339300244103], [1.792667395E12, 0.003210272873194224], [1.792667438E12, 0.004101722723543894], [1.792667397E12, 0.004125412541254129], [1.79266744E12, 8.077544426494346E-4], [1.792667399E12, 0.0057424118129614414], [1.792667442E12, 0.0032493907392363987], [1.792667401E12, 0.0024834437086092742], [1.792667444E12, 0.004088307440719542]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667452E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.792667392E12, "maxY": 21.0, "series": [{"data": [[1.792667426E12, 17.0], [1.792667428E12, 16.0], [1.79266743E12, 17.0], [1.792667432E12, 13.0], [1.792667434E12, 19.0], [1.792667414E12, 20.0], [1.792667416E12, 15.0], [1.792667418E12, 20.0], [1.79266742E12, 14.0], [1.792667422E12, 16.0], [1.792667424E12, 19.0], [1.792667404E12, 15.0], [1.792667447E12, 18.0], [1.792667449E12, 16.0], [1.792667406E12, 15.0], [1.792667408E12, 19.0], [1.792667451E12, 17.0], [1.79266741E12, 18.0], [1.792667412E12, 15.0], [1.792667435E12, 15.0], [1.792667437E12, 16.0], [1.792667394E12, 18.0], [1.792667396E12, 20.0], [1.792667439E12, 16.0], [1.792667441E12, 14.0], [1.792667398E12, 16.0], [1.7926674E12, 15.0], [1.792667443E12, 16.0], [1.792667445E12, 15.0], [1.792667402E12, 19.0], [1.792667425E12, 15.0], [1.792667427E12, 16.0], [1.792667429E12, 17.0], [1.792667431E12, 19.0], [1.792667433E12, 16.0], [1.792667392E12, 16.0], [1.792667415E12, 15.0], [1.792667417E12, 21.0], [1.792667419E12, 16.0], [1.792667421E12, 18.0], [1.792667423E12, 18.0], [1.792667403E12, 17.0], [1.792667446E12, 15.0], [1.792667405E12, 17.0], [1.792667448E12, 15.0], [1.792667407E12, 17.0], [1.79266745E12, 14.0], [1.792667409E12, 21.0], [1.792667452E12, 13.0], [1.792667411E12, 15.0], [1.792667413E12, 18.0], [1.792667393E12, 18.0], [1.792667436E12, 15.0], [1.792667395E12, 20.0], [1.792667438E12, 19.0], [1.792667397E12, 14.0], [1.79266744E12, 16.0], [1.792667399E12, 15.0], [1.792667442E12, 14.0], [1.792667401E12, 16.0], [1.792667444E12, 18.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.792667426E12, 5.0], [1.792667428E12, 4.0], [1.79266743E12, 5.0], [1.792667432E12, 5.0], [1.792667434E12, 4.0], [1.792667414E12, 5.0], [1.792667416E12, 4.0], [1.792667418E12, 5.0], [1.79266742E12, 5.0], [1.792667422E12, 5.0], [1.792667424E12, 5.0], [1.792667404E12, 4.0], [1.792667447E12, 5.0], [1.792667449E12, 4.0], [1.792667406E12, 4.0], [1.792667408E12, 5.0], [1.792667451E12, 5.0], [1.79266741E12, 4.0], [1.792667412E12, 5.0], [1.792667435E12, 5.0], [1.792667437E12, 5.0], [1.792667394E12, 5.0], [1.792667396E12, 4.0], [1.792667439E12, 5.0], [1.792667441E12, 4.0], [1.792667398E12, 4.0], [1.7926674E12, 5.0], [1.792667443E12, 5.0], [1.792667445E12, 5.0], [1.792667402E12, 5.0], [1.792667425E12, 5.0], [1.792667427E12, 4.0], [1.792667429E12, 4.0], [1.792667431E12, 5.0], [1.792667433E12, 5.0], [1.792667392E12, 5.0], [1.792667415E12, 4.0], [1.792667417E12, 5.0], [1.792667419E12, 4.0], [1.792667421E12, 5.0], [1.792667423E12, 4.0], [1.792667403E12, 4.0], [1.792667446E12, 5.0], [1.792667405E12, 4.0], [1.792667448E12, 5.0], [1.792667407E12, 5.0], [1.79266745E12, 5.0], [1.792667409E12, 5.0], [1.792667452E12, 5.0], [1.792667411E12, 5.0], [1.792667413E12, 5.0], [1.792667393E12, 4.0], [1.792667436E12, 5.0], [1.792667395E12, 4.0], [1.792667438E12, 5.0], [1.792667397E12, 4.0], [1.79266744E12, 5.0], [1.792667399E12, 5.0], [1.792667442E12, 4.0], [1.792667401E12, 5.0], [1.792667444E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.792667426E12, 10.0], [1.792667428E12, 10.0], [1.79266743E12, 10.0], [1.792667432E12, 10.0], [1.792667434E12, 10.0], [1.792667414E12, 10.0], [1.792667416E12, 10.0], [1.792667418E12, 10.0], [1.79266742E12, 10.0], [1.792667422E12, 10.0], [1.792667424E12, 10.0], [1.792667404E12, 10.0], [1.792667447E12, 10.0], [1.792667449E12, 10.0], [1.792667406E12, 11.0], [1.792667408E12, 10.0], [1.792667451E12, 10.0], [1.79266741E12, 11.0], [1.792667412E12, 10.0], [1.792667435E12, 10.0], [1.792667437E12, 10.0], [1.792667394E12, 10.0], [1.792667396E12, 10.0], [1.792667439E12, 10.0], [1.792667441E12, 10.0], [1.792667398E12, 10.0], [1.7926674E12, 10.0], [1.792667443E12, 10.0], [1.792667445E12, 11.0], [1.792667402E12, 11.0], [1.792667425E12, 10.0], [1.792667427E12, 10.0], [1.792667429E12, 10.0], [1.792667431E12, 11.0], [1.792667433E12, 10.0], [1.792667392E12, 10.0], [1.792667415E12, 10.0], [1.792667417E12, 11.0], [1.792667419E12, 10.0], [1.792667421E12, 10.0], [1.792667423E12, 10.0], [1.792667403E12, 10.0], [1.792667446E12, 10.0], [1.792667405E12, 10.0], [1.792667448E12, 10.0], [1.792667407E12, 10.0], [1.79266745E12, 10.0], [1.792667409E12, 11.0], [1.792667452E12, 10.0], [1.792667411E12, 10.0], [1.792667413E12, 10.0], [1.792667393E12, 10.0], [1.792667436E12, 10.0], [1.792667395E12, 10.0], [1.792667438E12, 10.0], [1.792667397E12, 10.0], [1.79266744E12, 10.0], [1.792667399E12, 10.0], [1.792667442E12, 10.0], [1.792667401E12, 10.0], [1.792667444E12, 10.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.792667426E12, 13.0], [1.792667428E12, 12.0], [1.79266743E12, 13.0], [1.792667432E12, 11.529999999999973], [1.792667434E12, 13.0], [1.792667414E12, 13.0], [1.792667416E12, 13.0], [1.792667418E12, 13.799999999999955], [1.79266742E12, 12.0], [1.792667422E12, 13.0], [1.792667424E12, 13.0], [1.792667404E12, 13.0], [1.792667447E12, 13.0], [1.792667449E12, 13.0], [1.792667406E12, 13.0], [1.792667408E12, 14.0], [1.792667451E12, 13.0], [1.79266741E12, 15.0], [1.792667412E12, 13.0], [1.792667435E12, 12.0], [1.792667437E12, 13.0], [1.792667394E12, 14.8900000000001], [1.792667396E12, 13.0], [1.792667439E12, 12.0], [1.792667441E12, 13.0], [1.792667398E12, 12.0], [1.7926674E12, 12.0], [1.792667443E12, 13.0], [1.792667445E12, 14.0], [1.792667402E12, 14.0], [1.792667425E12, 14.0], [1.792667427E12, 13.0], [1.792667429E12, 14.0], [1.792667431E12, 13.150000000000091], [1.792667433E12, 12.0], [1.792667392E12, 13.0], [1.792667415E12, 12.0], [1.792667417E12, 15.0], [1.792667419E12, 13.0], [1.792667421E12, 14.0], [1.792667423E12, 13.0], [1.792667403E12, 15.0], [1.792667446E12, 12.75], [1.792667405E12, 12.0], [1.792667448E12, 12.0], [1.792667407E12, 13.0], [1.79266745E12, 12.0], [1.792667409E12, 14.0], [1.792667452E12, 12.0], [1.792667411E12, 13.0], [1.792667413E12, 14.0], [1.792667393E12, 15.0], [1.792667436E12, 13.0], [1.792667395E12, 12.0], [1.792667438E12, 13.0], [1.792667397E12, 12.0], [1.79266744E12, 13.0], [1.792667399E12, 13.0], [1.792667442E12, 12.0], [1.792667401E12, 12.0], [1.792667444E12, 13.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.792667426E12, 8.0], [1.792667428E12, 8.0], [1.79266743E12, 8.0], [1.792667432E12, 8.0], [1.792667434E12, 8.0], [1.792667414E12, 8.0], [1.792667416E12, 8.0], [1.792667418E12, 8.0], [1.79266742E12, 8.0], [1.792667422E12, 8.0], [1.792667424E12, 8.0], [1.792667404E12, 8.0], [1.792667447E12, 8.0], [1.792667449E12, 8.0], [1.792667406E12, 8.0], [1.792667408E12, 8.0], [1.792667451E12, 8.0], [1.79266741E12, 8.0], [1.792667412E12, 8.0], [1.792667435E12, 8.0], [1.792667437E12, 8.0], [1.792667394E12, 8.0], [1.792667396E12, 8.0], [1.792667439E12, 8.0], [1.792667441E12, 8.0], [1.792667398E12, 8.0], [1.7926674E12, 8.0], [1.792667443E12, 8.0], [1.792667445E12, 8.0], [1.792667402E12, 8.0], [1.792667425E12, 8.0], [1.792667427E12, 8.0], [1.792667429E12, 8.0], [1.792667431E12, 8.0], [1.792667433E12, 8.0], [1.792667392E12, 8.0], [1.792667415E12, 8.0], [1.792667417E12, 8.0], [1.792667419E12, 8.0], [1.792667421E12, 8.0], [1.792667423E12, 8.0], [1.792667403E12, 8.0], [1.792667446E12, 8.0], [1.792667405E12, 8.0], [1.792667448E12, 8.0], [1.792667407E12, 8.0], [1.79266745E12, 8.0], [1.792667409E12, 8.0], [1.792667452E12, 8.0], [1.792667411E12, 8.0], [1.792667413E12, 8.0], [1.792667393E12, 8.0], [1.792667436E12, 8.0], [1.792667395E12, 8.0], [1.792667438E12, 8.0], [1.792667397E12, 8.0], [1.79266744E12, 8.0], [1.792667399E12, 8.0], [1.792667442E12, 8.0], [1.792667401E12, 8.0], [1.792667444E12, 8.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.792667426E12, 11.0], [1.792667428E12, 11.0], [1.79266743E12, 11.0], [1.792667432E12, 10.0], [1.792667434E12, 11.0], [1.792667414E12, 11.0], [1.792667416E12, 11.0], [1.792667418E12, 11.0], [1.79266742E12, 11.0], [1.792667422E12, 11.0], [1.792667424E12, 11.0], [1.792667404E12, 11.0], [1.792667447E12, 11.0], [1.792667449E12, 11.0], [1.792667406E12, 11.0], [1.792667408E12, 11.0], [1.792667451E12, 11.0], [1.79266741E12, 12.0], [1.792667412E12, 11.0], [1.792667435E12, 11.0], [1.792667437E12, 11.0], [1.792667394E12, 11.0], [1.792667396E12, 11.0], [1.792667439E12, 11.0], [1.792667441E12, 11.0], [1.792667398E12, 11.0], [1.7926674E12, 11.0], [1.792667443E12, 11.0], [1.792667445E12, 11.0], [1.792667402E12, 11.0], [1.792667425E12, 11.0], [1.792667427E12, 11.0], [1.792667429E12, 11.0], [1.792667431E12, 11.0], [1.792667433E12, 11.0], [1.792667392E12, 11.0], [1.792667415E12, 11.0], [1.792667417E12, 11.0], [1.792667419E12, 10.700000000000045], [1.792667421E12, 11.0], [1.792667423E12, 11.0], [1.792667403E12, 11.0], [1.792667446E12, 11.0], [1.792667405E12, 10.049999999999955], [1.792667448E12, 11.0], [1.792667407E12, 11.0], [1.79266745E12, 11.0], [1.792667409E12, 11.0], [1.792667452E12, 11.0], [1.792667411E12, 11.0], [1.792667413E12, 11.0], [1.792667393E12, 12.0], [1.792667436E12, 11.0], [1.792667395E12, 11.0], [1.792667438E12, 11.0], [1.792667397E12, 11.0], [1.79266744E12, 11.0], [1.792667399E12, 11.0], [1.792667442E12, 11.0], [1.792667401E12, 11.0], [1.792667444E12, 11.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667452E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 8.0, "minX": 284.0, "maxY": 8.0, "series": [{"data": [[849.0, 8.0], [1212.0, 8.0], [1186.0, 8.0], [1210.0, 8.0], [1208.0, 8.0], [1179.0, 8.0], [1176.0, 8.0], [1201.0, 8.0], [1181.0, 8.0], [1202.0, 8.0], [1206.0, 8.0], [1205.0, 8.0], [1204.0, 8.0], [1191.0, 8.0], [1198.0, 8.0], [1193.0, 8.0], [1195.0, 8.0], [1209.0, 8.0], [1185.0, 8.0], [1188.0, 8.0], [1184.0, 8.0], [1214.0, 8.0], [1215.0, 8.0], [1213.0, 8.0], [1218.0, 8.0], [1246.0, 8.0], [1232.0, 8.0], [1241.0, 8.0], [1238.0, 8.0], [1223.0, 8.0], [1221.0, 8.0], [1224.0, 8.0], [1226.0, 8.0], [1225.0, 8.0], [1219.0, 8.0], [1220.0, 8.0], [1216.0, 8.0], [1247.0, 8.0], [1245.0, 8.0], [1244.0, 8.0], [1227.0, 8.0], [1229.0, 8.0], [1231.0, 8.0], [284.0, 8.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1247.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8.0, "minX": 284.0, "maxY": 8.0, "series": [{"data": [[849.0, 8.0], [1212.0, 8.0], [1186.0, 8.0], [1210.0, 8.0], [1208.0, 8.0], [1179.0, 8.0], [1176.0, 8.0], [1201.0, 8.0], [1181.0, 8.0], [1202.0, 8.0], [1206.0, 8.0], [1205.0, 8.0], [1204.0, 8.0], [1191.0, 8.0], [1198.0, 8.0], [1193.0, 8.0], [1195.0, 8.0], [1209.0, 8.0], [1185.0, 8.0], [1188.0, 8.0], [1184.0, 8.0], [1214.0, 8.0], [1215.0, 8.0], [1213.0, 8.0], [1218.0, 8.0], [1246.0, 8.0], [1232.0, 8.0], [1241.0, 8.0], [1238.0, 8.0], [1223.0, 8.0], [1221.0, 8.0], [1224.0, 8.0], [1226.0, 8.0], [1225.0, 8.0], [1219.0, 8.0], [1220.0, 8.0], [1216.0, 8.0], [1247.0, 8.0], [1245.0, 8.0], [1244.0, 8.0], [1227.0, 8.0], [1229.0, 8.0], [1231.0, 8.0], [284.0, 8.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1247.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 274.0, "minX": 1.792667392E12, "maxY": 1247.0, "series": [{"data": [[1.792667426E12, 1204.0], [1.792667428E12, 1225.0], [1.79266743E12, 1226.0], [1.792667432E12, 1246.0], [1.792667434E12, 1220.0], [1.792667414E12, 1206.0], [1.792667416E12, 1227.0], [1.792667418E12, 1219.0], [1.79266742E12, 1244.0], [1.792667422E12, 1205.0], [1.792667424E12, 1247.0], [1.792667404E12, 1209.0], [1.792667447E12, 1225.0], [1.792667449E12, 1211.0], [1.792667406E12, 1185.0], [1.792667408E12, 1184.0], [1.792667451E12, 1215.0], [1.79266741E12, 1176.0], [1.792667412E12, 1198.0], [1.792667435E12, 1246.0], [1.792667437E12, 1213.0], [1.792667394E12, 1210.0], [1.792667396E12, 1232.0], [1.792667439E12, 1243.0], [1.792667441E12, 1221.0], [1.792667398E12, 1223.0], [1.7926674E12, 1221.0], [1.792667443E12, 1198.0], [1.792667445E12, 1195.0], [1.792667402E12, 1178.0], [1.792667425E12, 1212.0], [1.792667427E12, 1228.0], [1.792667429E12, 1214.0], [1.792667431E12, 1184.0], [1.792667433E12, 1224.0], [1.792667392E12, 859.0], [1.792667415E12, 1245.0], [1.792667417E12, 1181.0], [1.792667419E12, 1245.0], [1.792667421E12, 1193.0], [1.792667423E12, 1205.0], [1.792667403E12, 1192.0], [1.792667446E12, 1224.0], [1.792667405E12, 1218.0], [1.792667448E12, 1244.0], [1.792667407E12, 1188.0], [1.79266745E12, 1216.0], [1.792667409E12, 1201.0], [1.792667452E12, 274.0], [1.792667411E12, 1216.0], [1.792667413E12, 1202.0], [1.792667393E12, 1186.0], [1.792667436E12, 1229.0], [1.792667395E12, 1246.0], [1.792667438E12, 1217.0], [1.792667397E12, 1212.0], [1.79266744E12, 1238.0], [1.792667399E12, 1218.0], [1.792667442E12, 1231.0], [1.792667401E12, 1208.0], [1.792667444E12, 1223.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667452E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 284.0, "minX": 1.792667392E12, "maxY": 1247.0, "series": [{"data": [[1.792667426E12, 1204.0], [1.792667428E12, 1224.0], [1.79266743E12, 1226.0], [1.792667432E12, 1246.0], [1.792667434E12, 1220.0], [1.792667414E12, 1206.0], [1.792667416E12, 1227.0], [1.792667418E12, 1219.0], [1.79266742E12, 1244.0], [1.792667422E12, 1205.0], [1.792667424E12, 1247.0], [1.792667404E12, 1209.0], [1.792667447E12, 1225.0], [1.792667449E12, 1212.0], [1.792667406E12, 1185.0], [1.792667408E12, 1184.0], [1.792667451E12, 1215.0], [1.79266741E12, 1176.0], [1.792667412E12, 1198.0], [1.792667435E12, 1246.0], [1.792667437E12, 1213.0], [1.792667394E12, 1210.0], [1.792667396E12, 1232.0], [1.792667439E12, 1241.0], [1.792667441E12, 1221.0], [1.792667398E12, 1223.0], [1.7926674E12, 1220.0], [1.792667443E12, 1198.0], [1.792667445E12, 1195.0], [1.792667402E12, 1179.0], [1.792667425E12, 1212.0], [1.792667427E12, 1229.0], [1.792667429E12, 1214.0], [1.792667431E12, 1184.0], [1.792667433E12, 1224.0], [1.792667392E12, 849.0], [1.792667415E12, 1245.0], [1.792667417E12, 1181.0], [1.792667419E12, 1245.0], [1.792667421E12, 1193.0], [1.792667423E12, 1205.0], [1.792667403E12, 1191.0], [1.792667446E12, 1224.0], [1.792667405E12, 1218.0], [1.792667448E12, 1244.0], [1.792667407E12, 1188.0], [1.79266745E12, 1215.0], [1.792667409E12, 1201.0], [1.792667452E12, 284.0], [1.792667411E12, 1216.0], [1.792667413E12, 1202.0], [1.792667393E12, 1186.0], [1.792667436E12, 1229.0], [1.792667395E12, 1246.0], [1.792667438E12, 1219.0], [1.792667397E12, 1212.0], [1.79266744E12, 1238.0], [1.792667399E12, 1219.0], [1.792667442E12, 1231.0], [1.792667401E12, 1208.0], [1.792667444E12, 1223.0]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667452E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 284.0, "minX": 1.792667392E12, "maxY": 1247.0, "series": [{"data": [[1.792667426E12, 1204.0], [1.792667428E12, 1224.0], [1.79266743E12, 1226.0], [1.792667432E12, 1246.0], [1.792667434E12, 1220.0], [1.792667414E12, 1206.0], [1.792667416E12, 1227.0], [1.792667418E12, 1219.0], [1.79266742E12, 1244.0], [1.792667422E12, 1205.0], [1.792667424E12, 1247.0], [1.792667404E12, 1209.0], [1.792667447E12, 1225.0], [1.792667449E12, 1212.0], [1.792667406E12, 1185.0], [1.792667408E12, 1184.0], [1.792667451E12, 1215.0], [1.79266741E12, 1176.0], [1.792667412E12, 1198.0], [1.792667435E12, 1246.0], [1.792667437E12, 1213.0], [1.792667394E12, 1210.0], [1.792667396E12, 1232.0], [1.792667439E12, 1241.0], [1.792667441E12, 1221.0], [1.792667398E12, 1223.0], [1.7926674E12, 1220.0], [1.792667443E12, 1198.0], [1.792667445E12, 1195.0], [1.792667402E12, 1179.0], [1.792667425E12, 1212.0], [1.792667427E12, 1229.0], [1.792667429E12, 1214.0], [1.792667431E12, 1184.0], [1.792667433E12, 1224.0], [1.792667392E12, 849.0], [1.792667415E12, 1245.0], [1.792667417E12, 1181.0], [1.792667419E12, 1245.0], [1.792667421E12, 1193.0], [1.792667423E12, 1205.0], [1.792667403E12, 1191.0], [1.792667446E12, 1224.0], [1.792667405E12, 1218.0], [1.792667448E12, 1244.0], [1.792667407E12, 1188.0], [1.79266745E12, 1215.0], [1.792667409E12, 1201.0], [1.792667452E12, 284.0], [1.792667411E12, 1216.0], [1.792667413E12, 1202.0], [1.792667393E12, 1186.0], [1.792667436E12, 1229.0], [1.792667395E12, 1246.0], [1.792667438E12, 1219.0], [1.792667397E12, 1212.0], [1.79266744E12, 1238.0], [1.792667399E12, 1219.0], [1.792667442E12, 1231.0], [1.792667401E12, 1208.0], [1.792667444E12, 1223.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667452E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 284.0, "minX": 1.792667392E12, "maxY": 1247.0, "series": [{"data": [[1.792667426E12, 1204.0], [1.792667428E12, 1224.0], [1.79266743E12, 1226.0], [1.792667432E12, 1246.0], [1.792667434E12, 1220.0], [1.792667414E12, 1206.0], [1.792667416E12, 1227.0], [1.792667418E12, 1219.0], [1.79266742E12, 1244.0], [1.792667422E12, 1205.0], [1.792667424E12, 1247.0], [1.792667404E12, 1209.0], [1.792667447E12, 1225.0], [1.792667449E12, 1212.0], [1.792667406E12, 1185.0], [1.792667408E12, 1184.0], [1.792667451E12, 1215.0], [1.79266741E12, 1176.0], [1.792667412E12, 1198.0], [1.792667435E12, 1246.0], [1.792667437E12, 1213.0], [1.792667394E12, 1210.0], [1.792667396E12, 1232.0], [1.792667439E12, 1241.0], [1.792667441E12, 1221.0], [1.792667398E12, 1223.0], [1.7926674E12, 1220.0], [1.792667443E12, 1198.0], [1.792667445E12, 1195.0], [1.792667402E12, 1179.0], [1.792667425E12, 1212.0], [1.792667427E12, 1229.0], [1.792667429E12, 1214.0], [1.792667431E12, 1184.0], [1.792667433E12, 1224.0], [1.792667392E12, 849.0], [1.792667415E12, 1245.0], [1.792667417E12, 1181.0], [1.792667419E12, 1245.0], [1.792667421E12, 1193.0], [1.792667423E12, 1205.0], [1.792667403E12, 1191.0], [1.792667446E12, 1224.0], [1.792667405E12, 1218.0], [1.792667448E12, 1244.0], [1.792667407E12, 1188.0], [1.79266745E12, 1215.0], [1.792667409E12, 1201.0], [1.792667452E12, 284.0], [1.792667411E12, 1216.0], [1.792667413E12, 1202.0], [1.792667393E12, 1186.0], [1.792667436E12, 1229.0], [1.792667395E12, 1246.0], [1.792667438E12, 1219.0], [1.792667397E12, 1212.0], [1.79266744E12, 1238.0], [1.792667399E12, 1219.0], [1.792667442E12, 1231.0], [1.792667401E12, 1208.0], [1.792667444E12, 1223.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667452E12, "title": "Total Transactions Per Second"}},
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


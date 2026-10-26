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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 209.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 2.0], [1.8, 2.0], [1.9, 2.0], [2.0, 2.0], [2.1, 2.0], [2.2, 2.0], [2.3, 2.0], [2.4, 2.0], [2.5, 2.0], [2.6, 2.0], [2.7, 2.0], [2.8, 2.0], [2.9, 2.0], [3.0, 2.0], [3.1, 2.0], [3.2, 2.0], [3.3, 2.0], [3.4, 2.0], [3.5, 2.0], [3.6, 2.0], [3.7, 2.0], [3.8, 2.0], [3.9, 2.0], [4.0, 2.0], [4.1, 2.0], [4.2, 2.0], [4.3, 2.0], [4.4, 2.0], [4.5, 2.0], [4.6, 2.0], [4.7, 2.0], [4.8, 2.0], [4.9, 2.0], [5.0, 2.0], [5.1, 2.0], [5.2, 2.0], [5.3, 2.0], [5.4, 2.0], [5.5, 2.0], [5.6, 2.0], [5.7, 2.0], [5.8, 2.0], [5.9, 2.0], [6.0, 2.0], [6.1, 2.0], [6.2, 2.0], [6.3, 2.0], [6.4, 2.0], [6.5, 2.0], [6.6, 2.0], [6.7, 2.0], [6.8, 2.0], [6.9, 2.0], [7.0, 2.0], [7.1, 2.0], [7.2, 2.0], [7.3, 2.0], [7.4, 2.0], [7.5, 2.0], [7.6, 2.0], [7.7, 2.0], [7.8, 2.0], [7.9, 2.0], [8.0, 2.0], [8.1, 2.0], [8.2, 2.0], [8.3, 2.0], [8.4, 2.0], [8.5, 2.0], [8.6, 2.0], [8.7, 2.0], [8.8, 2.0], [8.9, 2.0], [9.0, 2.0], [9.1, 2.0], [9.2, 2.0], [9.3, 2.0], [9.4, 2.0], [9.5, 2.0], [9.6, 2.0], [9.7, 2.0], [9.8, 2.0], [9.9, 2.0], [10.0, 2.0], [10.1, 2.0], [10.2, 2.0], [10.3, 2.0], [10.4, 3.0], [10.5, 3.0], [10.6, 3.0], [10.7, 3.0], [10.8, 3.0], [10.9, 3.0], [11.0, 3.0], [11.1, 3.0], [11.2, 3.0], [11.3, 3.0], [11.4, 3.0], [11.5, 3.0], [11.6, 3.0], [11.7, 3.0], [11.8, 3.0], [11.9, 3.0], [12.0, 3.0], [12.1, 3.0], [12.2, 3.0], [12.3, 3.0], [12.4, 3.0], [12.5, 3.0], [12.6, 3.0], [12.7, 3.0], [12.8, 3.0], [12.9, 3.0], [13.0, 3.0], [13.1, 3.0], [13.2, 3.0], [13.3, 3.0], [13.4, 3.0], [13.5, 3.0], [13.6, 3.0], [13.7, 3.0], [13.8, 3.0], [13.9, 3.0], [14.0, 3.0], [14.1, 3.0], [14.2, 3.0], [14.3, 3.0], [14.4, 3.0], [14.5, 3.0], [14.6, 3.0], [14.7, 3.0], [14.8, 3.0], [14.9, 3.0], [15.0, 3.0], [15.1, 3.0], [15.2, 3.0], [15.3, 3.0], [15.4, 3.0], [15.5, 3.0], [15.6, 3.0], [15.7, 3.0], [15.8, 3.0], [15.9, 3.0], [16.0, 3.0], [16.1, 3.0], [16.2, 3.0], [16.3, 3.0], [16.4, 3.0], [16.5, 3.0], [16.6, 3.0], [16.7, 3.0], [16.8, 3.0], [16.9, 3.0], [17.0, 3.0], [17.1, 3.0], [17.2, 3.0], [17.3, 3.0], [17.4, 3.0], [17.5, 3.0], [17.6, 3.0], [17.7, 3.0], [17.8, 3.0], [17.9, 3.0], [18.0, 3.0], [18.1, 3.0], [18.2, 3.0], [18.3, 3.0], [18.4, 3.0], [18.5, 3.0], [18.6, 3.0], [18.7, 3.0], [18.8, 3.0], [18.9, 3.0], [19.0, 3.0], [19.1, 3.0], [19.2, 3.0], [19.3, 3.0], [19.4, 3.0], [19.5, 3.0], [19.6, 3.0], [19.7, 3.0], [19.8, 3.0], [19.9, 3.0], [20.0, 3.0], [20.1, 3.0], [20.2, 3.0], [20.3, 3.0], [20.4, 3.0], [20.5, 3.0], [20.6, 3.0], [20.7, 4.0], [20.8, 4.0], [20.9, 4.0], [21.0, 4.0], [21.1, 4.0], [21.2, 4.0], [21.3, 4.0], [21.4, 4.0], [21.5, 4.0], [21.6, 4.0], [21.7, 4.0], [21.8, 4.0], [21.9, 4.0], [22.0, 4.0], [22.1, 4.0], [22.2, 4.0], [22.3, 4.0], [22.4, 4.0], [22.5, 4.0], [22.6, 4.0], [22.7, 4.0], [22.8, 4.0], [22.9, 4.0], [23.0, 4.0], [23.1, 4.0], [23.2, 4.0], [23.3, 4.0], [23.4, 4.0], [23.5, 4.0], [23.6, 4.0], [23.7, 4.0], [23.8, 4.0], [23.9, 4.0], [24.0, 4.0], [24.1, 4.0], [24.2, 4.0], [24.3, 4.0], [24.4, 4.0], [24.5, 4.0], [24.6, 4.0], [24.7, 4.0], [24.8, 4.0], [24.9, 4.0], [25.0, 4.0], [25.1, 4.0], [25.2, 4.0], [25.3, 4.0], [25.4, 4.0], [25.5, 4.0], [25.6, 4.0], [25.7, 4.0], [25.8, 4.0], [25.9, 4.0], [26.0, 4.0], [26.1, 4.0], [26.2, 4.0], [26.3, 4.0], [26.4, 4.0], [26.5, 4.0], [26.6, 4.0], [26.7, 4.0], [26.8, 4.0], [26.9, 4.0], [27.0, 4.0], [27.1, 4.0], [27.2, 4.0], [27.3, 4.0], [27.4, 4.0], [27.5, 4.0], [27.6, 4.0], [27.7, 4.0], [27.8, 4.0], [27.9, 4.0], [28.0, 4.0], [28.1, 4.0], [28.2, 4.0], [28.3, 4.0], [28.4, 4.0], [28.5, 4.0], [28.6, 4.0], [28.7, 4.0], [28.8, 4.0], [28.9, 4.0], [29.0, 4.0], [29.1, 4.0], [29.2, 4.0], [29.3, 4.0], [29.4, 4.0], [29.5, 4.0], [29.6, 4.0], [29.7, 5.0], [29.8, 5.0], [29.9, 5.0], [30.0, 5.0], [30.1, 5.0], [30.2, 5.0], [30.3, 5.0], [30.4, 5.0], [30.5, 5.0], [30.6, 5.0], [30.7, 5.0], [30.8, 5.0], [30.9, 5.0], [31.0, 5.0], [31.1, 5.0], [31.2, 5.0], [31.3, 5.0], [31.4, 5.0], [31.5, 5.0], [31.6, 5.0], [31.7, 5.0], [31.8, 5.0], [31.9, 5.0], [32.0, 5.0], [32.1, 5.0], [32.2, 5.0], [32.3, 5.0], [32.4, 5.0], [32.5, 5.0], [32.6, 5.0], [32.7, 5.0], [32.8, 5.0], [32.9, 5.0], [33.0, 5.0], [33.1, 5.0], [33.2, 5.0], [33.3, 5.0], [33.4, 5.0], [33.5, 5.0], [33.6, 5.0], [33.7, 5.0], [33.8, 5.0], [33.9, 5.0], [34.0, 5.0], [34.1, 5.0], [34.2, 5.0], [34.3, 5.0], [34.4, 5.0], [34.5, 5.0], [34.6, 5.0], [34.7, 5.0], [34.8, 5.0], [34.9, 5.0], [35.0, 5.0], [35.1, 5.0], [35.2, 5.0], [35.3, 5.0], [35.4, 5.0], [35.5, 5.0], [35.6, 5.0], [35.7, 5.0], [35.8, 5.0], [35.9, 5.0], [36.0, 5.0], [36.1, 5.0], [36.2, 5.0], [36.3, 5.0], [36.4, 5.0], [36.5, 5.0], [36.6, 5.0], [36.7, 5.0], [36.8, 5.0], [36.9, 5.0], [37.0, 5.0], [37.1, 5.0], [37.2, 5.0], [37.3, 5.0], [37.4, 5.0], [37.5, 6.0], [37.6, 6.0], [37.7, 6.0], [37.8, 6.0], [37.9, 6.0], [38.0, 6.0], [38.1, 6.0], [38.2, 6.0], [38.3, 6.0], [38.4, 6.0], [38.5, 6.0], [38.6, 6.0], [38.7, 6.0], [38.8, 6.0], [38.9, 6.0], [39.0, 6.0], [39.1, 6.0], [39.2, 6.0], [39.3, 6.0], [39.4, 6.0], [39.5, 6.0], [39.6, 6.0], [39.7, 6.0], [39.8, 6.0], [39.9, 6.0], [40.0, 6.0], [40.1, 6.0], [40.2, 6.0], [40.3, 6.0], [40.4, 6.0], [40.5, 6.0], [40.6, 6.0], [40.7, 6.0], [40.8, 6.0], [40.9, 6.0], [41.0, 6.0], [41.1, 6.0], [41.2, 6.0], [41.3, 6.0], [41.4, 6.0], [41.5, 6.0], [41.6, 6.0], [41.7, 6.0], [41.8, 6.0], [41.9, 6.0], [42.0, 6.0], [42.1, 6.0], [42.2, 6.0], [42.3, 6.0], [42.4, 6.0], [42.5, 6.0], [42.6, 6.0], [42.7, 6.0], [42.8, 6.0], [42.9, 6.0], [43.0, 6.0], [43.1, 6.0], [43.2, 6.0], [43.3, 6.0], [43.4, 6.0], [43.5, 6.0], [43.6, 6.0], [43.7, 6.0], [43.8, 6.0], [43.9, 6.0], [44.0, 6.0], [44.1, 6.0], [44.2, 6.0], [44.3, 6.0], [44.4, 7.0], [44.5, 7.0], [44.6, 7.0], [44.7, 7.0], [44.8, 7.0], [44.9, 7.0], [45.0, 7.0], [45.1, 7.0], [45.2, 7.0], [45.3, 7.0], [45.4, 7.0], [45.5, 7.0], [45.6, 7.0], [45.7, 7.0], [45.8, 7.0], [45.9, 7.0], [46.0, 7.0], [46.1, 7.0], [46.2, 7.0], [46.3, 7.0], [46.4, 7.0], [46.5, 7.0], [46.6, 7.0], [46.7, 7.0], [46.8, 7.0], [46.9, 7.0], [47.0, 7.0], [47.1, 7.0], [47.2, 7.0], [47.3, 7.0], [47.4, 7.0], [47.5, 7.0], [47.6, 7.0], [47.7, 7.0], [47.8, 7.0], [47.9, 7.0], [48.0, 7.0], [48.1, 7.0], [48.2, 7.0], [48.3, 7.0], [48.4, 7.0], [48.5, 7.0], [48.6, 7.0], [48.7, 7.0], [48.8, 7.0], [48.9, 7.0], [49.0, 7.0], [49.1, 7.0], [49.2, 7.0], [49.3, 7.0], [49.4, 7.0], [49.5, 7.0], [49.6, 7.0], [49.7, 7.0], [49.8, 7.0], [49.9, 7.0], [50.0, 7.0], [50.1, 7.0], [50.2, 7.0], [50.3, 7.0], [50.4, 8.0], [50.5, 8.0], [50.6, 8.0], [50.7, 8.0], [50.8, 8.0], [50.9, 8.0], [51.0, 8.0], [51.1, 8.0], [51.2, 8.0], [51.3, 8.0], [51.4, 8.0], [51.5, 8.0], [51.6, 8.0], [51.7, 8.0], [51.8, 8.0], [51.9, 8.0], [52.0, 8.0], [52.1, 8.0], [52.2, 8.0], [52.3, 8.0], [52.4, 8.0], [52.5, 8.0], [52.6, 8.0], [52.7, 8.0], [52.8, 8.0], [52.9, 8.0], [53.0, 8.0], [53.1, 8.0], [53.2, 8.0], [53.3, 8.0], [53.4, 8.0], [53.5, 8.0], [53.6, 8.0], [53.7, 8.0], [53.8, 8.0], [53.9, 8.0], [54.0, 8.0], [54.1, 8.0], [54.2, 8.0], [54.3, 8.0], [54.4, 8.0], [54.5, 8.0], [54.6, 8.0], [54.7, 8.0], [54.8, 8.0], [54.9, 8.0], [55.0, 8.0], [55.1, 8.0], [55.2, 8.0], [55.3, 8.0], [55.4, 8.0], [55.5, 8.0], [55.6, 9.0], [55.7, 9.0], [55.8, 9.0], [55.9, 9.0], [56.0, 9.0], [56.1, 9.0], [56.2, 9.0], [56.3, 9.0], [56.4, 9.0], [56.5, 9.0], [56.6, 9.0], [56.7, 9.0], [56.8, 9.0], [56.9, 9.0], [57.0, 9.0], [57.1, 9.0], [57.2, 9.0], [57.3, 9.0], [57.4, 9.0], [57.5, 9.0], [57.6, 9.0], [57.7, 9.0], [57.8, 9.0], [57.9, 9.0], [58.0, 9.0], [58.1, 9.0], [58.2, 9.0], [58.3, 9.0], [58.4, 9.0], [58.5, 9.0], [58.6, 9.0], [58.7, 9.0], [58.8, 9.0], [58.9, 9.0], [59.0, 9.0], [59.1, 9.0], [59.2, 9.0], [59.3, 9.0], [59.4, 9.0], [59.5, 9.0], [59.6, 9.0], [59.7, 9.0], [59.8, 9.0], [59.9, 9.0], [60.0, 9.0], [60.1, 10.0], [60.2, 10.0], [60.3, 10.0], [60.4, 10.0], [60.5, 10.0], [60.6, 10.0], [60.7, 10.0], [60.8, 10.0], [60.9, 10.0], [61.0, 10.0], [61.1, 10.0], [61.2, 10.0], [61.3, 10.0], [61.4, 10.0], [61.5, 10.0], [61.6, 10.0], [61.7, 10.0], [61.8, 10.0], [61.9, 10.0], [62.0, 10.0], [62.1, 10.0], [62.2, 10.0], [62.3, 10.0], [62.4, 10.0], [62.5, 10.0], [62.6, 10.0], [62.7, 10.0], [62.8, 10.0], [62.9, 10.0], [63.0, 10.0], [63.1, 10.0], [63.2, 10.0], [63.3, 10.0], [63.4, 10.0], [63.5, 10.0], [63.6, 10.0], [63.7, 10.0], [63.8, 10.0], [63.9, 11.0], [64.0, 11.0], [64.1, 11.0], [64.2, 11.0], [64.3, 11.0], [64.4, 11.0], [64.5, 11.0], [64.6, 11.0], [64.7, 11.0], [64.8, 11.0], [64.9, 11.0], [65.0, 11.0], [65.1, 11.0], [65.2, 11.0], [65.3, 11.0], [65.4, 11.0], [65.5, 11.0], [65.6, 11.0], [65.7, 11.0], [65.8, 11.0], [65.9, 11.0], [66.0, 11.0], [66.1, 11.0], [66.2, 11.0], [66.3, 11.0], [66.4, 11.0], [66.5, 11.0], [66.6, 11.0], [66.7, 11.0], [66.8, 11.0], [66.9, 11.0], [67.0, 11.0], [67.1, 11.0], [67.2, 11.0], [67.3, 12.0], [67.4, 12.0], [67.5, 12.0], [67.6, 12.0], [67.7, 12.0], [67.8, 12.0], [67.9, 12.0], [68.0, 12.0], [68.1, 12.0], [68.2, 12.0], [68.3, 12.0], [68.4, 12.0], [68.5, 12.0], [68.6, 12.0], [68.7, 12.0], [68.8, 12.0], [68.9, 12.0], [69.0, 12.0], [69.1, 12.0], [69.2, 12.0], [69.3, 12.0], [69.4, 12.0], [69.5, 12.0], [69.6, 12.0], [69.7, 12.0], [69.8, 12.0], [69.9, 12.0], [70.0, 12.0], [70.1, 12.0], [70.2, 13.0], [70.3, 13.0], [70.4, 13.0], [70.5, 13.0], [70.6, 13.0], [70.7, 13.0], [70.8, 13.0], [70.9, 13.0], [71.0, 13.0], [71.1, 13.0], [71.2, 13.0], [71.3, 13.0], [71.4, 13.0], [71.5, 13.0], [71.6, 13.0], [71.7, 13.0], [71.8, 13.0], [71.9, 13.0], [72.0, 13.0], [72.1, 13.0], [72.2, 13.0], [72.3, 13.0], [72.4, 13.0], [72.5, 13.0], [72.6, 14.0], [72.7, 14.0], [72.8, 14.0], [72.9, 14.0], [73.0, 14.0], [73.1, 14.0], [73.2, 14.0], [73.3, 14.0], [73.4, 14.0], [73.5, 14.0], [73.6, 14.0], [73.7, 14.0], [73.8, 14.0], [73.9, 14.0], [74.0, 14.0], [74.1, 14.0], [74.2, 14.0], [74.3, 14.0], [74.4, 14.0], [74.5, 14.0], [74.6, 14.0], [74.7, 14.0], [74.8, 15.0], [74.9, 15.0], [75.0, 15.0], [75.1, 15.0], [75.2, 15.0], [75.3, 15.0], [75.4, 15.0], [75.5, 15.0], [75.6, 15.0], [75.7, 15.0], [75.8, 15.0], [75.9, 15.0], [76.0, 15.0], [76.1, 15.0], [76.2, 15.0], [76.3, 15.0], [76.4, 15.0], [76.5, 15.0], [76.6, 15.0], [76.7, 15.0], [76.8, 16.0], [76.9, 16.0], [77.0, 16.0], [77.1, 16.0], [77.2, 16.0], [77.3, 16.0], [77.4, 16.0], [77.5, 16.0], [77.6, 16.0], [77.7, 16.0], [77.8, 16.0], [77.9, 16.0], [78.0, 16.0], [78.1, 16.0], [78.2, 16.0], [78.3, 16.0], [78.4, 16.0], [78.5, 17.0], [78.6, 17.0], [78.7, 17.0], [78.8, 17.0], [78.9, 17.0], [79.0, 17.0], [79.1, 17.0], [79.2, 17.0], [79.3, 17.0], [79.4, 17.0], [79.5, 17.0], [79.6, 17.0], [79.7, 17.0], [79.8, 17.0], [79.9, 17.0], [80.0, 17.0], [80.1, 18.0], [80.2, 18.0], [80.3, 18.0], [80.4, 18.0], [80.5, 18.0], [80.6, 18.0], [80.7, 18.0], [80.8, 18.0], [80.9, 18.0], [81.0, 18.0], [81.1, 18.0], [81.2, 18.0], [81.3, 18.0], [81.4, 18.0], [81.5, 19.0], [81.6, 19.0], [81.7, 19.0], [81.8, 19.0], [81.9, 19.0], [82.0, 19.0], [82.1, 19.0], [82.2, 19.0], [82.3, 19.0], [82.4, 19.0], [82.5, 19.0], [82.6, 19.0], [82.7, 19.0], [82.8, 20.0], [82.9, 20.0], [83.0, 20.0], [83.1, 20.0], [83.2, 20.0], [83.3, 20.0], [83.4, 20.0], [83.5, 20.0], [83.6, 20.0], [83.7, 20.0], [83.8, 20.0], [83.9, 20.0], [84.0, 21.0], [84.1, 21.0], [84.2, 21.0], [84.3, 21.0], [84.4, 21.0], [84.5, 21.0], [84.6, 21.0], [84.7, 21.0], [84.8, 21.0], [84.9, 21.0], [85.0, 21.0], [85.1, 22.0], [85.2, 22.0], [85.3, 22.0], [85.4, 22.0], [85.5, 22.0], [85.6, 22.0], [85.7, 22.0], [85.8, 22.0], [85.9, 22.0], [86.0, 22.0], [86.1, 23.0], [86.2, 23.0], [86.3, 23.0], [86.4, 23.0], [86.5, 23.0], [86.6, 23.0], [86.7, 23.0], [86.8, 23.0], [86.9, 23.0], [87.0, 24.0], [87.1, 24.0], [87.2, 24.0], [87.3, 24.0], [87.4, 24.0], [87.5, 24.0], [87.6, 24.0], [87.7, 24.0], [87.8, 24.0], [87.9, 25.0], [88.0, 25.0], [88.1, 25.0], [88.2, 25.0], [88.3, 25.0], [88.4, 25.0], [88.5, 25.0], [88.6, 25.0], [88.7, 26.0], [88.8, 26.0], [88.9, 26.0], [89.0, 26.0], [89.1, 26.0], [89.2, 26.0], [89.3, 26.0], [89.4, 27.0], [89.5, 27.0], [89.6, 27.0], [89.7, 27.0], [89.8, 27.0], [89.9, 27.0], [90.0, 27.0], [90.1, 28.0], [90.2, 28.0], [90.3, 28.0], [90.4, 28.0], [90.5, 28.0], [90.6, 28.0], [90.7, 29.0], [90.8, 29.0], [90.9, 29.0], [91.0, 29.0], [91.1, 29.0], [91.2, 29.0], [91.3, 29.0], [91.4, 30.0], [91.5, 30.0], [91.6, 30.0], [91.7, 30.0], [91.8, 30.0], [91.9, 31.0], [92.0, 31.0], [92.1, 31.0], [92.2, 31.0], [92.3, 31.0], [92.4, 32.0], [92.5, 32.0], [92.6, 32.0], [92.7, 32.0], [92.8, 32.0], [92.9, 33.0], [93.0, 33.0], [93.1, 33.0], [93.2, 33.0], [93.3, 33.0], [93.4, 34.0], [93.5, 34.0], [93.6, 34.0], [93.7, 34.0], [93.8, 35.0], [93.9, 35.0], [94.0, 35.0], [94.1, 35.0], [94.2, 35.0], [94.3, 36.0], [94.4, 36.0], [94.5, 36.0], [94.6, 37.0], [94.7, 37.0], [94.8, 37.0], [94.9, 37.0], [95.0, 38.0], [95.1, 38.0], [95.2, 38.0], [95.3, 39.0], [95.4, 39.0], [95.5, 39.0], [95.6, 40.0], [95.7, 40.0], [95.8, 40.0], [95.9, 41.0], [96.0, 41.0], [96.1, 41.0], [96.2, 42.0], [96.3, 42.0], [96.4, 43.0], [96.5, 43.0], [96.6, 43.0], [96.7, 44.0], [96.8, 44.0], [96.9, 45.0], [97.0, 45.0], [97.1, 46.0], [97.2, 46.0], [97.3, 47.0], [97.4, 48.0], [97.5, 48.0], [97.6, 49.0], [97.7, 49.0], [97.8, 50.0], [97.9, 51.0], [98.0, 51.0], [98.1, 52.0], [98.2, 53.0], [98.3, 54.0], [98.4, 55.0], [98.5, 55.0], [98.6, 57.0], [98.7, 58.0], [98.8, 59.0], [98.9, 60.0], [99.0, 61.0], [99.1, 63.0], [99.2, 65.0], [99.3, 67.0], [99.4, 69.0], [99.5, 72.0], [99.6, 76.0], [99.7, 80.0], [99.8, 88.0], [99.9, 98.0]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 249065.0, "series": [{"data": [[0.0, 249065.0], [100.0, 230.0], [200.0, 4.0]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 249299.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 249299.0, "series": [{"data": [[0.0, 249299.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 46.542266750156564, "minX": 1.792666577E12, "maxY": 50.0, "series": [{"data": [[1.792666615E12, 50.0], [1.792666617E12, 50.0], [1.792666619E12, 50.0], [1.792666621E12, 50.0], [1.792666578E12, 50.0], [1.79266658E12, 50.0], [1.792666623E12, 50.0], [1.792666603E12, 50.0], [1.792666605E12, 50.0], [1.792666607E12, 50.0], [1.792666609E12, 50.0], [1.792666611E12, 50.0], [1.792666613E12, 50.0], [1.792666593E12, 50.0], [1.792666636E12, 50.0], [1.792666595E12, 50.0], [1.792666597E12, 50.0], [1.792666599E12, 50.0], [1.792666601E12, 50.0], [1.792666583E12, 50.0], [1.792666626E12, 50.0], [1.792666585E12, 50.0], [1.792666628E12, 50.0], [1.792666587E12, 50.0], [1.79266663E12, 50.0], [1.792666589E12, 50.0], [1.792666632E12, 50.0], [1.792666591E12, 50.0], [1.792666634E12, 50.0], [1.792666614E12, 50.0], [1.792666616E12, 50.0], [1.792666618E12, 50.0], [1.792666577E12, 50.0], [1.79266662E12, 50.0], [1.792666579E12, 50.0], [1.792666622E12, 50.0], [1.792666581E12, 50.0], [1.792666624E12, 50.0], [1.792666604E12, 50.0], [1.792666606E12, 50.0], [1.792666608E12, 50.0], [1.79266661E12, 50.0], [1.792666612E12, 50.0], [1.792666635E12, 50.0], [1.792666637E12, 46.542266750156564], [1.792666594E12, 50.0], [1.792666596E12, 50.0], [1.792666598E12, 50.0], [1.7926666E12, 50.0], [1.792666602E12, 50.0], [1.792666625E12, 50.0], [1.792666582E12, 50.0], [1.792666584E12, 50.0], [1.792666627E12, 50.0], [1.792666629E12, 50.0], [1.792666586E12, 50.0], [1.792666588E12, 50.0], [1.792666631E12, 50.0], [1.792666633E12, 50.0], [1.79266659E12, 50.0], [1.792666592E12, 50.0]], "isOverall": false, "label": "线程组", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792666637E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 17.0, "maxY": 73.0, "series": [{"data": [[33.0, 73.0], [32.0, 10.75], [35.0, 7.161290322580646], [34.0, 18.266666666666666], [37.0, 13.6], [36.0, 7.870967741935485], [39.0, 17.2], [38.0, 20.8], [41.0, 2.0], [40.0, 6.0], [43.0, 11.624999999999996], [42.0, 3.0], [45.0, 13.5], [44.0, 9.0], [47.0, 10.181818181818182], [46.0, 10.233333333333334], [49.0, 10.723404255319148], [48.0, 10.125], [50.0, 11.88936742934041], [17.0, 15.5], [19.0, 9.833333333333332], [20.0, 4.6], [21.0, 8.615384615384617], [23.0, 5.363636363636362], [24.0, 7.142857142857143], [25.0, 5.380952380952381], [26.0, 5.285714285714286], [27.0, 5.0], [28.0, 7.0], [29.0, 33.5], [30.0, 12.111111111111109], [31.0, 10.61111111111111]], "isOverall": false, "label": "Products", "isController": false}, {"data": [[49.97784989109465, 11.88575967011491]], "isOverall": false, "label": "Products-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 415401.0, "minX": 1.792666577E12, "maxY": 2021666.0, "series": [{"data": [[1.792666615E12, 1989033.0], [1.792666617E12, 1978920.0], [1.792666619E12, 1988644.0], [1.792666621E12, 1992786.0], [1.792666578E12, 1973171.0], [1.79266658E12, 1986496.0], [1.792666623E12, 1982748.0], [1.792666603E12, 1991427.0], [1.792666605E12, 1978542.0], [1.792666607E12, 1987617.0], [1.792666609E12, 1958629.0], [1.792666611E12, 1993279.0], [1.792666613E12, 1980775.0], [1.792666593E12, 1727608.0], [1.792666636E12, 2002781.0], [1.792666595E12, 1982751.0], [1.792666597E12, 1990193.0], [1.792666599E12, 1996119.0], [1.792666601E12, 2006023.0], [1.792666583E12, 1978617.0], [1.792666626E12, 1979024.0], [1.792666585E12, 1986387.0], [1.792666628E12, 1810973.0], [1.792666587E12, 1957285.0], [1.79266663E12, 1994165.0], [1.792666589E12, 1937930.0], [1.792666632E12, 1997129.0], [1.792666591E12, 1936359.0], [1.792666634E12, 1788539.0], [1.792666614E12, 1975407.0], [1.792666616E12, 1979083.0], [1.792666618E12, 1992578.0], [1.792666577E12, 1109032.0], [1.79266662E12, 1976731.0], [1.792666579E12, 1929599.0], [1.792666622E12, 1986030.0], [1.792666581E12, 1933200.0], [1.792666624E12, 1973523.0], [1.792666604E12, 1990531.0], [1.792666606E12, 1993167.0], [1.792666608E12, 1991486.0], [1.79266661E12, 1972224.0], [1.792666612E12, 2003010.0], [1.792666635E12, 2021666.0], [1.792666637E12, 755830.0], [1.792666594E12, 1928076.0], [1.792666596E12, 1981299.0], [1.792666598E12, 1985885.0], [1.7926666E12, 2002823.0], [1.792666602E12, 1996265.0], [1.792666625E12, 1982323.0], [1.792666582E12, 1960274.0], [1.792666584E12, 1969279.0], [1.792666627E12, 1977352.0], [1.792666629E12, 1990090.0], [1.792666586E12, 1967754.0], [1.792666588E12, 1942450.0], [1.792666631E12, 1978998.0], [1.792666633E12, 1950960.0], [1.79266659E12, 1961068.0], [1.792666592E12, 1970382.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.792666615E12, 1093056.0], [1.792666617E12, 1087072.0], [1.792666619E12, 1093836.0], [1.792666621E12, 1095400.0], [1.792666578E12, 1084980.0], [1.79266658E12, 1092013.0], [1.792666623E12, 1089662.0], [1.792666603E12, 1093832.0], [1.792666605E12, 1088109.0], [1.792666607E12, 1092539.0], [1.792666609E12, 1076400.0], [1.792666611E12, 1095909.0], [1.792666613E12, 1089150.0], [1.792666593E12, 949981.0], [1.792666636E12, 1101374.0], [1.792666595E12, 1089667.0], [1.792666597E12, 1094345.0], [1.792666599E12, 1097480.0], [1.792666601E12, 1102690.0], [1.792666583E12, 1087861.0], [1.792666626E12, 1087855.0], [1.792666585E12, 1090969.0], [1.792666628E12, 995243.0], [1.792666587E12, 1075898.0], [1.79266663E12, 1096189.0], [1.792666589E12, 1065475.0], [1.792666632E12, 1096950.0], [1.792666591E12, 1064442.0], [1.792666634E12, 983273.0], [1.792666614E12, 1086301.0], [1.792666616E12, 1087071.0], [1.792666618E12, 1095147.0], [1.792666577E12, 608180.0], [1.79266662E12, 1086545.0], [1.792666579E12, 1060795.0], [1.792666622E12, 1091230.0], [1.792666581E12, 1062878.0], [1.792666624E12, 1084983.0], [1.792666604E12, 1094110.0], [1.792666606E12, 1095651.0], [1.792666608E12, 1094351.0], [1.79266661E12, 1084197.0], [1.792666612E12, 1101119.0], [1.792666635E12, 1111537.0], [1.792666637E12, 415401.0], [1.792666594E12, 1059503.0], [1.792666596E12, 1088887.0], [1.792666598E12, 1091746.0], [1.7926666E12, 1101374.0], [1.792666602E12, 1096440.0], [1.792666625E12, 1089928.0], [1.792666582E12, 1077705.0], [1.792666584E12, 1082135.0], [1.792666627E12, 1087327.0], [1.792666629E12, 1094356.0], [1.792666586E12, 1081092.0], [1.792666588E12, 1068080.0], [1.792666631E12, 1087074.0], [1.792666633E12, 1071994.0], [1.79266659E12, 1077966.0], [1.792666592E12, 1082650.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792666637E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 11.254852849092053, "minX": 1.792666577E12, "maxY": 13.510131434830216, "series": [{"data": [[1.792666615E12, 11.802950975725876], [1.792666617E12, 11.804498683895691], [1.792666619E12, 11.76171224732461], [1.792666621E12, 11.700071241985253], [1.792666578E12, 11.564612802685206], [1.79266658E12, 11.627441638875677], [1.792666623E12, 11.859632370494172], [1.792666603E12, 11.815933412604057], [1.792666605E12, 11.827874731054228], [1.792666607E12, 11.862857142857164], [1.792666609E12, 12.096665055582383], [1.792666611E12, 11.777830524566813], [1.792666613E12, 11.80606639598758], [1.792666593E12, 13.510131434830216], [1.792666636E12, 11.79286726499763], [1.792666595E12, 11.930532346622114], [1.792666597E12, 11.801758973140034], [1.792666599E12, 11.762265939796166], [1.792666601E12, 11.851380042462809], [1.792666583E12, 11.729555236728824], [1.792666626E12, 11.887374461979904], [1.792666585E12, 11.741535526943249], [1.792666628E12, 13.158651332984816], [1.792666587E12, 11.823984526112174], [1.79266663E12, 11.734931181775032], [1.792666589E12, 12.077148437499996], [1.792666632E12, 11.741996680104354], [1.792666591E12, 12.108748778103639], [1.792666634E12, 13.166137566137579], [1.792666614E12, 11.938697318007673], [1.792666616E12, 11.932759033261544], [1.792666618E12, 11.804988123515443], [1.792666577E12, 11.455517536355877], [1.79266662E12, 11.98252334211159], [1.792666579E12, 11.745218244237364], [1.792666622E12, 11.802860548271736], [1.792666581E12, 11.846793930494357], [1.792666624E12, 11.9376648285783], [1.792666604E12, 11.74988112220638], [1.792666606E12, 11.779439696106373], [1.792666608E12, 11.71523651057763], [1.79266661E12, 11.795105566218847], [1.792666612E12, 11.714150720529192], [1.792666635E12, 11.550901006318748], [1.792666637E12, 11.254852849092053], [1.792666594E12, 12.288976184630489], [1.792666596E12, 11.805542283803158], [1.792666598E12, 11.796759590183447], [1.7926666E12, 11.631081719414285], [1.792666602E12, 11.676631079478039], [1.792666625E12, 11.779952267303072], [1.792666582E12, 11.845281197200048], [1.792666584E12, 11.841826923076944], [1.792666627E12, 11.725119617224925], [1.792666629E12, 11.69717138103161], [1.792666586E12, 11.807988450433085], [1.792666588E12, 12.100097418412094], [1.792666631E12, 12.000478583393173], [1.792666633E12, 12.007765105556883], [1.79266659E12, 11.965733590733578], [1.792666592E12, 11.835415665545387]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792666637E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 11.251721978710101, "minX": 1.792666577E12, "maxY": 13.508762322015363, "series": [{"data": [[1.792666615E12, 11.799857210851966], [1.792666617E12, 11.802584350323052], [1.792666619E12, 11.759809750297276], [1.792666621E12, 11.699596295416729], [1.792666578E12, 11.557420282905797], [1.79266658E12, 11.623868508813729], [1.792666623E12, 11.858200047744093], [1.792666603E12, 11.814744351961947], [1.792666605E12, 11.826201290939512], [1.792666607E12, 11.859761904761923], [1.792666609E12, 12.095215079748689], [1.792666611E12, 11.777118442914784], [1.792666613E12, 11.803916885598273], [1.792666593E12, 13.508762322015363], [1.792666636E12, 11.790033065658955], [1.792666595E12, 11.929338744330416], [1.792666597E12, 11.799857380556224], [1.792666599E12, 11.76060677885757], [1.792666601E12, 11.850672328379314], [1.792666583E12, 11.725729316116702], [1.792666626E12, 11.885939741750377], [1.792666585E12, 11.738912732474958], [1.792666628E12, 13.15734448510192], [1.792666587E12, 11.82325918762091], [1.79266663E12, 11.733981964879007], [1.792666589E12, 12.074951171875016], [1.792666632E12, 11.741048138487086], [1.792666591E12, 12.106549364613874], [1.792666634E12, 13.165079365079364], [1.792666614E12, 11.937260536398446], [1.792666616E12, 11.932519741564967], [1.792666618E12, 11.803800475059381], [1.792666577E12, 11.442686056458495], [1.79266662E12, 11.980368685659556], [1.792666579E12, 11.740313879352593], [1.792666622E12, 11.802145411203812], [1.792666581E12, 11.84434654919236], [1.792666624E12, 11.936945576600335], [1.792666604E12, 11.748692344270097], [1.792666606E12, 11.778015194681853], [1.792666608E12, 11.713572617066797], [1.79266661E12, 11.793905950095958], [1.792666612E12, 11.713205764233404], [1.792666635E12, 11.549730868242458], [1.792666637E12, 11.251721978710101], [1.792666594E12, 12.28455683771177], [1.792666596E12, 11.805064500716682], [1.792666598E12, 11.79556826304502], [1.7926666E12, 11.629900803023173], [1.792666602E12, 11.676393831553979], [1.792666625E12, 11.778520286396216], [1.792666582E12, 11.841660632392003], [1.792666584E12, 11.839182692307686], [1.792666627E12, 11.72440191387561], [1.792666629E12, 11.6964582838127], [1.792666586E12, 11.807507218479284], [1.792666588E12, 12.096687773989308], [1.792666631E12, 11.999521416606868], [1.792666633E12, 12.006794467362283], [1.79266659E12, 11.965009652509636], [1.792666592E12, 11.834214320038496]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792666637E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.792666577E12, "maxY": 0.05389221556886223, "series": [{"data": [[1.792666615E12, 0.0019038553069966725], [1.792666617E12, 9.57166786312515E-4], [1.792666619E12, 0.0026159334126040455], [1.792666621E12, 0.0016623129897886538], [1.792666578E12, 0.039319108127547214], [1.79266658E12, 0.014768937589328226], [1.792666623E12, 0.00429696825017907], [1.792666603E12, 0.0030915576694411384], [1.792666605E12, 0.00191250298828592], [1.792666607E12, 0.0014285714285714305], [1.792666609E12, 0.001933301111648136], [1.792666611E12, 0.0033230477094706905], [1.792666613E12, 0.0016718414139001664], [1.792666593E12, 0.0019167579408543374], [1.792666636E12, 0.002834199338686821], [1.792666595E12, 0.0014323227500596836], [1.792666597E12, 0.0023769907297361546], [1.792666599E12, 0.0023702299123014975], [1.792666601E12, 0.0018872375560273654], [1.792666583E12, 0.010282161645145874], [1.792666626E12, 0.002391200382592068], [1.792666585E12, 0.012398664759179796], [1.792666628E12, 0.0013068478829064303], [1.792666587E12, 0.004835589941972921], [1.79266663E12, 9.492168960607493E-4], [1.792666589E12, 0.004882812500000019], [1.792666632E12, 0.0014228124258951877], [1.792666591E12, 0.002688172043010758], [1.792666634E12, 0.002910052910052912], [1.792666614E12, 0.001197318007662839], [1.792666616E12, 0.0023929169657812915], [1.792666618E12, 0.0016627078384798101], [1.792666577E12, 0.05389221556886223], [1.79266662E12, 0.001197031362221691], [1.792666579E12, 0.01741049534085338], [1.792666622E12, 0.004052443384982135], [1.792666581E12, 0.03646598139990208], [1.792666624E12, 0.0019180052745145055], [1.792666604E12, 0.0019020446980504058], [1.792666606E12, 7.122507122507151E-4], [1.792666608E12, 0.002852388875683394], [1.79266661E12, 0.002639155470249523], [1.792666612E12, 0.0018899125915426392], [1.792666635E12, 0.0025743037678446056], [1.792666637E12, 0.0], [1.792666594E12, 0.00270071200589247], [1.792666596E12, 0.0014333492594362169], [1.792666598E12, 0.0023826542768644278], [1.7926666E12, 7.085498346717082E-4], [1.792666602E12, 0.0021352313167259792], [1.792666625E12, 0.002386634844868746], [1.792666582E12, 0.015206372194062264], [1.792666584E12, 0.011057692307692326], [1.792666627E12, 0.002153110047846896], [1.792666629E12, 0.001663893510815311], [1.792666586E12, 0.007218479307025995], [1.792666588E12, 0.005358012664393584], [1.792666631E12, 0.003350083752093804], [1.792666633E12, 0.0019412763892259174], [1.79266659E12, 0.0024131274131274135], [1.792666592E12, 0.0033637674195098497]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792666637E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.792666577E12, "maxY": 209.0, "series": [{"data": [[1.792666615E12, 148.0], [1.792666617E12, 127.0], [1.792666619E12, 96.0], [1.792666621E12, 106.0], [1.792666578E12, 78.0], [1.79266658E12, 93.0], [1.792666623E12, 138.0], [1.792666603E12, 120.0], [1.792666605E12, 118.0], [1.792666607E12, 93.0], [1.792666609E12, 129.0], [1.792666611E12, 116.0], [1.792666613E12, 128.0], [1.792666593E12, 203.0], [1.792666636E12, 108.0], [1.792666595E12, 125.0], [1.792666597E12, 149.0], [1.792666599E12, 129.0], [1.792666601E12, 95.0], [1.792666583E12, 83.0], [1.792666626E12, 166.0], [1.792666585E12, 105.0], [1.792666628E12, 156.0], [1.792666587E12, 170.0], [1.79266663E12, 142.0], [1.792666589E12, 151.0], [1.792666632E12, 124.0], [1.792666591E12, 158.0], [1.792666634E12, 99.0], [1.792666614E12, 123.0], [1.792666616E12, 141.0], [1.792666618E12, 121.0], [1.792666577E12, 59.0], [1.79266662E12, 127.0], [1.792666579E12, 83.0], [1.792666622E12, 111.0], [1.792666581E12, 155.0], [1.792666624E12, 130.0], [1.792666604E12, 123.0], [1.792666606E12, 98.0], [1.792666608E12, 112.0], [1.79266661E12, 95.0], [1.792666612E12, 115.0], [1.792666635E12, 148.0], [1.792666637E12, 155.0], [1.792666594E12, 209.0], [1.792666596E12, 100.0], [1.792666598E12, 113.0], [1.7926666E12, 102.0], [1.792666602E12, 112.0], [1.792666625E12, 104.0], [1.792666582E12, 110.0], [1.792666584E12, 72.0], [1.792666627E12, 133.0], [1.792666629E12, 103.0], [1.792666586E12, 102.0], [1.792666588E12, 131.0], [1.792666631E12, 93.0], [1.792666633E12, 140.0], [1.79266659E12, 132.0], [1.792666592E12, 95.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.792666615E12, 1.0], [1.792666617E12, 1.0], [1.792666619E12, 1.0], [1.792666621E12, 1.0], [1.792666578E12, 1.0], [1.79266658E12, 1.0], [1.792666623E12, 1.0], [1.792666603E12, 1.0], [1.792666605E12, 1.0], [1.792666607E12, 1.0], [1.792666609E12, 1.0], [1.792666611E12, 1.0], [1.792666613E12, 1.0], [1.792666593E12, 1.0], [1.792666636E12, 1.0], [1.792666595E12, 1.0], [1.792666597E12, 1.0], [1.792666599E12, 1.0], [1.792666601E12, 1.0], [1.792666583E12, 1.0], [1.792666626E12, 1.0], [1.792666585E12, 1.0], [1.792666628E12, 1.0], [1.792666587E12, 1.0], [1.79266663E12, 1.0], [1.792666589E12, 1.0], [1.792666632E12, 1.0], [1.792666591E12, 1.0], [1.792666634E12, 1.0], [1.792666614E12, 1.0], [1.792666616E12, 1.0], [1.792666618E12, 1.0], [1.792666577E12, 1.0], [1.79266662E12, 1.0], [1.792666579E12, 1.0], [1.792666622E12, 1.0], [1.792666581E12, 1.0], [1.792666624E12, 1.0], [1.792666604E12, 1.0], [1.792666606E12, 1.0], [1.792666608E12, 1.0], [1.79266661E12, 1.0], [1.792666612E12, 1.0], [1.792666635E12, 1.0], [1.792666637E12, 1.0], [1.792666594E12, 1.0], [1.792666596E12, 1.0], [1.792666598E12, 1.0], [1.7926666E12, 1.0], [1.792666602E12, 1.0], [1.792666625E12, 1.0], [1.792666582E12, 1.0], [1.792666584E12, 1.0], [1.792666627E12, 1.0], [1.792666629E12, 1.0], [1.792666586E12, 1.0], [1.792666588E12, 1.0], [1.792666631E12, 1.0], [1.792666633E12, 1.0], [1.79266659E12, 1.0], [1.792666592E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.792666615E12, 30.0], [1.792666617E12, 26.0], [1.792666619E12, 27.0], [1.792666621E12, 25.0], [1.792666578E12, 25.0], [1.79266658E12, 24.0], [1.792666623E12, 29.0], [1.792666603E12, 28.0], [1.792666605E12, 27.0], [1.792666607E12, 25.0], [1.792666609E12, 27.0], [1.792666611E12, 28.0], [1.792666613E12, 29.0], [1.792666593E12, 32.0], [1.792666636E12, 29.0], [1.792666595E12, 27.0], [1.792666597E12, 29.0], [1.792666599E12, 28.0], [1.792666601E12, 26.0], [1.792666583E12, 24.0], [1.792666626E12, 27.0], [1.792666585E12, 22.0], [1.792666628E12, 31.0], [1.792666587E12, 30.0], [1.79266663E12, 28.0], [1.792666589E12, 29.0], [1.792666632E12, 29.0], [1.792666591E12, 31.0], [1.792666634E12, 29.0], [1.792666614E12, 31.0], [1.792666616E12, 30.0], [1.792666618E12, 28.0], [1.792666577E12, 22.0], [1.79266662E12, 28.0], [1.792666579E12, 27.0], [1.792666622E12, 29.0], [1.792666581E12, 29.0], [1.792666624E12, 26.0], [1.792666604E12, 28.0], [1.792666606E12, 28.0], [1.792666608E12, 27.0], [1.79266661E12, 25.0], [1.792666612E12, 28.0], [1.792666635E12, 25.0], [1.792666637E12, 29.0], [1.792666594E12, 27.0], [1.792666596E12, 29.0], [1.792666598E12, 30.0], [1.7926666E12, 26.0], [1.792666602E12, 25.0], [1.792666625E12, 28.0], [1.792666582E12, 25.0], [1.792666584E12, 25.90000000000009], [1.792666627E12, 29.0], [1.792666629E12, 28.0], [1.792666586E12, 26.0], [1.792666588E12, 31.0], [1.792666631E12, 26.0], [1.792666633E12, 29.0], [1.79266659E12, 28.0], [1.792666592E12, 26.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.792666615E12, 69.97000000000025], [1.792666617E12, 58.0], [1.792666619E12, 58.9399999999996], [1.792666621E12, 64.88000000000011], [1.792666578E12, 47.0], [1.79266658E12, 50.0], [1.792666623E12, 62.100000000000364], [1.792666603E12, 63.0], [1.792666605E12, 60.0], [1.792666607E12, 52.98999999999978], [1.792666609E12, 65.0], [1.792666611E12, 57.85999999999967], [1.792666613E12, 59.11999999999989], [1.792666593E12, 120.0], [1.792666636E12, 63.0], [1.792666595E12, 63.100000000000364], [1.792666597E12, 62.0], [1.792666599E12, 66.0], [1.792666601E12, 57.0], [1.792666583E12, 47.0], [1.792666626E12, 59.0], [1.792666585E12, 46.0], [1.792666628E12, 101.73000000000002], [1.792666587E12, 63.0], [1.79266663E12, 65.0], [1.792666589E12, 61.0], [1.792666632E12, 64.81999999999971], [1.792666591E12, 74.07000000000016], [1.792666634E12, 58.0], [1.792666614E12, 68.0], [1.792666616E12, 68.0], [1.792666618E12, 61.89000000000033], [1.792666577E12, 41.0], [1.79266662E12, 66.0], [1.792666579E12, 54.0], [1.792666622E12, 69.0], [1.792666581E12, 66.0], [1.792666624E12, 60.0], [1.792666604E12, 64.0], [1.792666606E12, 60.86999999999989], [1.792666608E12, 58.0], [1.79266661E12, 58.3100000000004], [1.792666612E12, 62.0], [1.792666635E12, 61.0], [1.792666637E12, 62.0], [1.792666594E12, 62.0], [1.792666596E12, 61.0], [1.792666598E12, 66.0], [1.7926666E12, 57.0], [1.792666602E12, 57.0], [1.792666625E12, 58.0], [1.792666582E12, 58.0], [1.792666584E12, 53.0], [1.792666627E12, 64.0], [1.792666629E12, 61.0], [1.792666586E12, 52.0], [1.792666588E12, 67.0], [1.792666631E12, 51.0], [1.792666633E12, 62.0], [1.79266659E12, 60.0], [1.792666592E12, 57.36999999999989]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.792666615E12, 6.0], [1.792666617E12, 8.0], [1.792666619E12, 8.0], [1.792666621E12, 8.0], [1.792666578E12, 8.0], [1.79266658E12, 8.0], [1.792666623E12, 6.0], [1.792666603E12, 7.0], [1.792666605E12, 7.0], [1.792666607E12, 9.0], [1.792666609E12, 8.0], [1.792666611E12, 7.0], [1.792666613E12, 7.0], [1.792666593E12, 7.0], [1.792666636E12, 6.0], [1.792666595E12, 7.0], [1.792666597E12, 7.0], [1.792666599E12, 7.0], [1.792666601E12, 8.0], [1.792666583E12, 9.0], [1.792666626E12, 8.0], [1.792666585E12, 10.0], [1.792666628E12, 7.0], [1.792666587E12, 6.0], [1.79266663E12, 6.0], [1.792666589E12, 7.0], [1.792666632E12, 6.0], [1.792666591E12, 6.0], [1.792666634E12, 9.0], [1.792666614E12, 6.0], [1.792666616E12, 6.0], [1.792666618E12, 7.0], [1.792666577E12, 10.0], [1.79266662E12, 7.0], [1.792666579E12, 7.5], [1.792666622E12, 6.0], [1.792666581E12, 6.0], [1.792666624E12, 8.0], [1.792666604E12, 7.0], [1.792666606E12, 7.0], [1.792666608E12, 7.0], [1.79266661E12, 9.0], [1.792666612E12, 7.0], [1.792666635E12, 8.0], [1.792666637E12, 6.0], [1.792666594E12, 8.0], [1.792666596E12, 7.0], [1.792666598E12, 7.0], [1.7926666E12, 8.0], [1.792666602E12, 8.0], [1.792666625E12, 7.0], [1.792666582E12, 8.0], [1.792666584E12, 8.0], [1.792666627E12, 6.0], [1.792666629E12, 7.0], [1.792666586E12, 8.0], [1.792666588E12, 6.0], [1.792666631E12, 9.0], [1.792666633E12, 7.0], [1.79266659E12, 7.0], [1.792666592E12, 8.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.792666615E12, 44.0], [1.792666617E12, 36.0], [1.792666619E12, 37.0], [1.792666621E12, 36.0], [1.792666578E12, 33.0], [1.79266658E12, 33.0], [1.792666623E12, 42.0], [1.792666603E12, 38.0], [1.792666605E12, 38.0], [1.792666607E12, 34.0], [1.792666609E12, 38.0], [1.792666611E12, 37.0], [1.792666613E12, 39.0], [1.792666593E12, 43.0], [1.792666636E12, 41.0], [1.792666595E12, 37.0], [1.792666597E12, 40.0], [1.792666599E12, 39.0], [1.792666601E12, 36.0], [1.792666583E12, 32.0], [1.792666626E12, 38.0], [1.792666585E12, 28.25], [1.792666628E12, 45.0], [1.792666587E12, 41.0], [1.79266663E12, 40.0], [1.792666589E12, 41.0], [1.792666632E12, 39.0], [1.792666591E12, 43.0], [1.792666634E12, 38.0], [1.792666614E12, 42.0], [1.792666616E12, 41.0], [1.792666618E12, 39.0], [1.792666577E12, 30.0], [1.79266662E12, 39.0], [1.792666579E12, 37.0], [1.792666622E12, 40.0], [1.792666581E12, 41.0], [1.792666624E12, 35.399999999999636], [1.792666604E12, 39.649999999999636], [1.792666606E12, 38.0], [1.792666608E12, 37.0], [1.79266661E12, 33.0], [1.792666612E12, 37.0], [1.792666635E12, 36.0], [1.792666637E12, 39.09999999999991], [1.792666594E12, 39.0], [1.792666596E12, 40.0], [1.792666598E12, 42.0], [1.7926666E12, 37.0], [1.792666602E12, 35.0], [1.792666625E12, 37.0], [1.792666582E12, 34.0], [1.792666584E12, 33.0], [1.792666627E12, 40.0], [1.792666629E12, 39.0], [1.792666586E12, 36.0], [1.792666588E12, 42.0], [1.792666631E12, 34.0], [1.792666633E12, 40.0], [1.79266659E12, 38.0], [1.792666592E12, 36.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792666637E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 6.0, "minX": 1597.0, "maxY": 10.0, "series": [{"data": [[1597.0, 6.0], [2338.0, 10.0], [3652.0, 7.0], [3826.0, 7.0], [3780.0, 9.0], [4078.0, 7.5], [4086.0, 6.0], [4092.0, 6.0], [4073.0, 8.0], [4219.0, 7.0], [4198.0, 8.0], [4171.0, 8.0], [4143.0, 8.0], [4182.0, 8.0], [4180.0, 6.0], [4176.0, 6.0], [4177.0, 7.0], [4179.0, 8.0], [4186.0, 7.0], [4187.0, 7.0], [4183.0, 7.0], [4160.0, 8.0], [4162.0, 8.0], [4168.0, 9.0], [4194.0, 10.0], [4190.0, 7.0], [4197.0, 7.0], [4195.0, 6.0], [4189.0, 7.0], [4156.0, 8.0], [4234.0, 7.0], [4233.0, 7.0], [4239.0, 8.0], [4273.0, 8.0], [4136.0, 6.0], [4121.0, 7.0], [4138.0, 8.0], [4106.0, 6.0], [4096.0, 7.0], [4207.0, 7.0], [4205.0, 7.0], [4200.0, 9.0], [4202.0, 6.0], [4206.0, 7.0], [4215.0, 8.0], [4217.0, 6.0], [4214.0, 6.0], [4212.0, 7.0], [4210.0, 7.0], [4211.0, 8.0], [4213.0, 7.0], [4144.0, 7.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4273.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 6.0, "minX": 1597.0, "maxY": 10.0, "series": [{"data": [[1597.0, 6.0], [2338.0, 10.0], [3652.0, 7.0], [3826.0, 7.0], [3780.0, 9.0], [4078.0, 7.0], [4086.0, 6.0], [4092.0, 6.0], [4073.0, 8.0], [4219.0, 7.0], [4198.0, 8.0], [4171.0, 8.0], [4143.0, 8.0], [4182.0, 8.0], [4180.0, 6.0], [4176.0, 6.0], [4177.0, 7.0], [4179.0, 8.0], [4186.0, 7.0], [4187.0, 7.0], [4183.0, 7.0], [4160.0, 8.0], [4162.0, 8.0], [4168.0, 9.0], [4194.0, 10.0], [4190.0, 7.0], [4197.0, 7.0], [4195.0, 6.0], [4189.0, 7.0], [4156.0, 8.0], [4234.0, 7.0], [4233.0, 7.0], [4239.0, 8.0], [4273.0, 8.0], [4136.0, 6.0], [4121.0, 7.0], [4138.0, 8.0], [4106.0, 6.0], [4096.0, 7.0], [4207.0, 7.0], [4205.0, 7.0], [4200.0, 9.0], [4202.0, 6.0], [4206.0, 7.0], [4215.0, 8.0], [4217.0, 6.0], [4214.0, 6.0], [4212.0, 7.0], [4210.0, 7.0], [4211.0, 8.0], [4213.0, 7.0], [4144.0, 7.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4273.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1547.0, "minX": 1.792666577E12, "maxY": 4272.0, "series": [{"data": [[1.792666615E12, 4203.0], [1.792666617E12, 4178.0], [1.792666619E12, 4204.0], [1.792666621E12, 4211.0], [1.792666578E12, 4171.0], [1.79266658E12, 4199.0], [1.792666623E12, 4189.0], [1.792666603E12, 4205.0], [1.792666605E12, 4183.0], [1.792666607E12, 4198.0], [1.792666609E12, 4138.0], [1.792666611E12, 4213.0], [1.792666613E12, 4185.0], [1.792666593E12, 3652.0], [1.792666636E12, 4235.0], [1.792666595E12, 4189.0], [1.792666597E12, 4207.0], [1.792666599E12, 4217.0], [1.792666601E12, 4241.0], [1.792666583E12, 4183.0], [1.792666626E12, 4182.0], [1.792666585E12, 4194.0], [1.792666628E12, 3827.0], [1.792666587E12, 4135.0], [1.79266663E12, 4215.0], [1.792666589E12, 4096.0], [1.792666632E12, 4218.0], [1.792666591E12, 4092.0], [1.792666634E12, 3780.0], [1.792666614E12, 4177.0], [1.792666616E12, 4179.0], [1.792666618E12, 4211.0], [1.792666577E12, 2387.0], [1.79266662E12, 4177.0], [1.792666579E12, 4078.0], [1.792666622E12, 4196.0], [1.792666581E12, 4085.0], [1.792666624E12, 4170.0], [1.792666604E12, 4206.0], [1.792666606E12, 4212.0], [1.792666608E12, 4209.0], [1.79266661E12, 4168.0], [1.792666612E12, 4233.0], [1.792666635E12, 4272.0], [1.792666637E12, 1547.0], [1.792666594E12, 4074.0], [1.792666596E12, 4186.0], [1.792666598E12, 4197.0], [1.7926666E12, 4234.0], [1.792666602E12, 4215.0], [1.792666625E12, 4191.0], [1.792666582E12, 4143.0], [1.792666584E12, 4159.0], [1.792666627E12, 4178.0], [1.792666629E12, 4207.0], [1.792666586E12, 4157.0], [1.792666588E12, 4106.0], [1.792666631E12, 4178.0], [1.792666633E12, 4121.0], [1.79266659E12, 4145.0], [1.792666592E12, 4161.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792666637E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1597.0, "minX": 1.792666577E12, "maxY": 4273.0, "series": [{"data": [[1.792666615E12, 4202.0], [1.792666617E12, 4179.0], [1.792666619E12, 4205.0], [1.792666621E12, 4211.0], [1.792666578E12, 4171.0], [1.79266658E12, 4198.0], [1.792666623E12, 4189.0], [1.792666603E12, 4205.0], [1.792666605E12, 4183.0], [1.792666607E12, 4200.0], [1.792666609E12, 4138.0], [1.792666611E12, 4213.0], [1.792666613E12, 4187.0], [1.792666593E12, 3652.0], [1.792666636E12, 4234.0], [1.792666595E12, 4189.0], [1.792666597E12, 4207.0], [1.792666599E12, 4219.0], [1.792666601E12, 4239.0], [1.792666583E12, 4182.0], [1.792666626E12, 4182.0], [1.792666585E12, 4194.0], [1.792666628E12, 3826.0], [1.792666587E12, 4136.0], [1.79266663E12, 4214.0], [1.792666589E12, 4096.0], [1.792666632E12, 4217.0], [1.792666591E12, 4092.0], [1.792666634E12, 3780.0], [1.792666614E12, 4176.0], [1.792666616E12, 4179.0], [1.792666618E12, 4210.0], [1.792666577E12, 2338.0], [1.79266662E12, 4177.0], [1.792666579E12, 4078.0], [1.792666622E12, 4195.0], [1.792666581E12, 4086.0], [1.792666624E12, 4171.0], [1.792666604E12, 4206.0], [1.792666606E12, 4212.0], [1.792666608E12, 4207.0], [1.79266661E12, 4168.0], [1.792666612E12, 4233.0], [1.792666635E12, 4273.0], [1.792666637E12, 1597.0], [1.792666594E12, 4073.0], [1.792666596E12, 4186.0], [1.792666598E12, 4197.0], [1.7926666E12, 4234.0], [1.792666602E12, 4215.0], [1.792666625E12, 4190.0], [1.792666582E12, 4143.0], [1.792666584E12, 4160.0], [1.792666627E12, 4180.0], [1.792666629E12, 4207.0], [1.792666586E12, 4156.0], [1.792666588E12, 4106.0], [1.792666631E12, 4179.0], [1.792666633E12, 4121.0], [1.79266659E12, 4144.0], [1.792666592E12, 4162.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792666637E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1597.0, "minX": 1.792666577E12, "maxY": 4273.0, "series": [{"data": [[1.792666615E12, 4202.0], [1.792666617E12, 4179.0], [1.792666619E12, 4205.0], [1.792666621E12, 4211.0], [1.792666578E12, 4171.0], [1.79266658E12, 4198.0], [1.792666623E12, 4189.0], [1.792666603E12, 4205.0], [1.792666605E12, 4183.0], [1.792666607E12, 4200.0], [1.792666609E12, 4138.0], [1.792666611E12, 4213.0], [1.792666613E12, 4187.0], [1.792666593E12, 3652.0], [1.792666636E12, 4234.0], [1.792666595E12, 4189.0], [1.792666597E12, 4207.0], [1.792666599E12, 4219.0], [1.792666601E12, 4239.0], [1.792666583E12, 4182.0], [1.792666626E12, 4182.0], [1.792666585E12, 4194.0], [1.792666628E12, 3826.0], [1.792666587E12, 4136.0], [1.79266663E12, 4214.0], [1.792666589E12, 4096.0], [1.792666632E12, 4217.0], [1.792666591E12, 4092.0], [1.792666634E12, 3780.0], [1.792666614E12, 4176.0], [1.792666616E12, 4179.0], [1.792666618E12, 4210.0], [1.792666577E12, 2338.0], [1.79266662E12, 4177.0], [1.792666579E12, 4078.0], [1.792666622E12, 4195.0], [1.792666581E12, 4086.0], [1.792666624E12, 4171.0], [1.792666604E12, 4206.0], [1.792666606E12, 4212.0], [1.792666608E12, 4207.0], [1.79266661E12, 4168.0], [1.792666612E12, 4233.0], [1.792666635E12, 4273.0], [1.792666637E12, 1597.0], [1.792666594E12, 4073.0], [1.792666596E12, 4186.0], [1.792666598E12, 4197.0], [1.7926666E12, 4234.0], [1.792666602E12, 4215.0], [1.792666625E12, 4190.0], [1.792666582E12, 4143.0], [1.792666584E12, 4160.0], [1.792666627E12, 4180.0], [1.792666629E12, 4207.0], [1.792666586E12, 4156.0], [1.792666588E12, 4106.0], [1.792666631E12, 4179.0], [1.792666633E12, 4121.0], [1.79266659E12, 4144.0], [1.792666592E12, 4162.0]], "isOverall": false, "label": "Products-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792666637E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1597.0, "minX": 1.792666577E12, "maxY": 4273.0, "series": [{"data": [[1.792666615E12, 4202.0], [1.792666617E12, 4179.0], [1.792666619E12, 4205.0], [1.792666621E12, 4211.0], [1.792666578E12, 4171.0], [1.79266658E12, 4198.0], [1.792666623E12, 4189.0], [1.792666603E12, 4205.0], [1.792666605E12, 4183.0], [1.792666607E12, 4200.0], [1.792666609E12, 4138.0], [1.792666611E12, 4213.0], [1.792666613E12, 4187.0], [1.792666593E12, 3652.0], [1.792666636E12, 4234.0], [1.792666595E12, 4189.0], [1.792666597E12, 4207.0], [1.792666599E12, 4219.0], [1.792666601E12, 4239.0], [1.792666583E12, 4182.0], [1.792666626E12, 4182.0], [1.792666585E12, 4194.0], [1.792666628E12, 3826.0], [1.792666587E12, 4136.0], [1.79266663E12, 4214.0], [1.792666589E12, 4096.0], [1.792666632E12, 4217.0], [1.792666591E12, 4092.0], [1.792666634E12, 3780.0], [1.792666614E12, 4176.0], [1.792666616E12, 4179.0], [1.792666618E12, 4210.0], [1.792666577E12, 2338.0], [1.79266662E12, 4177.0], [1.792666579E12, 4078.0], [1.792666622E12, 4195.0], [1.792666581E12, 4086.0], [1.792666624E12, 4171.0], [1.792666604E12, 4206.0], [1.792666606E12, 4212.0], [1.792666608E12, 4207.0], [1.79266661E12, 4168.0], [1.792666612E12, 4233.0], [1.792666635E12, 4273.0], [1.792666637E12, 1597.0], [1.792666594E12, 4073.0], [1.792666596E12, 4186.0], [1.792666598E12, 4197.0], [1.7926666E12, 4234.0], [1.792666602E12, 4215.0], [1.792666625E12, 4190.0], [1.792666582E12, 4143.0], [1.792666584E12, 4160.0], [1.792666627E12, 4180.0], [1.792666629E12, 4207.0], [1.792666586E12, 4156.0], [1.792666588E12, 4106.0], [1.792666631E12, 4179.0], [1.792666633E12, 4121.0], [1.79266659E12, 4144.0], [1.792666592E12, 4162.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792666637E12, "title": "Total Transactions Per Second"}},
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


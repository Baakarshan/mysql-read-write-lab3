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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 192.0, "series": [{"data": [[0.0, 5.0], [0.1, 7.0], [0.2, 7.0], [0.3, 7.0], [0.4, 7.0], [0.5, 8.0], [0.6, 8.0], [0.7, 8.0], [0.8, 8.0], [0.9, 8.0], [1.0, 8.0], [1.1, 8.0], [1.2, 8.0], [1.3, 8.0], [1.4, 8.0], [1.5, 8.0], [1.6, 8.0], [1.7, 9.0], [1.8, 9.0], [1.9, 9.0], [2.0, 9.0], [2.1, 9.0], [2.2, 9.0], [2.3, 9.0], [2.4, 9.0], [2.5, 9.0], [2.6, 9.0], [2.7, 9.0], [2.8, 9.0], [2.9, 9.0], [3.0, 9.0], [3.1, 9.0], [3.2, 9.0], [3.3, 9.0], [3.4, 9.0], [3.5, 9.0], [3.6, 9.0], [3.7, 9.0], [3.8, 9.0], [3.9, 10.0], [4.0, 10.0], [4.1, 10.0], [4.2, 10.0], [4.3, 10.0], [4.4, 10.0], [4.5, 10.0], [4.6, 10.0], [4.7, 10.0], [4.8, 10.0], [4.9, 10.0], [5.0, 10.0], [5.1, 10.0], [5.2, 10.0], [5.3, 10.0], [5.4, 10.0], [5.5, 10.0], [5.6, 10.0], [5.7, 10.0], [5.8, 10.0], [5.9, 10.0], [6.0, 10.0], [6.1, 10.0], [6.2, 10.0], [6.3, 10.0], [6.4, 10.0], [6.5, 10.0], [6.6, 10.0], [6.7, 10.0], [6.8, 10.0], [6.9, 10.0], [7.0, 10.0], [7.1, 10.0], [7.2, 11.0], [7.3, 11.0], [7.4, 11.0], [7.5, 11.0], [7.6, 11.0], [7.7, 11.0], [7.8, 11.0], [7.9, 11.0], [8.0, 11.0], [8.1, 11.0], [8.2, 11.0], [8.3, 11.0], [8.4, 11.0], [8.5, 11.0], [8.6, 11.0], [8.7, 11.0], [8.8, 11.0], [8.9, 11.0], [9.0, 11.0], [9.1, 11.0], [9.2, 11.0], [9.3, 11.0], [9.4, 11.0], [9.5, 11.0], [9.6, 11.0], [9.7, 11.0], [9.8, 11.0], [9.9, 11.0], [10.0, 11.0], [10.1, 11.0], [10.2, 11.0], [10.3, 11.0], [10.4, 11.0], [10.5, 11.0], [10.6, 11.0], [10.7, 11.0], [10.8, 11.0], [10.9, 12.0], [11.0, 12.0], [11.1, 12.0], [11.2, 12.0], [11.3, 12.0], [11.4, 12.0], [11.5, 12.0], [11.6, 12.0], [11.7, 12.0], [11.8, 12.0], [11.9, 12.0], [12.0, 12.0], [12.1, 12.0], [12.2, 12.0], [12.3, 12.0], [12.4, 12.0], [12.5, 12.0], [12.6, 12.0], [12.7, 12.0], [12.8, 12.0], [12.9, 12.0], [13.0, 12.0], [13.1, 12.0], [13.2, 12.0], [13.3, 12.0], [13.4, 12.0], [13.5, 12.0], [13.6, 12.0], [13.7, 12.0], [13.8, 12.0], [13.9, 12.0], [14.0, 12.0], [14.1, 12.0], [14.2, 12.0], [14.3, 12.0], [14.4, 13.0], [14.5, 13.0], [14.6, 13.0], [14.7, 13.0], [14.8, 13.0], [14.9, 13.0], [15.0, 13.0], [15.1, 13.0], [15.2, 13.0], [15.3, 13.0], [15.4, 13.0], [15.5, 13.0], [15.6, 13.0], [15.7, 13.0], [15.8, 13.0], [15.9, 13.0], [16.0, 13.0], [16.1, 13.0], [16.2, 13.0], [16.3, 13.0], [16.4, 13.0], [16.5, 13.0], [16.6, 13.0], [16.7, 13.0], [16.8, 13.0], [16.9, 13.0], [17.0, 13.0], [17.1, 13.0], [17.2, 13.0], [17.3, 13.0], [17.4, 13.0], [17.5, 14.0], [17.6, 14.0], [17.7, 14.0], [17.8, 14.0], [17.9, 14.0], [18.0, 14.0], [18.1, 14.0], [18.2, 14.0], [18.3, 14.0], [18.4, 14.0], [18.5, 14.0], [18.6, 14.0], [18.7, 14.0], [18.8, 14.0], [18.9, 14.0], [19.0, 14.0], [19.1, 14.0], [19.2, 14.0], [19.3, 14.0], [19.4, 14.0], [19.5, 14.0], [19.6, 14.0], [19.7, 14.0], [19.8, 14.0], [19.9, 14.0], [20.0, 14.0], [20.1, 15.0], [20.2, 15.0], [20.3, 15.0], [20.4, 15.0], [20.5, 15.0], [20.6, 15.0], [20.7, 15.0], [20.8, 15.0], [20.9, 15.0], [21.0, 15.0], [21.1, 15.0], [21.2, 15.0], [21.3, 15.0], [21.4, 15.0], [21.5, 15.0], [21.6, 15.0], [21.7, 15.0], [21.8, 15.0], [21.9, 15.0], [22.0, 15.0], [22.1, 16.0], [22.2, 16.0], [22.3, 16.0], [22.4, 16.0], [22.5, 16.0], [22.6, 16.0], [22.7, 16.0], [22.8, 16.0], [22.9, 16.0], [23.0, 16.0], [23.1, 16.0], [23.2, 16.0], [23.3, 16.0], [23.4, 16.0], [23.5, 16.0], [23.6, 17.0], [23.7, 17.0], [23.8, 17.0], [23.9, 17.0], [24.0, 17.0], [24.1, 17.0], [24.2, 17.0], [24.3, 17.0], [24.4, 17.0], [24.5, 17.0], [24.6, 17.0], [24.7, 17.0], [24.8, 17.0], [24.9, 18.0], [25.0, 18.0], [25.1, 18.0], [25.2, 18.0], [25.3, 18.0], [25.4, 18.0], [25.5, 18.0], [25.6, 18.0], [25.7, 18.0], [25.8, 19.0], [25.9, 19.0], [26.0, 19.0], [26.1, 19.0], [26.2, 19.0], [26.3, 19.0], [26.4, 19.0], [26.5, 19.0], [26.6, 20.0], [26.7, 20.0], [26.8, 20.0], [26.9, 20.0], [27.0, 20.0], [27.1, 20.0], [27.2, 20.0], [27.3, 20.0], [27.4, 21.0], [27.5, 21.0], [27.6, 21.0], [27.7, 21.0], [27.8, 21.0], [27.9, 21.0], [28.0, 21.0], [28.1, 21.0], [28.2, 21.0], [28.3, 21.0], [28.4, 21.0], [28.5, 21.0], [28.6, 22.0], [28.7, 22.0], [28.8, 22.0], [28.9, 22.0], [29.0, 22.0], [29.1, 22.0], [29.2, 22.0], [29.3, 22.0], [29.4, 22.0], [29.5, 22.0], [29.6, 22.0], [29.7, 22.0], [29.8, 22.0], [29.9, 22.0], [30.0, 22.0], [30.1, 22.0], [30.2, 22.0], [30.3, 22.0], [30.4, 22.0], [30.5, 22.0], [30.6, 23.0], [30.7, 23.0], [30.8, 23.0], [30.9, 23.0], [31.0, 23.0], [31.1, 23.0], [31.2, 23.0], [31.3, 23.0], [31.4, 23.0], [31.5, 23.0], [31.6, 23.0], [31.7, 23.0], [31.8, 23.0], [31.9, 23.0], [32.0, 23.0], [32.1, 23.0], [32.2, 23.0], [32.3, 23.0], [32.4, 23.0], [32.5, 23.0], [32.6, 23.0], [32.7, 23.0], [32.8, 23.0], [32.9, 23.0], [33.0, 23.0], [33.1, 23.0], [33.2, 23.0], [33.3, 23.0], [33.4, 23.0], [33.5, 23.0], [33.6, 24.0], [33.7, 24.0], [33.8, 24.0], [33.9, 24.0], [34.0, 24.0], [34.1, 24.0], [34.2, 24.0], [34.3, 24.0], [34.4, 24.0], [34.5, 24.0], [34.6, 24.0], [34.7, 24.0], [34.8, 24.0], [34.9, 24.0], [35.0, 24.0], [35.1, 24.0], [35.2, 24.0], [35.3, 24.0], [35.4, 24.0], [35.5, 24.0], [35.6, 24.0], [35.7, 24.0], [35.8, 24.0], [35.9, 24.0], [36.0, 24.0], [36.1, 24.0], [36.2, 24.0], [36.3, 24.0], [36.4, 24.0], [36.5, 24.0], [36.6, 24.0], [36.7, 24.0], [36.8, 24.0], [36.9, 24.0], [37.0, 24.0], [37.1, 24.0], [37.2, 24.0], [37.3, 24.0], [37.4, 24.0], [37.5, 24.0], [37.6, 25.0], [37.7, 25.0], [37.8, 25.0], [37.9, 25.0], [38.0, 25.0], [38.1, 25.0], [38.2, 25.0], [38.3, 25.0], [38.4, 25.0], [38.5, 25.0], [38.6, 25.0], [38.7, 25.0], [38.8, 25.0], [38.9, 25.0], [39.0, 25.0], [39.1, 25.0], [39.2, 25.0], [39.3, 25.0], [39.4, 25.0], [39.5, 25.0], [39.6, 25.0], [39.7, 25.0], [39.8, 25.0], [39.9, 25.0], [40.0, 25.0], [40.1, 25.0], [40.2, 25.0], [40.3, 25.0], [40.4, 25.0], [40.5, 25.0], [40.6, 25.0], [40.7, 25.0], [40.8, 25.0], [40.9, 25.0], [41.0, 25.0], [41.1, 25.0], [41.2, 25.0], [41.3, 25.0], [41.4, 25.0], [41.5, 25.0], [41.6, 25.0], [41.7, 25.0], [41.8, 25.0], [41.9, 25.0], [42.0, 25.0], [42.1, 25.0], [42.2, 25.0], [42.3, 25.0], [42.4, 26.0], [42.5, 26.0], [42.6, 26.0], [42.7, 26.0], [42.8, 26.0], [42.9, 26.0], [43.0, 26.0], [43.1, 26.0], [43.2, 26.0], [43.3, 26.0], [43.4, 26.0], [43.5, 26.0], [43.6, 26.0], [43.7, 26.0], [43.8, 26.0], [43.9, 26.0], [44.0, 26.0], [44.1, 26.0], [44.2, 26.0], [44.3, 26.0], [44.4, 26.0], [44.5, 26.0], [44.6, 26.0], [44.7, 26.0], [44.8, 26.0], [44.9, 26.0], [45.0, 26.0], [45.1, 26.0], [45.2, 26.0], [45.3, 26.0], [45.4, 26.0], [45.5, 26.0], [45.6, 26.0], [45.7, 26.0], [45.8, 26.0], [45.9, 26.0], [46.0, 26.0], [46.1, 26.0], [46.2, 26.0], [46.3, 26.0], [46.4, 26.0], [46.5, 26.0], [46.6, 26.0], [46.7, 26.0], [46.8, 26.0], [46.9, 26.0], [47.0, 26.0], [47.1, 26.0], [47.2, 26.0], [47.3, 26.0], [47.4, 26.0], [47.5, 26.0], [47.6, 26.0], [47.7, 27.0], [47.8, 27.0], [47.9, 27.0], [48.0, 27.0], [48.1, 27.0], [48.2, 27.0], [48.3, 27.0], [48.4, 27.0], [48.5, 27.0], [48.6, 27.0], [48.7, 27.0], [48.8, 27.0], [48.9, 27.0], [49.0, 27.0], [49.1, 27.0], [49.2, 27.0], [49.3, 27.0], [49.4, 27.0], [49.5, 27.0], [49.6, 27.0], [49.7, 27.0], [49.8, 27.0], [49.9, 27.0], [50.0, 27.0], [50.1, 27.0], [50.2, 27.0], [50.3, 27.0], [50.4, 27.0], [50.5, 27.0], [50.6, 27.0], [50.7, 27.0], [50.8, 27.0], [50.9, 27.0], [51.0, 27.0], [51.1, 27.0], [51.2, 27.0], [51.3, 27.0], [51.4, 27.0], [51.5, 27.0], [51.6, 27.0], [51.7, 27.0], [51.8, 27.0], [51.9, 27.0], [52.0, 27.0], [52.1, 27.0], [52.2, 27.0], [52.3, 27.0], [52.4, 27.0], [52.5, 27.0], [52.6, 27.0], [52.7, 27.0], [52.8, 27.0], [52.9, 27.0], [53.0, 27.0], [53.1, 28.0], [53.2, 28.0], [53.3, 28.0], [53.4, 28.0], [53.5, 28.0], [53.6, 28.0], [53.7, 28.0], [53.8, 28.0], [53.9, 28.0], [54.0, 28.0], [54.1, 28.0], [54.2, 28.0], [54.3, 28.0], [54.4, 28.0], [54.5, 28.0], [54.6, 28.0], [54.7, 28.0], [54.8, 28.0], [54.9, 28.0], [55.0, 28.0], [55.1, 28.0], [55.2, 28.0], [55.3, 28.0], [55.4, 28.0], [55.5, 28.0], [55.6, 28.0], [55.7, 28.0], [55.8, 28.0], [55.9, 28.0], [56.0, 28.0], [56.1, 28.0], [56.2, 28.0], [56.3, 28.0], [56.4, 28.0], [56.5, 28.0], [56.6, 28.0], [56.7, 28.0], [56.8, 28.0], [56.9, 28.0], [57.0, 28.0], [57.1, 28.0], [57.2, 28.0], [57.3, 28.0], [57.4, 28.0], [57.5, 28.0], [57.6, 28.0], [57.7, 28.0], [57.8, 28.0], [57.9, 28.0], [58.0, 28.0], [58.1, 28.0], [58.2, 29.0], [58.3, 29.0], [58.4, 29.0], [58.5, 29.0], [58.6, 29.0], [58.7, 29.0], [58.8, 29.0], [58.9, 29.0], [59.0, 29.0], [59.1, 29.0], [59.2, 29.0], [59.3, 29.0], [59.4, 29.0], [59.5, 29.0], [59.6, 29.0], [59.7, 29.0], [59.8, 29.0], [59.9, 29.0], [60.0, 29.0], [60.1, 29.0], [60.2, 29.0], [60.3, 29.0], [60.4, 29.0], [60.5, 29.0], [60.6, 29.0], [60.7, 29.0], [60.8, 29.0], [60.9, 29.0], [61.0, 29.0], [61.1, 29.0], [61.2, 29.0], [61.3, 29.0], [61.4, 29.0], [61.5, 29.0], [61.6, 29.0], [61.7, 29.0], [61.8, 29.0], [61.9, 29.0], [62.0, 29.0], [62.1, 29.0], [62.2, 29.0], [62.3, 29.0], [62.4, 29.0], [62.5, 29.0], [62.6, 29.0], [62.7, 29.0], [62.8, 30.0], [62.9, 30.0], [63.0, 30.0], [63.1, 30.0], [63.2, 30.0], [63.3, 30.0], [63.4, 30.0], [63.5, 30.0], [63.6, 30.0], [63.7, 30.0], [63.8, 30.0], [63.9, 30.0], [64.0, 30.0], [64.1, 30.0], [64.2, 30.0], [64.3, 30.0], [64.4, 30.0], [64.5, 30.0], [64.6, 30.0], [64.7, 30.0], [64.8, 30.0], [64.9, 30.0], [65.0, 30.0], [65.1, 30.0], [65.2, 30.0], [65.3, 30.0], [65.4, 30.0], [65.5, 30.0], [65.6, 30.0], [65.7, 30.0], [65.8, 30.0], [65.9, 30.0], [66.0, 30.0], [66.1, 30.0], [66.2, 30.0], [66.3, 30.0], [66.4, 30.0], [66.5, 30.0], [66.6, 30.0], [66.7, 30.0], [66.8, 30.0], [66.9, 30.0], [67.0, 31.0], [67.1, 31.0], [67.2, 31.0], [67.3, 31.0], [67.4, 31.0], [67.5, 31.0], [67.6, 31.0], [67.7, 31.0], [67.8, 31.0], [67.9, 31.0], [68.0, 31.0], [68.1, 31.0], [68.2, 31.0], [68.3, 31.0], [68.4, 31.0], [68.5, 31.0], [68.6, 31.0], [68.7, 31.0], [68.8, 31.0], [68.9, 31.0], [69.0, 31.0], [69.1, 31.0], [69.2, 31.0], [69.3, 31.0], [69.4, 31.0], [69.5, 31.0], [69.6, 31.0], [69.7, 31.0], [69.8, 31.0], [69.9, 31.0], [70.0, 31.0], [70.1, 31.0], [70.2, 32.0], [70.3, 32.0], [70.4, 32.0], [70.5, 32.0], [70.6, 32.0], [70.7, 32.0], [70.8, 32.0], [70.9, 32.0], [71.0, 32.0], [71.1, 32.0], [71.2, 32.0], [71.3, 32.0], [71.4, 32.0], [71.5, 32.0], [71.6, 32.0], [71.7, 32.0], [71.8, 32.0], [71.9, 32.0], [72.0, 32.0], [72.1, 32.0], [72.2, 32.0], [72.3, 32.0], [72.4, 32.0], [72.5, 32.0], [72.6, 32.0], [72.7, 32.0], [72.8, 32.0], [72.9, 33.0], [73.0, 33.0], [73.1, 33.0], [73.2, 33.0], [73.3, 33.0], [73.4, 33.0], [73.5, 33.0], [73.6, 33.0], [73.7, 33.0], [73.8, 33.0], [73.9, 33.0], [74.0, 33.0], [74.1, 33.0], [74.2, 33.0], [74.3, 33.0], [74.4, 33.0], [74.5, 33.0], [74.6, 33.0], [74.7, 33.0], [74.8, 33.0], [74.9, 33.0], [75.0, 34.0], [75.1, 34.0], [75.2, 34.0], [75.3, 34.0], [75.4, 34.0], [75.5, 34.0], [75.6, 34.0], [75.7, 34.0], [75.8, 34.0], [75.9, 34.0], [76.0, 34.0], [76.1, 34.0], [76.2, 34.0], [76.3, 34.0], [76.4, 34.0], [76.5, 34.0], [76.6, 35.0], [76.7, 35.0], [76.8, 35.0], [76.9, 35.0], [77.0, 35.0], [77.1, 35.0], [77.2, 35.0], [77.3, 35.0], [77.4, 35.0], [77.5, 35.0], [77.6, 35.0], [77.7, 35.0], [77.8, 35.0], [77.9, 36.0], [78.0, 36.0], [78.1, 36.0], [78.2, 36.0], [78.3, 36.0], [78.4, 36.0], [78.5, 36.0], [78.6, 36.0], [78.7, 36.0], [78.8, 36.0], [78.9, 36.0], [79.0, 36.0], [79.1, 37.0], [79.2, 37.0], [79.3, 37.0], [79.4, 37.0], [79.5, 37.0], [79.6, 37.0], [79.7, 37.0], [79.8, 37.0], [79.9, 37.0], [80.0, 37.0], [80.1, 37.0], [80.2, 38.0], [80.3, 38.0], [80.4, 38.0], [80.5, 38.0], [80.6, 38.0], [80.7, 38.0], [80.8, 38.0], [80.9, 38.0], [81.0, 38.0], [81.1, 38.0], [81.2, 38.0], [81.3, 38.0], [81.4, 39.0], [81.5, 39.0], [81.6, 39.0], [81.7, 39.0], [81.8, 39.0], [81.9, 39.0], [82.0, 39.0], [82.1, 39.0], [82.2, 39.0], [82.3, 39.0], [82.4, 39.0], [82.5, 39.0], [82.6, 40.0], [82.7, 40.0], [82.8, 40.0], [82.9, 40.0], [83.0, 40.0], [83.1, 40.0], [83.2, 40.0], [83.3, 40.0], [83.4, 40.0], [83.5, 40.0], [83.6, 40.0], [83.7, 40.0], [83.8, 40.0], [83.9, 41.0], [84.0, 41.0], [84.1, 41.0], [84.2, 41.0], [84.3, 41.0], [84.4, 41.0], [84.5, 41.0], [84.6, 41.0], [84.7, 41.0], [84.8, 41.0], [84.9, 41.0], [85.0, 41.0], [85.1, 41.0], [85.2, 41.0], [85.3, 42.0], [85.4, 42.0], [85.5, 42.0], [85.6, 42.0], [85.7, 42.0], [85.8, 42.0], [85.9, 42.0], [86.0, 42.0], [86.1, 42.0], [86.2, 42.0], [86.3, 42.0], [86.4, 42.0], [86.5, 43.0], [86.6, 43.0], [86.7, 43.0], [86.8, 43.0], [86.9, 43.0], [87.0, 43.0], [87.1, 43.0], [87.2, 43.0], [87.3, 43.0], [87.4, 43.0], [87.5, 43.0], [87.6, 43.0], [87.7, 43.0], [87.8, 44.0], [87.9, 44.0], [88.0, 44.0], [88.1, 44.0], [88.2, 44.0], [88.3, 44.0], [88.4, 44.0], [88.5, 44.0], [88.6, 44.0], [88.7, 44.0], [88.8, 44.0], [88.9, 44.0], [89.0, 45.0], [89.1, 45.0], [89.2, 45.0], [89.3, 45.0], [89.4, 45.0], [89.5, 45.0], [89.6, 45.0], [89.7, 45.0], [89.8, 45.0], [89.9, 45.0], [90.0, 45.0], [90.1, 46.0], [90.2, 46.0], [90.3, 46.0], [90.4, 46.0], [90.5, 46.0], [90.6, 46.0], [90.7, 46.0], [90.8, 46.0], [90.9, 46.0], [91.0, 46.0], [91.1, 47.0], [91.2, 47.0], [91.3, 47.0], [91.4, 47.0], [91.5, 47.0], [91.6, 47.0], [91.7, 47.0], [91.8, 48.0], [91.9, 48.0], [92.0, 48.0], [92.1, 48.0], [92.2, 48.0], [92.3, 48.0], [92.4, 49.0], [92.5, 49.0], [92.6, 49.0], [92.7, 49.0], [92.8, 49.0], [92.9, 50.0], [93.0, 50.0], [93.1, 50.0], [93.2, 50.0], [93.3, 50.0], [93.4, 51.0], [93.5, 51.0], [93.6, 51.0], [93.7, 52.0], [93.8, 52.0], [93.9, 52.0], [94.0, 52.0], [94.1, 53.0], [94.2, 53.0], [94.3, 53.0], [94.4, 54.0], [94.5, 54.0], [94.6, 54.0], [94.7, 55.0], [94.8, 55.0], [94.9, 55.0], [95.0, 56.0], [95.1, 56.0], [95.2, 56.0], [95.3, 56.0], [95.4, 57.0], [95.5, 57.0], [95.6, 57.0], [95.7, 58.0], [95.8, 58.0], [95.9, 58.0], [96.0, 58.0], [96.1, 59.0], [96.2, 59.0], [96.3, 59.0], [96.4, 60.0], [96.5, 60.0], [96.6, 60.0], [96.7, 60.0], [96.8, 61.0], [96.9, 61.0], [97.0, 62.0], [97.1, 62.0], [97.2, 62.0], [97.3, 63.0], [97.4, 63.0], [97.5, 64.0], [97.6, 64.0], [97.7, 65.0], [97.8, 66.0], [97.9, 66.0], [98.0, 67.0], [98.1, 69.0], [98.2, 70.0], [98.3, 71.0], [98.4, 72.0], [98.5, 73.0], [98.6, 74.0], [98.7, 75.0], [98.8, 76.0], [98.9, 77.0], [99.0, 78.0], [99.1, 80.0], [99.2, 82.0], [99.3, 85.0], [99.4, 88.0], [99.5, 91.0], [99.6, 96.0], [99.7, 105.0], [99.8, 114.0], [99.9, 128.0], [100.0, 192.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 381.0, "minX": 0.0, "maxY": 104941.0, "series": [{"data": [[0.0, 104941.0], [100.0, 381.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 105322.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 105322.0, "series": [{"data": [[0.0, 105322.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.09431245500359, "minX": 1.792667647E12, "maxY": 50.0, "series": [{"data": [[1.792667682E12, 50.0], [1.792667684E12, 50.0], [1.792667686E12, 50.0], [1.792667688E12, 50.0], [1.792667647E12, 50.0], [1.79266769E12, 50.0], [1.79266767E12, 50.0], [1.792667672E12, 50.0], [1.792667674E12, 50.0], [1.792667676E12, 50.0], [1.792667678E12, 50.0], [1.79266768E12, 50.0], [1.79266766E12, 50.0], [1.792667703E12, 50.0], [1.792667662E12, 50.0], [1.792667705E12, 50.0], [1.792667664E12, 50.0], [1.792667707E12, 49.09431245500359], [1.792667666E12, 50.0], [1.792667668E12, 50.0], [1.792667691E12, 50.0], [1.79266765E12, 50.0], [1.792667693E12, 50.0], [1.792667652E12, 50.0], [1.792667695E12, 50.0], [1.792667654E12, 50.0], [1.792667697E12, 50.0], [1.792667656E12, 50.0], [1.792667699E12, 50.0], [1.792667658E12, 50.0], [1.792667701E12, 50.0], [1.792667681E12, 50.0], [1.792667683E12, 50.0], [1.792667685E12, 50.0], [1.792667687E12, 50.0], [1.792667689E12, 50.0], [1.792667648E12, 50.0], [1.792667671E12, 50.0], [1.792667673E12, 50.0], [1.792667675E12, 50.0], [1.792667677E12, 50.0], [1.792667679E12, 50.0], [1.792667659E12, 50.0], [1.792667702E12, 50.0], [1.792667661E12, 50.0], [1.792667704E12, 50.0], [1.792667663E12, 50.0], [1.792667706E12, 50.0], [1.792667665E12, 50.0], [1.792667667E12, 50.0], [1.792667669E12, 50.0], [1.792667649E12, 50.0], [1.792667692E12, 50.0], [1.792667651E12, 50.0], [1.792667694E12, 50.0], [1.792667653E12, 50.0], [1.792667696E12, 50.0], [1.792667655E12, 50.0], [1.792667698E12, 50.0], [1.792667657E12, 50.0], [1.7926677E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667707E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.0, "maxY": 63.0, "series": [{"data": [[33.0, 44.5], [32.0, 41.0], [35.0, 27.0], [34.0, 26.5], [37.0, 29.0], [36.0, 31.0], [39.0, 37.0], [38.0, 27.0], [41.0, 23.0], [40.0, 31.0], [43.0, 38.5], [42.0, 28.0], [45.0, 21.666666666666668], [44.0, 10.0], [46.0, 18.666666666666668], [48.0, 24.2], [50.0, 28.345686518529984], [5.0, 17.0], [6.0, 25.0], [7.0, 19.0], [8.0, 22.0], [10.0, 28.666666666666668], [12.0, 14.5], [13.0, 26.0], [14.0, 26.5], [15.0, 24.0], [16.0, 39.0], [1.0, 25.0], [18.0, 24.0], [19.0, 28.0], [21.0, 26.666666666666668], [22.0, 26.0], [24.0, 43.0], [25.0, 29.0], [27.0, 43.0], [28.0, 11.0], [29.0, 63.0], [30.0, 25.0], [31.0, 38.333333333333336]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.98805567687664, 28.3454264066389]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 113400.0, "minX": 1.792667647E12, "maxY": 858840.0, "series": [{"data": [[1.792667682E12, 858840.0], [1.792667684E12, 854100.0], [1.792667686E12, 830961.0], [1.792667688E12, 815174.0], [1.792667647E12, 127951.0], [1.79266769E12, 817660.0], [1.79266767E12, 830545.0], [1.792667672E12, 847019.0], [1.792667674E12, 845868.0], [1.792667676E12, 843227.0], [1.792667678E12, 846042.0], [1.79266768E12, 848886.0], [1.79266766E12, 836146.0], [1.792667703E12, 836990.0], [1.792667662E12, 835111.0], [1.792667705E12, 844445.0], [1.792667664E12, 847435.0], [1.792667707E12, 659456.0], [1.792667666E12, 842753.0], [1.792667668E12, 835527.0], [1.792667691E12, 840325.0], [1.79266765E12, 847048.0], [1.792667693E12, 835643.0], [1.792667652E12, 831822.0], [1.792667695E12, 839435.0], [1.792667654E12, 846013.0], [1.792667697E12, 848766.0], [1.792667656E12, 819527.0], [1.792667699E12, 849670.0], [1.792667658E12, 819527.0], [1.792667701E12, 825978.0], [1.792667681E12, 840828.0], [1.792667683E12, 836117.0], [1.792667685E12, 839319.0], [1.792667687E12, 845626.0], [1.792667689E12, 821926.0], [1.792667648E12, 833099.0], [1.792667671E12, 840209.0], [1.792667673E12, 843846.0], [1.792667675E12, 843672.0], [1.792667677E12, 841747.0], [1.792667679E12, 833776.0], [1.792667659E12, 828533.0], [1.792667702E12, 842516.0], [1.792667661E12, 830371.0], [1.792667704E12, 842603.0], [1.792667663E12, 822903.0], [1.792667706E12, 835061.0], [1.792667665E12, 829481.0], [1.792667667E12, 850337.0], [1.792667669E12, 753699.0], [1.792667649E12, 759890.0], [1.792667692E12, 844649.0], [1.792667651E12, 781549.0], [1.792667694E12, 837452.0], [1.792667653E12, 828030.0], [1.792667696E12, 833747.0], [1.792667655E12, 748514.0], [1.792667698E12, 843582.0], [1.792667657E12, 833215.0], [1.7926677E12, 836069.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.792667682E12, 761460.0], [1.792667684E12, 757260.0], [1.792667686E12, 736680.0], [1.792667688E12, 722820.0], [1.792667647E12, 113400.0], [1.79266769E12, 724920.0], [1.79266767E12, 736260.0], [1.792667672E12, 750960.0], [1.792667674E12, 750120.0], [1.792667676E12, 747600.0], [1.792667678E12, 750120.0], [1.79266768E12, 752640.0], [1.79266766E12, 741300.0], [1.792667703E12, 740460.0], [1.792667662E12, 740460.0], [1.792667705E12, 747180.0], [1.792667664E12, 751380.0], [1.792667707E12, 583380.0], [1.792667666E12, 747180.0], [1.792667668E12, 740880.0], [1.792667691E12, 745080.0], [1.79266765E12, 750960.0], [1.792667693E12, 740880.0], [1.792667652E12, 737520.0], [1.792667695E12, 744240.0], [1.792667654E12, 750120.0], [1.792667697E12, 751800.0], [1.792667656E12, 726600.0], [1.792667699E12, 751800.0], [1.792667658E12, 726600.0], [1.792667701E12, 730800.0], [1.792667681E12, 745500.0], [1.792667683E12, 741300.0], [1.792667685E12, 744240.0], [1.792667687E12, 749700.0], [1.792667689E12, 728700.0], [1.792667648E12, 738780.0], [1.792667671E12, 745080.0], [1.792667673E12, 748020.0], [1.792667675E12, 748020.0], [1.792667677E12, 746340.0], [1.792667679E12, 739200.0], [1.792667659E12, 734580.0], [1.792667702E12, 745500.0], [1.792667661E12, 736260.0], [1.792667704E12, 745500.0], [1.792667663E12, 729540.0], [1.792667706E12, 738780.0], [1.792667665E12, 735420.0], [1.792667667E12, 753900.0], [1.792667669E12, 668220.0], [1.792667649E12, 673680.0], [1.792667692E12, 748860.0], [1.792667651E12, 693000.0], [1.792667694E12, 742560.0], [1.792667653E12, 734160.0], [1.792667696E12, 739200.0], [1.792667655E12, 663600.0], [1.792667698E12, 746340.0], [1.792667657E12, 738780.0], [1.7926677E12, 739620.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667707E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 25.64444444444445, "minX": 1.792667647E12, "maxY": 31.456329113924056, "series": [{"data": [[1.792667682E12, 27.49255377826805], [1.792667684E12, 27.86633388796452], [1.792667686E12, 28.438996579247377], [1.792667688E12, 28.830331202789054], [1.792667647E12, 25.64444444444445], [1.79266769E12, 28.685399768250317], [1.79266767E12, 29.705647461494557], [1.792667672E12, 27.97091722595079], [1.792667674E12, 27.795632698768202], [1.792667676E12, 27.80786516853935], [1.792667678E12, 27.880739081746956], [1.79266768E12, 27.708147321428623], [1.79266766E12, 28.189801699716746], [1.792667703E12, 28.230289279636935], [1.792667662E12, 28.070901871809433], [1.792667705E12, 28.015177065767293], [1.792667664E12, 27.86137506987143], [1.792667707E12, 27.86825053995682], [1.792667666E12, 28.002248454187686], [1.792667668E12, 28.19727891156465], [1.792667691E12, 28.180383314543352], [1.79266765E12, 27.968680089485463], [1.792667693E12, 28.328231292517046], [1.792667652E12, 28.210136674259676], [1.792667695E12, 28.062641083521388], [1.792667654E12, 27.954647256438932], [1.792667697E12, 27.7], [1.792667656E12, 28.79306358381504], [1.792667699E12, 27.981005586592193], [1.792667658E12, 28.960693641618484], [1.792667701E12, 28.66666666666666], [1.792667681E12, 28.107042253521115], [1.792667683E12, 28.091784702549603], [1.792667685E12, 27.991534988713315], [1.792667687E12, 28.00336134453781], [1.792667689E12, 28.77521613832855], [1.792667648E12, 28.382603752131896], [1.792667671E12, 27.859639233370935], [1.792667673E12, 28.07243121841656], [1.792667675E12, 28.079169006176325], [1.792667677E12, 28.119864940911654], [1.792667679E12, 28.41647727272723], [1.792667659E12, 28.517438536306422], [1.792667702E12, 28.108732394366204], [1.792667661E12, 28.410154021677137], [1.792667704E12, 28.041126760563408], [1.792667663E12, 28.860103626942966], [1.792667706E12, 28.267197271176823], [1.792667665E12, 28.34665905197033], [1.792667667E12, 27.8941504178273], [1.792667669E12, 30.04525455688247], [1.792667649E12, 30.968827930174577], [1.792667692E12, 27.915311273135195], [1.792667651E12, 30.20484848484851], [1.792667694E12, 28.187782805429876], [1.792667653E12, 28.561784897025177], [1.792667696E12, 28.34431818181818], [1.792667655E12, 31.456329113924056], [1.792667698E12, 28.090039392234097], [1.792667657E12, 28.3240477544059], [1.7926677E12, 28.232254400908577]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667707E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 25.64444444444445, "minX": 1.792667647E12, "maxY": 31.454430379746835, "series": [{"data": [[1.792667682E12, 27.490899062327667], [1.792667684E12, 27.86466999445378], [1.792667686E12, 28.437286202964643], [1.792667688E12, 28.82916908773968], [1.792667647E12, 25.64444444444445], [1.79266769E12, 28.683661645422948], [1.79266767E12, 29.704506560182512], [1.792667672E12, 27.968120805369132], [1.792667674E12, 27.795632698768202], [1.792667676E12, 27.80674157303376], [1.792667678E12, 27.87793952967524], [1.79266768E12, 27.705357142857153], [1.79266766E12, 28.186402266288972], [1.792667703E12, 28.229154849688047], [1.792667662E12, 28.070334656834973], [1.792667705E12, 28.013490725126463], [1.792667664E12, 27.85802124091671], [1.792667707E12, 27.86609071274299], [1.792667666E12, 28.00112422709386], [1.792667668E12, 28.195011337868483], [1.792667691E12, 28.1792559188275], [1.79266765E12, 27.96756152125279], [1.792667693E12, 28.327097505668895], [1.792667652E12, 28.207289293849552], [1.792667695E12, 28.060948081264122], [1.792667654E12, 27.951287793952968], [1.792667697E12, 27.697206703910656], [1.792667656E12, 28.792485549132927], [1.792667699E12, 27.97821229050283], [1.792667658E12, 28.958381502890184], [1.792667701E12, 28.66551724137933], [1.792667681E12, 28.10591549295775], [1.792667683E12, 28.08895184135976], [1.792667685E12, 27.989277652370212], [1.792667687E12, 28.00224089635852], [1.792667689E12, 28.772334293948127], [1.792667648E12, 28.380898237635], [1.792667671E12, 27.859639233370935], [1.792667673E12, 28.070185289163362], [1.792667675E12, 28.0769230769231], [1.792667677E12, 28.119302194710247], [1.792667679E12, 28.414772727272744], [1.792667659E12, 28.51400800457402], [1.792667702E12, 28.108169014084545], [1.792667661E12, 28.40673131774102], [1.792667704E12, 28.041126760563408], [1.792667663E12, 28.857225100748398], [1.792667706E12, 28.266060261512262], [1.792667665E12, 28.34608794974303], [1.792667667E12, 27.89136490250694], [1.792667669E12, 30.043368950345677], [1.792667649E12, 30.96571072319201], [1.792667692E12, 27.913628715647814], [1.792667651E12, 30.201818181818144], [1.792667694E12, 28.186651583710418], [1.792667653E12, 28.560068649885583], [1.792667696E12, 28.342045454545453], [1.792667655E12, 31.454430379746835], [1.792667698E12, 28.089476646032608], [1.792667657E12, 28.321773735076782], [1.7926677E12, 28.230550823395777]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667707E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.792667647E12, "maxY": 0.008670520231213884, "series": [{"data": [[1.792667682E12, 0.002206287920573636], [1.792667684E12, 5.546311702717712E-4], [1.792667686E12, 0.0022805017103762837], [1.792667688E12, 0.002324230098779785], [1.792667647E12, 0.0], [1.79266769E12, 0.00405561993047509], [1.79266767E12, 0.0022818026240730227], [1.792667672E12, 0.003914988814317672], [1.792667674E12, 0.006159014557670775], [1.792667676E12, 0.003370786516853935], [1.792667678E12, 0.0033594624860022373], [1.79266768E12, 0.0039062499999999957], [1.79266766E12, 0.0033994334277620357], [1.792667703E12, 0.0011344299489506554], [1.792667662E12, 0.0017016449234259798], [1.792667705E12, 0.004496908375491849], [1.792667664E12, 0.0033538289547233122], [1.792667707E12, 0.0014398848092152662], [1.792667666E12, 0.0039347948285553625], [1.792667668E12, 0.003968253968253967], [1.792667691E12, 0.0033821871476888404], [1.79266765E12, 0.006711409395973147], [1.792667693E12, 0.0034013605442176904], [1.792667652E12, 0.003986332574031887], [1.792667695E12, 0.001693002257336344], [1.792667654E12, 0.0033594624860022394], [1.792667697E12, 0.0022346368715083823], [1.792667656E12, 0.005202312138728327], [1.792667699E12, 0.0033519553072625715], [1.792667658E12, 0.008670520231213884], [1.792667701E12, 0.002873563218390809], [1.792667681E12, 0.0022535211267605626], [1.792667683E12, 0.0033994334277620436], [1.792667685E12, 0.003950338600451465], [1.792667687E12, 0.0028011204481792774], [1.792667689E12, 0.0011527377521613855], [1.792667648E12, 0.006822057987492908], [1.792667671E12, 0.005073280721533262], [1.792667673E12, 5.614823133071335E-4], [1.792667675E12, 5.614823133071336E-4], [1.792667677E12, 0.002250984805852567], [1.792667679E12, 0.0017045454545454586], [1.792667659E12, 0.002858776443682105], [1.792667702E12, 0.0022535211267605635], [1.792667661E12, 0.004563605248146042], [1.792667704E12, 0.003943661971830989], [1.792667663E12, 0.0034542314335060478], [1.792667706E12, 0.005116543490619685], [1.792667665E12, 0.003997715591090811], [1.792667667E12, 0.003342618384401113], [1.792667669E12, 0.002514142049025774], [1.792667649E12, 0.004987531172069829], [1.792667692E12, 0.0016825574873808205], [1.792667651E12, 0.003636363636363634], [1.792667694E12, 0.008484162895927605], [1.792667653E12, 0.005148741418764318], [1.792667696E12, 0.0028409090909090992], [1.792667655E12, 0.003797468354430378], [1.792667698E12, 0.0022509848058525615], [1.792667657E12, 0.0034110289937464467], [1.7926677E12, 0.0017035775127768361]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667707E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.792667647E12, "maxY": 192.0, "series": [{"data": [[1.792667682E12, 85.0], [1.792667684E12, 101.0], [1.792667686E12, 129.0], [1.792667688E12, 134.0], [1.792667647E12, 83.0], [1.79266769E12, 131.0], [1.79266767E12, 184.0], [1.792667672E12, 108.0], [1.792667674E12, 110.0], [1.792667676E12, 130.0], [1.792667678E12, 119.0], [1.79266768E12, 102.0], [1.79266766E12, 96.0], [1.792667703E12, 107.0], [1.792667662E12, 145.0], [1.792667705E12, 103.0], [1.792667664E12, 102.0], [1.792667707E12, 125.0], [1.792667666E12, 114.0], [1.792667668E12, 114.0], [1.792667691E12, 129.0], [1.79266765E12, 130.0], [1.792667693E12, 126.0], [1.792667652E12, 82.0], [1.792667695E12, 111.0], [1.792667654E12, 118.0], [1.792667697E12, 113.0], [1.792667656E12, 97.0], [1.792667699E12, 109.0], [1.792667658E12, 140.0], [1.792667701E12, 177.0], [1.792667681E12, 119.0], [1.792667683E12, 103.0], [1.792667685E12, 86.0], [1.792667687E12, 127.0], [1.792667689E12, 100.0], [1.792667648E12, 116.0], [1.792667671E12, 110.0], [1.792667673E12, 136.0], [1.792667675E12, 147.0], [1.792667677E12, 157.0], [1.792667679E12, 138.0], [1.792667659E12, 118.0], [1.792667702E12, 112.0], [1.792667661E12, 103.0], [1.792667704E12, 132.0], [1.792667663E12, 96.0], [1.792667706E12, 149.0], [1.792667665E12, 151.0], [1.792667667E12, 107.0], [1.792667669E12, 183.0], [1.792667649E12, 185.0], [1.792667692E12, 129.0], [1.792667651E12, 162.0], [1.792667694E12, 111.0], [1.792667653E12, 94.0], [1.792667696E12, 110.0], [1.792667655E12, 192.0], [1.792667698E12, 138.0], [1.792667657E12, 175.0], [1.7926677E12, 91.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.792667682E12, 6.0], [1.792667684E12, 5.0], [1.792667686E12, 6.0], [1.792667688E12, 7.0], [1.792667647E12, 7.0], [1.79266769E12, 6.0], [1.79266767E12, 6.0], [1.792667672E12, 6.0], [1.792667674E12, 6.0], [1.792667676E12, 5.0], [1.792667678E12, 6.0], [1.79266768E12, 7.0], [1.79266766E12, 7.0], [1.792667703E12, 7.0], [1.792667662E12, 7.0], [1.792667705E12, 6.0], [1.792667664E12, 7.0], [1.792667707E12, 6.0], [1.792667666E12, 7.0], [1.792667668E12, 6.0], [1.792667691E12, 5.0], [1.79266765E12, 6.0], [1.792667693E12, 5.0], [1.792667652E12, 6.0], [1.792667695E12, 6.0], [1.792667654E12, 6.0], [1.792667697E12, 6.0], [1.792667656E12, 7.0], [1.792667699E12, 6.0], [1.792667658E12, 6.0], [1.792667701E12, 6.0], [1.792667681E12, 7.0], [1.792667683E12, 7.0], [1.792667685E12, 8.0], [1.792667687E12, 7.0], [1.792667689E12, 7.0], [1.792667648E12, 6.0], [1.792667671E12, 7.0], [1.792667673E12, 6.0], [1.792667675E12, 6.0], [1.792667677E12, 6.0], [1.792667679E12, 6.0], [1.792667659E12, 6.0], [1.792667702E12, 6.0], [1.792667661E12, 6.0], [1.792667704E12, 7.0], [1.792667663E12, 5.0], [1.792667706E12, 7.0], [1.792667665E12, 6.0], [1.792667667E12, 7.0], [1.792667669E12, 6.0], [1.792667649E12, 7.0], [1.792667692E12, 7.0], [1.792667651E12, 7.0], [1.792667694E12, 6.0], [1.792667653E12, 8.0], [1.792667696E12, 7.0], [1.792667655E12, 6.0], [1.792667698E12, 7.0], [1.792667657E12, 6.0], [1.7926677E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.792667682E12, 41.0], [1.792667684E12, 44.0], [1.792667686E12, 46.0], [1.792667688E12, 47.0], [1.792667647E12, 42.900000000000006], [1.79266769E12, 50.0], [1.79266767E12, 45.0], [1.792667672E12, 44.0], [1.792667674E12, 48.0], [1.792667676E12, 44.0], [1.792667678E12, 44.0], [1.79266768E12, 43.0], [1.79266766E12, 43.0], [1.792667703E12, 47.0], [1.792667662E12, 45.0], [1.792667705E12, 44.0], [1.792667664E12, 43.0], [1.792667707E12, 46.0], [1.792667666E12, 45.0], [1.792667668E12, 45.0], [1.792667691E12, 47.0], [1.79266765E12, 45.0], [1.792667693E12, 50.0], [1.792667652E12, 43.0], [1.792667695E12, 47.0], [1.792667654E12, 45.0], [1.792667697E12, 44.0], [1.792667656E12, 46.0], [1.792667699E12, 46.0], [1.792667658E12, 47.0], [1.792667701E12, 49.90000000000009], [1.792667681E12, 46.0], [1.792667683E12, 44.0], [1.792667685E12, 43.0], [1.792667687E12, 44.0], [1.792667689E12, 46.0], [1.792667648E12, 47.0], [1.792667671E12, 45.0], [1.792667673E12, 45.0], [1.792667675E12, 46.0], [1.792667677E12, 49.0], [1.792667679E12, 47.0], [1.792667659E12, 44.0], [1.792667702E12, 42.40000000000009], [1.792667661E12, 46.0], [1.792667704E12, 47.0], [1.792667663E12, 46.0], [1.792667706E12, 47.0], [1.792667665E12, 49.0], [1.792667667E12, 45.0], [1.792667669E12, 53.0], [1.792667649E12, 50.0], [1.792667692E12, 45.0], [1.792667651E12, 47.0], [1.792667694E12, 45.0], [1.792667653E12, 42.0], [1.792667696E12, 46.0], [1.792667655E12, 49.0], [1.792667698E12, 44.0], [1.792667657E12, 49.0], [1.7926677E12, 44.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.792667682E12, 57.0], [1.792667684E12, 75.0], [1.792667686E12, 85.0], [1.792667688E12, 74.0], [1.792667647E12, 71.74000000000012], [1.79266769E12, 88.46000000000004], [1.79266767E12, 127.0], [1.792667672E12, 75.1099999999999], [1.792667674E12, 78.12999999999988], [1.792667676E12, 74.0], [1.792667678E12, 72.0], [1.79266768E12, 66.06999999999994], [1.79266766E12, 61.33999999999992], [1.792667703E12, 79.0799999999997], [1.792667662E12, 71.0], [1.792667705E12, 67.0], [1.792667664E12, 64.0], [1.792667707E12, 89.0], [1.792667666E12, 74.40000000000009], [1.792667668E12, 76.34999999999991], [1.792667691E12, 78.0], [1.79266765E12, 77.0], [1.792667693E12, 90.0], [1.792667652E12, 62.0], [1.792667695E12, 77.0], [1.792667654E12, 65.12999999999988], [1.792667697E12, 72.08999999999992], [1.792667656E12, 69.0], [1.792667699E12, 78.0], [1.792667658E12, 80.38000000000011], [1.792667701E12, 92.58999999999992], [1.792667681E12, 82.48000000000002], [1.792667683E12, 72.33999999999992], [1.792667685E12, 65.53999999999996], [1.792667687E12, 74.13999999999987], [1.792667689E12, 74.63999999999987], [1.792667648E12, 71.40000000000009], [1.792667671E12, 76.0], [1.792667673E12, 77.18000000000006], [1.792667675E12, 90.0], [1.792667677E12, 79.22000000000003], [1.792667679E12, 77.0], [1.792667659E12, 73.0], [1.792667702E12, 71.0], [1.792667661E12, 72.92000000000007], [1.792667704E12, 76.0], [1.792667663E12, 74.0], [1.792667706E12, 86.20000000000027], [1.792667665E12, 88.48000000000002], [1.792667667E12, 74.0], [1.792667669E12, 122.0], [1.792667649E12, 136.9000000000001], [1.792667692E12, 73.16000000000008], [1.792667651E12, 113.49000000000001], [1.792667694E12, 75.0], [1.792667653E12, 61.0], [1.792667696E12, 80.0], [1.792667655E12, 149.57000000000016], [1.792667698E12, 72.66000000000008], [1.792667657E12, 84.80000000000018], [1.7926677E12, 69.37999999999988]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.792667682E12, 27.0], [1.792667684E12, 27.0], [1.792667686E12, 26.0], [1.792667688E12, 28.0], [1.792667647E12, 25.0], [1.79266769E12, 26.0], [1.79266767E12, 27.0], [1.792667672E12, 27.0], [1.792667674E12, 26.0], [1.792667676E12, 26.0], [1.792667678E12, 27.0], [1.79266768E12, 27.0], [1.79266766E12, 28.0], [1.792667703E12, 27.0], [1.792667662E12, 27.0], [1.792667705E12, 27.0], [1.792667664E12, 27.0], [1.792667707E12, 26.0], [1.792667666E12, 27.0], [1.792667668E12, 27.0], [1.792667691E12, 27.0], [1.79266765E12, 27.0], [1.792667693E12, 26.0], [1.792667652E12, 27.0], [1.792667695E12, 26.0], [1.792667654E12, 27.0], [1.792667697E12, 27.0], [1.792667656E12, 28.0], [1.792667699E12, 27.0], [1.792667658E12, 28.0], [1.792667701E12, 26.0], [1.792667681E12, 27.0], [1.792667683E12, 27.0], [1.792667685E12, 27.0], [1.792667687E12, 27.0], [1.792667689E12, 28.0], [1.792667648E12, 27.0], [1.792667671E12, 27.0], [1.792667673E12, 27.0], [1.792667675E12, 27.0], [1.792667677E12, 27.0], [1.792667679E12, 27.0], [1.792667659E12, 27.0], [1.792667702E12, 28.0], [1.792667661E12, 27.0], [1.792667704E12, 27.0], [1.792667663E12, 28.0], [1.792667706E12, 26.0], [1.792667665E12, 26.0], [1.792667667E12, 27.0], [1.792667669E12, 26.0], [1.792667649E12, 27.0], [1.792667692E12, 27.0], [1.792667651E12, 27.0], [1.792667694E12, 27.0], [1.792667653E12, 28.0], [1.792667696E12, 27.0], [1.792667655E12, 27.0], [1.792667698E12, 27.0], [1.792667657E12, 26.0], [1.7926677E12, 27.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.792667682E12, 46.0], [1.792667684E12, 54.0], [1.792667686E12, 59.0], [1.792667688E12, 53.899999999999864], [1.792667647E12, 46.44999999999999], [1.79266769E12, 61.0], [1.79266767E12, 55.0], [1.792667672E12, 55.549999999999955], [1.792667674E12, 60.0], [1.792667676E12, 50.0], [1.792667678E12, 51.0], [1.79266768E12, 49.0], [1.79266766E12, 49.0], [1.792667703E12, 59.0], [1.792667662E12, 56.0], [1.792667705E12, 49.0], [1.792667664E12, 48.0], [1.792667707E12, 56.5], [1.792667666E12, 54.0], [1.792667668E12, 55.0], [1.792667691E12, 57.25], [1.79266765E12, 56.549999999999955], [1.792667693E12, 62.0], [1.792667652E12, 49.0], [1.792667695E12, 58.34999999999991], [1.792667654E12, 51.0], [1.792667697E12, 54.0], [1.792667656E12, 56.0], [1.792667699E12, 56.0], [1.792667658E12, 57.0], [1.792667701E12, 60.0], [1.792667681E12, 54.0], [1.792667683E12, 52.69999999999982], [1.792667685E12, 48.0], [1.792667687E12, 51.0], [1.792667689E12, 57.0], [1.792667648E12, 55.0], [1.792667671E12, 53.0], [1.792667673E12, 55.0], [1.792667675E12, 59.0], [1.792667677E12, 59.0], [1.792667679E12, 56.0], [1.792667659E12, 50.5], [1.792667702E12, 50.0], [1.792667661E12, 54.0], [1.792667704E12, 58.0], [1.792667663E12, 56.0], [1.792667706E12, 59.0], [1.792667665E12, 61.0], [1.792667667E12, 51.19999999999982], [1.792667669E12, 68.0], [1.792667649E12, 68.75], [1.792667692E12, 55.0], [1.792667651E12, 63.0], [1.792667694E12, 53.0], [1.792667653E12, 45.0], [1.792667696E12, 58.0], [1.792667655E12, 63.94999999999982], [1.792667698E12, 53.0], [1.792667657E12, 60.0], [1.7926677E12, 53.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667707E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 25.0, "minX": 270.0, "maxY": 28.0, "series": [{"data": [[1389.0, 26.0], [1580.0, 27.0], [1591.0, 26.0], [1604.0, 27.0], [1650.0, 27.0], [1721.0, 28.0], [1726.0, 26.0], [1786.0, 27.0], [1759.0, 27.0], [1788.0, 27.0], [1789.0, 27.0], [1760.0, 27.0], [1761.0, 27.0], [1790.0, 27.0], [1756.0, 27.0], [1754.0, 26.0], [1748.0, 28.0], [1730.0, 28.0], [1735.0, 28.0], [1749.0, 27.0], [1765.0, 27.0], [1774.0, 27.0], [1772.0, 27.0], [1768.0, 27.0], [1775.0, 27.0], [1764.0, 27.0], [1753.0, 27.0], [1751.0, 26.0], [1763.0, 27.0], [1737.0, 28.0], [1779.0, 27.0], [1777.0, 27.0], [1740.0, 26.0], [1781.0, 27.0], [1785.0, 27.0], [1783.0, 27.0], [1780.0, 26.0], [1795.0, 27.0], [1792.0, 27.0], [1813.0, 27.0], [1803.0, 27.0], [270.0, 25.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1813.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 25.0, "minX": 270.0, "maxY": 28.0, "series": [{"data": [[1389.0, 26.0], [1580.0, 27.0], [1591.0, 26.0], [1604.0, 27.0], [1650.0, 27.0], [1721.0, 28.0], [1726.0, 26.0], [1786.0, 27.0], [1759.0, 27.0], [1788.0, 27.0], [1789.0, 27.0], [1760.0, 27.0], [1761.0, 27.0], [1790.0, 27.0], [1756.0, 27.0], [1754.0, 26.0], [1748.0, 28.0], [1730.0, 28.0], [1735.0, 28.0], [1749.0, 27.0], [1765.0, 27.0], [1774.0, 27.0], [1772.0, 27.0], [1768.0, 27.0], [1775.0, 27.0], [1764.0, 27.0], [1753.0, 27.0], [1751.0, 26.0], [1763.0, 27.0], [1737.0, 28.0], [1779.0, 27.0], [1777.0, 27.0], [1740.0, 26.0], [1781.0, 27.0], [1785.0, 27.0], [1783.0, 27.0], [1780.0, 26.0], [1795.0, 27.0], [1792.0, 27.0], [1813.0, 27.0], [1803.0, 27.0], [270.0, 25.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1813.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 320.0, "minX": 1.792667647E12, "maxY": 1813.0, "series": [{"data": [[1.792667682E12, 1813.0], [1.792667684E12, 1803.0], [1.792667686E12, 1754.0], [1.792667688E12, 1720.0], [1.792667647E12, 320.0], [1.79266769E12, 1727.0], [1.79266767E12, 1753.0], [1.792667672E12, 1788.0], [1.792667674E12, 1786.0], [1.792667676E12, 1780.0], [1.792667678E12, 1786.0], [1.79266768E12, 1792.0], [1.79266766E12, 1765.0], [1.792667703E12, 1763.0], [1.792667662E12, 1763.0], [1.792667705E12, 1780.0], [1.792667664E12, 1789.0], [1.792667707E12, 1339.0], [1.792667666E12, 1780.0], [1.792667668E12, 1764.0], [1.792667691E12, 1774.0], [1.79266765E12, 1788.0], [1.792667693E12, 1764.0], [1.792667652E12, 1756.0], [1.792667695E12, 1772.0], [1.792667654E12, 1786.0], [1.792667697E12, 1789.0], [1.792667656E12, 1730.0], [1.792667699E12, 1789.0], [1.792667658E12, 1728.0], [1.792667701E12, 1740.0], [1.792667681E12, 1775.0], [1.792667683E12, 1765.0], [1.792667685E12, 1772.0], [1.792667687E12, 1785.0], [1.792667689E12, 1735.0], [1.792667648E12, 1759.0], [1.792667671E12, 1774.0], [1.792667673E12, 1781.0], [1.792667675E12, 1781.0], [1.792667677E12, 1777.0], [1.792667679E12, 1760.0], [1.792667659E12, 1752.0], [1.792667702E12, 1775.0], [1.792667661E12, 1753.0], [1.792667704E12, 1774.0], [1.792667663E12, 1737.0], [1.792667706E12, 1759.0], [1.792667665E12, 1750.0], [1.792667667E12, 1795.0], [1.792667669E12, 1591.0], [1.792667649E12, 1604.0], [1.792667692E12, 1783.0], [1.792667651E12, 1650.0], [1.792667694E12, 1768.0], [1.792667653E12, 1748.0], [1.792667696E12, 1760.0], [1.792667655E12, 1580.0], [1.792667698E12, 1778.0], [1.792667657E12, 1758.0], [1.7926677E12, 1762.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667707E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 270.0, "minX": 1.792667647E12, "maxY": 1813.0, "series": [{"data": [[1.792667682E12, 1813.0], [1.792667684E12, 1803.0], [1.792667686E12, 1754.0], [1.792667688E12, 1721.0], [1.792667647E12, 270.0], [1.79266769E12, 1726.0], [1.79266767E12, 1753.0], [1.792667672E12, 1788.0], [1.792667674E12, 1786.0], [1.792667676E12, 1780.0], [1.792667678E12, 1786.0], [1.79266768E12, 1792.0], [1.79266766E12, 1765.0], [1.792667703E12, 1763.0], [1.792667662E12, 1763.0], [1.792667705E12, 1779.0], [1.792667664E12, 1789.0], [1.792667707E12, 1389.0], [1.792667666E12, 1779.0], [1.792667668E12, 1764.0], [1.792667691E12, 1774.0], [1.79266765E12, 1788.0], [1.792667693E12, 1764.0], [1.792667652E12, 1756.0], [1.792667695E12, 1772.0], [1.792667654E12, 1786.0], [1.792667697E12, 1790.0], [1.792667656E12, 1730.0], [1.792667699E12, 1790.0], [1.792667658E12, 1730.0], [1.792667701E12, 1740.0], [1.792667681E12, 1775.0], [1.792667683E12, 1765.0], [1.792667685E12, 1772.0], [1.792667687E12, 1785.0], [1.792667689E12, 1735.0], [1.792667648E12, 1759.0], [1.792667671E12, 1774.0], [1.792667673E12, 1781.0], [1.792667675E12, 1781.0], [1.792667677E12, 1777.0], [1.792667679E12, 1760.0], [1.792667659E12, 1749.0], [1.792667702E12, 1775.0], [1.792667661E12, 1753.0], [1.792667704E12, 1775.0], [1.792667663E12, 1737.0], [1.792667706E12, 1759.0], [1.792667665E12, 1751.0], [1.792667667E12, 1795.0], [1.792667669E12, 1591.0], [1.792667649E12, 1604.0], [1.792667692E12, 1783.0], [1.792667651E12, 1650.0], [1.792667694E12, 1768.0], [1.792667653E12, 1748.0], [1.792667696E12, 1760.0], [1.792667655E12, 1580.0], [1.792667698E12, 1777.0], [1.792667657E12, 1759.0], [1.7926677E12, 1761.0]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667707E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 270.0, "minX": 1.792667647E12, "maxY": 1813.0, "series": [{"data": [[1.792667682E12, 1813.0], [1.792667684E12, 1803.0], [1.792667686E12, 1754.0], [1.792667688E12, 1721.0], [1.792667647E12, 270.0], [1.79266769E12, 1726.0], [1.79266767E12, 1753.0], [1.792667672E12, 1788.0], [1.792667674E12, 1786.0], [1.792667676E12, 1780.0], [1.792667678E12, 1786.0], [1.79266768E12, 1792.0], [1.79266766E12, 1765.0], [1.792667703E12, 1763.0], [1.792667662E12, 1763.0], [1.792667705E12, 1779.0], [1.792667664E12, 1789.0], [1.792667707E12, 1389.0], [1.792667666E12, 1779.0], [1.792667668E12, 1764.0], [1.792667691E12, 1774.0], [1.79266765E12, 1788.0], [1.792667693E12, 1764.0], [1.792667652E12, 1756.0], [1.792667695E12, 1772.0], [1.792667654E12, 1786.0], [1.792667697E12, 1790.0], [1.792667656E12, 1730.0], [1.792667699E12, 1790.0], [1.792667658E12, 1730.0], [1.792667701E12, 1740.0], [1.792667681E12, 1775.0], [1.792667683E12, 1765.0], [1.792667685E12, 1772.0], [1.792667687E12, 1785.0], [1.792667689E12, 1735.0], [1.792667648E12, 1759.0], [1.792667671E12, 1774.0], [1.792667673E12, 1781.0], [1.792667675E12, 1781.0], [1.792667677E12, 1777.0], [1.792667679E12, 1760.0], [1.792667659E12, 1749.0], [1.792667702E12, 1775.0], [1.792667661E12, 1753.0], [1.792667704E12, 1775.0], [1.792667663E12, 1737.0], [1.792667706E12, 1759.0], [1.792667665E12, 1751.0], [1.792667667E12, 1795.0], [1.792667669E12, 1591.0], [1.792667649E12, 1604.0], [1.792667692E12, 1783.0], [1.792667651E12, 1650.0], [1.792667694E12, 1768.0], [1.792667653E12, 1748.0], [1.792667696E12, 1760.0], [1.792667655E12, 1580.0], [1.792667698E12, 1777.0], [1.792667657E12, 1759.0], [1.7926677E12, 1761.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667707E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 270.0, "minX": 1.792667647E12, "maxY": 1813.0, "series": [{"data": [[1.792667682E12, 1813.0], [1.792667684E12, 1803.0], [1.792667686E12, 1754.0], [1.792667688E12, 1721.0], [1.792667647E12, 270.0], [1.79266769E12, 1726.0], [1.79266767E12, 1753.0], [1.792667672E12, 1788.0], [1.792667674E12, 1786.0], [1.792667676E12, 1780.0], [1.792667678E12, 1786.0], [1.79266768E12, 1792.0], [1.79266766E12, 1765.0], [1.792667703E12, 1763.0], [1.792667662E12, 1763.0], [1.792667705E12, 1779.0], [1.792667664E12, 1789.0], [1.792667707E12, 1389.0], [1.792667666E12, 1779.0], [1.792667668E12, 1764.0], [1.792667691E12, 1774.0], [1.79266765E12, 1788.0], [1.792667693E12, 1764.0], [1.792667652E12, 1756.0], [1.792667695E12, 1772.0], [1.792667654E12, 1786.0], [1.792667697E12, 1790.0], [1.792667656E12, 1730.0], [1.792667699E12, 1790.0], [1.792667658E12, 1730.0], [1.792667701E12, 1740.0], [1.792667681E12, 1775.0], [1.792667683E12, 1765.0], [1.792667685E12, 1772.0], [1.792667687E12, 1785.0], [1.792667689E12, 1735.0], [1.792667648E12, 1759.0], [1.792667671E12, 1774.0], [1.792667673E12, 1781.0], [1.792667675E12, 1781.0], [1.792667677E12, 1777.0], [1.792667679E12, 1760.0], [1.792667659E12, 1749.0], [1.792667702E12, 1775.0], [1.792667661E12, 1753.0], [1.792667704E12, 1775.0], [1.792667663E12, 1737.0], [1.792667706E12, 1759.0], [1.792667665E12, 1751.0], [1.792667667E12, 1795.0], [1.792667669E12, 1591.0], [1.792667649E12, 1604.0], [1.792667692E12, 1783.0], [1.792667651E12, 1650.0], [1.792667694E12, 1768.0], [1.792667653E12, 1748.0], [1.792667696E12, 1760.0], [1.792667655E12, 1580.0], [1.792667698E12, 1777.0], [1.792667657E12, 1759.0], [1.7926677E12, 1761.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667707E12, "title": "Total Transactions Per Second"}},
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


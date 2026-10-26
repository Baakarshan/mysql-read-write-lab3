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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 462.0, "series": [{"data": [[0.0, 5.0], [0.1, 7.0], [0.2, 7.0], [0.3, 8.0], [0.4, 8.0], [0.5, 8.0], [0.6, 8.0], [0.7, 8.0], [0.8, 8.0], [0.9, 8.0], [1.0, 8.0], [1.1, 8.0], [1.2, 9.0], [1.3, 9.0], [1.4, 9.0], [1.5, 9.0], [1.6, 9.0], [1.7, 9.0], [1.8, 9.0], [1.9, 9.0], [2.0, 9.0], [2.1, 9.0], [2.2, 9.0], [2.3, 9.0], [2.4, 9.0], [2.5, 9.0], [2.6, 9.0], [2.7, 9.0], [2.8, 9.0], [2.9, 10.0], [3.0, 10.0], [3.1, 10.0], [3.2, 10.0], [3.3, 10.0], [3.4, 10.0], [3.5, 10.0], [3.6, 10.0], [3.7, 10.0], [3.8, 10.0], [3.9, 10.0], [4.0, 10.0], [4.1, 10.0], [4.2, 10.0], [4.3, 10.0], [4.4, 10.0], [4.5, 10.0], [4.6, 10.0], [4.7, 10.0], [4.8, 10.0], [4.9, 10.0], [5.0, 10.0], [5.1, 10.0], [5.2, 10.0], [5.3, 10.0], [5.4, 10.0], [5.5, 10.0], [5.6, 10.0], [5.7, 10.0], [5.8, 11.0], [5.9, 11.0], [6.0, 11.0], [6.1, 11.0], [6.2, 11.0], [6.3, 11.0], [6.4, 11.0], [6.5, 11.0], [6.6, 11.0], [6.7, 11.0], [6.8, 11.0], [6.9, 11.0], [7.0, 11.0], [7.1, 11.0], [7.2, 11.0], [7.3, 11.0], [7.4, 11.0], [7.5, 11.0], [7.6, 11.0], [7.7, 11.0], [7.8, 11.0], [7.9, 11.0], [8.0, 11.0], [8.1, 11.0], [8.2, 11.0], [8.3, 11.0], [8.4, 11.0], [8.5, 11.0], [8.6, 11.0], [8.7, 11.0], [8.8, 11.0], [8.9, 11.0], [9.0, 11.0], [9.1, 11.0], [9.2, 11.0], [9.3, 12.0], [9.4, 12.0], [9.5, 12.0], [9.6, 12.0], [9.7, 12.0], [9.8, 12.0], [9.9, 12.0], [10.0, 12.0], [10.1, 12.0], [10.2, 12.0], [10.3, 12.0], [10.4, 12.0], [10.5, 12.0], [10.6, 12.0], [10.7, 12.0], [10.8, 12.0], [10.9, 12.0], [11.0, 12.0], [11.1, 12.0], [11.2, 12.0], [11.3, 12.0], [11.4, 12.0], [11.5, 12.0], [11.6, 12.0], [11.7, 12.0], [11.8, 12.0], [11.9, 12.0], [12.0, 12.0], [12.1, 12.0], [12.2, 12.0], [12.3, 12.0], [12.4, 12.0], [12.5, 12.0], [12.6, 12.0], [12.7, 12.0], [12.8, 12.0], [12.9, 13.0], [13.0, 13.0], [13.1, 13.0], [13.2, 13.0], [13.3, 13.0], [13.4, 13.0], [13.5, 13.0], [13.6, 13.0], [13.7, 13.0], [13.8, 13.0], [13.9, 13.0], [14.0, 13.0], [14.1, 13.0], [14.2, 13.0], [14.3, 13.0], [14.4, 13.0], [14.5, 13.0], [14.6, 13.0], [14.7, 13.0], [14.8, 13.0], [14.9, 13.0], [15.0, 13.0], [15.1, 13.0], [15.2, 13.0], [15.3, 13.0], [15.4, 13.0], [15.5, 13.0], [15.6, 13.0], [15.7, 13.0], [15.8, 13.0], [15.9, 13.0], [16.0, 13.0], [16.1, 14.0], [16.2, 14.0], [16.3, 14.0], [16.4, 14.0], [16.5, 14.0], [16.6, 14.0], [16.7, 14.0], [16.8, 14.0], [16.9, 14.0], [17.0, 14.0], [17.1, 14.0], [17.2, 14.0], [17.3, 14.0], [17.4, 14.0], [17.5, 14.0], [17.6, 14.0], [17.7, 14.0], [17.8, 14.0], [17.9, 14.0], [18.0, 14.0], [18.1, 14.0], [18.2, 14.0], [18.3, 14.0], [18.4, 14.0], [18.5, 14.0], [18.6, 14.0], [18.7, 15.0], [18.8, 15.0], [18.9, 15.0], [19.0, 15.0], [19.1, 15.0], [19.2, 15.0], [19.3, 15.0], [19.4, 15.0], [19.5, 15.0], [19.6, 15.0], [19.7, 15.0], [19.8, 15.0], [19.9, 15.0], [20.0, 15.0], [20.1, 15.0], [20.2, 15.0], [20.3, 15.0], [20.4, 15.0], [20.5, 15.0], [20.6, 15.0], [20.7, 15.0], [20.8, 16.0], [20.9, 16.0], [21.0, 16.0], [21.1, 16.0], [21.2, 16.0], [21.3, 16.0], [21.4, 16.0], [21.5, 16.0], [21.6, 16.0], [21.7, 16.0], [21.8, 16.0], [21.9, 16.0], [22.0, 16.0], [22.1, 16.0], [22.2, 16.0], [22.3, 16.0], [22.4, 17.0], [22.5, 17.0], [22.6, 17.0], [22.7, 17.0], [22.8, 17.0], [22.9, 17.0], [23.0, 17.0], [23.1, 17.0], [23.2, 17.0], [23.3, 17.0], [23.4, 17.0], [23.5, 17.0], [23.6, 17.0], [23.7, 18.0], [23.8, 18.0], [23.9, 18.0], [24.0, 18.0], [24.1, 18.0], [24.2, 18.0], [24.3, 18.0], [24.4, 18.0], [24.5, 18.0], [24.6, 19.0], [24.7, 19.0], [24.8, 19.0], [24.9, 19.0], [25.0, 19.0], [25.1, 19.0], [25.2, 19.0], [25.3, 19.0], [25.4, 20.0], [25.5, 20.0], [25.6, 20.0], [25.7, 20.0], [25.8, 20.0], [25.9, 20.0], [26.0, 21.0], [26.1, 21.0], [26.2, 21.0], [26.3, 21.0], [26.4, 21.0], [26.5, 22.0], [26.6, 22.0], [26.7, 22.0], [26.8, 22.0], [26.9, 23.0], [27.0, 23.0], [27.1, 23.0], [27.2, 24.0], [27.3, 24.0], [27.4, 25.0], [27.5, 26.0], [27.6, 28.0], [27.7, 43.0], [27.8, 46.0], [27.9, 47.0], [28.0, 47.0], [28.1, 48.0], [28.2, 48.0], [28.3, 48.0], [28.4, 48.0], [28.5, 49.0], [28.6, 49.0], [28.7, 49.0], [28.8, 49.0], [28.9, 49.0], [29.0, 49.0], [29.1, 50.0], [29.2, 50.0], [29.3, 50.0], [29.4, 50.0], [29.5, 50.0], [29.6, 50.0], [29.7, 50.0], [29.8, 50.0], [29.9, 50.0], [30.0, 51.0], [30.1, 51.0], [30.2, 51.0], [30.3, 51.0], [30.4, 51.0], [30.5, 51.0], [30.6, 51.0], [30.7, 51.0], [30.8, 51.0], [30.9, 51.0], [31.0, 51.0], [31.1, 51.0], [31.2, 51.0], [31.3, 51.0], [31.4, 51.0], [31.5, 52.0], [31.6, 52.0], [31.7, 52.0], [31.8, 52.0], [31.9, 52.0], [32.0, 52.0], [32.1, 52.0], [32.2, 52.0], [32.3, 52.0], [32.4, 52.0], [32.5, 52.0], [32.6, 52.0], [32.7, 52.0], [32.8, 52.0], [32.9, 52.0], [33.0, 52.0], [33.1, 52.0], [33.2, 52.0], [33.3, 53.0], [33.4, 53.0], [33.5, 53.0], [33.6, 53.0], [33.7, 53.0], [33.8, 53.0], [33.9, 53.0], [34.0, 53.0], [34.1, 53.0], [34.2, 53.0], [34.3, 53.0], [34.4, 53.0], [34.5, 53.0], [34.6, 53.0], [34.7, 53.0], [34.8, 53.0], [34.9, 53.0], [35.0, 53.0], [35.1, 53.0], [35.2, 53.0], [35.3, 53.0], [35.4, 53.0], [35.5, 53.0], [35.6, 53.0], [35.7, 54.0], [35.8, 54.0], [35.9, 54.0], [36.0, 54.0], [36.1, 54.0], [36.2, 54.0], [36.3, 54.0], [36.4, 54.0], [36.5, 54.0], [36.6, 54.0], [36.7, 54.0], [36.8, 54.0], [36.9, 54.0], [37.0, 54.0], [37.1, 54.0], [37.2, 54.0], [37.3, 54.0], [37.4, 54.0], [37.5, 54.0], [37.6, 54.0], [37.7, 54.0], [37.8, 54.0], [37.9, 54.0], [38.0, 54.0], [38.1, 54.0], [38.2, 54.0], [38.3, 54.0], [38.4, 54.0], [38.5, 55.0], [38.6, 55.0], [38.7, 55.0], [38.8, 55.0], [38.9, 55.0], [39.0, 55.0], [39.1, 55.0], [39.2, 55.0], [39.3, 55.0], [39.4, 55.0], [39.5, 55.0], [39.6, 55.0], [39.7, 55.0], [39.8, 55.0], [39.9, 55.0], [40.0, 55.0], [40.1, 55.0], [40.2, 55.0], [40.3, 55.0], [40.4, 55.0], [40.5, 55.0], [40.6, 55.0], [40.7, 55.0], [40.8, 55.0], [40.9, 55.0], [41.0, 55.0], [41.1, 55.0], [41.2, 55.0], [41.3, 55.0], [41.4, 55.0], [41.5, 55.0], [41.6, 55.0], [41.7, 55.0], [41.8, 55.0], [41.9, 56.0], [42.0, 56.0], [42.1, 56.0], [42.2, 56.0], [42.3, 56.0], [42.4, 56.0], [42.5, 56.0], [42.6, 56.0], [42.7, 56.0], [42.8, 56.0], [42.9, 56.0], [43.0, 56.0], [43.1, 56.0], [43.2, 56.0], [43.3, 56.0], [43.4, 56.0], [43.5, 56.0], [43.6, 56.0], [43.7, 56.0], [43.8, 56.0], [43.9, 56.0], [44.0, 56.0], [44.1, 56.0], [44.2, 56.0], [44.3, 56.0], [44.4, 56.0], [44.5, 56.0], [44.6, 56.0], [44.7, 56.0], [44.8, 56.0], [44.9, 56.0], [45.0, 56.0], [45.1, 56.0], [45.2, 56.0], [45.3, 56.0], [45.4, 56.0], [45.5, 56.0], [45.6, 56.0], [45.7, 57.0], [45.8, 57.0], [45.9, 57.0], [46.0, 57.0], [46.1, 57.0], [46.2, 57.0], [46.3, 57.0], [46.4, 57.0], [46.5, 57.0], [46.6, 57.0], [46.7, 57.0], [46.8, 57.0], [46.9, 57.0], [47.0, 57.0], [47.1, 57.0], [47.2, 57.0], [47.3, 57.0], [47.4, 57.0], [47.5, 57.0], [47.6, 57.0], [47.7, 57.0], [47.8, 57.0], [47.9, 57.0], [48.0, 57.0], [48.1, 57.0], [48.2, 57.0], [48.3, 57.0], [48.4, 57.0], [48.5, 57.0], [48.6, 57.0], [48.7, 57.0], [48.8, 57.0], [48.9, 57.0], [49.0, 57.0], [49.1, 57.0], [49.2, 57.0], [49.3, 57.0], [49.4, 57.0], [49.5, 57.0], [49.6, 57.0], [49.7, 57.0], [49.8, 57.0], [49.9, 58.0], [50.0, 58.0], [50.1, 58.0], [50.2, 58.0], [50.3, 58.0], [50.4, 58.0], [50.5, 58.0], [50.6, 58.0], [50.7, 58.0], [50.8, 58.0], [50.9, 58.0], [51.0, 58.0], [51.1, 58.0], [51.2, 58.0], [51.3, 58.0], [51.4, 58.0], [51.5, 58.0], [51.6, 58.0], [51.7, 58.0], [51.8, 58.0], [51.9, 58.0], [52.0, 58.0], [52.1, 58.0], [52.2, 58.0], [52.3, 58.0], [52.4, 58.0], [52.5, 58.0], [52.6, 58.0], [52.7, 58.0], [52.8, 58.0], [52.9, 58.0], [53.0, 58.0], [53.1, 58.0], [53.2, 58.0], [53.3, 58.0], [53.4, 58.0], [53.5, 58.0], [53.6, 58.0], [53.7, 58.0], [53.8, 58.0], [53.9, 58.0], [54.0, 58.0], [54.1, 58.0], [54.2, 58.0], [54.3, 58.0], [54.4, 59.0], [54.5, 59.0], [54.6, 59.0], [54.7, 59.0], [54.8, 59.0], [54.9, 59.0], [55.0, 59.0], [55.1, 59.0], [55.2, 59.0], [55.3, 59.0], [55.4, 59.0], [55.5, 59.0], [55.6, 59.0], [55.7, 59.0], [55.8, 59.0], [55.9, 59.0], [56.0, 59.0], [56.1, 59.0], [56.2, 59.0], [56.3, 59.0], [56.4, 59.0], [56.5, 59.0], [56.6, 59.0], [56.7, 59.0], [56.8, 59.0], [56.9, 59.0], [57.0, 59.0], [57.1, 59.0], [57.2, 59.0], [57.3, 59.0], [57.4, 59.0], [57.5, 59.0], [57.6, 59.0], [57.7, 59.0], [57.8, 59.0], [57.9, 59.0], [58.0, 59.0], [58.1, 59.0], [58.2, 59.0], [58.3, 59.0], [58.4, 59.0], [58.5, 59.0], [58.6, 59.0], [58.7, 59.0], [58.8, 60.0], [58.9, 60.0], [59.0, 60.0], [59.1, 60.0], [59.2, 60.0], [59.3, 60.0], [59.4, 60.0], [59.5, 60.0], [59.6, 60.0], [59.7, 60.0], [59.8, 60.0], [59.9, 60.0], [60.0, 60.0], [60.1, 60.0], [60.2, 60.0], [60.3, 60.0], [60.4, 60.0], [60.5, 60.0], [60.6, 60.0], [60.7, 60.0], [60.8, 60.0], [60.9, 60.0], [61.0, 60.0], [61.1, 60.0], [61.2, 60.0], [61.3, 60.0], [61.4, 60.0], [61.5, 60.0], [61.6, 60.0], [61.7, 60.0], [61.8, 60.0], [61.9, 60.0], [62.0, 60.0], [62.1, 60.0], [62.2, 60.0], [62.3, 60.0], [62.4, 60.0], [62.5, 60.0], [62.6, 60.0], [62.7, 60.0], [62.8, 60.0], [62.9, 60.0], [63.0, 61.0], [63.1, 61.0], [63.2, 61.0], [63.3, 61.0], [63.4, 61.0], [63.5, 61.0], [63.6, 61.0], [63.7, 61.0], [63.8, 61.0], [63.9, 61.0], [64.0, 61.0], [64.1, 61.0], [64.2, 61.0], [64.3, 61.0], [64.4, 61.0], [64.5, 61.0], [64.6, 61.0], [64.7, 61.0], [64.8, 61.0], [64.9, 61.0], [65.0, 61.0], [65.1, 61.0], [65.2, 61.0], [65.3, 61.0], [65.4, 61.0], [65.5, 61.0], [65.6, 61.0], [65.7, 61.0], [65.8, 61.0], [65.9, 61.0], [66.0, 61.0], [66.1, 61.0], [66.2, 61.0], [66.3, 61.0], [66.4, 61.0], [66.5, 61.0], [66.6, 61.0], [66.7, 62.0], [66.8, 62.0], [66.9, 62.0], [67.0, 62.0], [67.1, 62.0], [67.2, 62.0], [67.3, 62.0], [67.4, 62.0], [67.5, 62.0], [67.6, 62.0], [67.7, 62.0], [67.8, 62.0], [67.9, 62.0], [68.0, 62.0], [68.1, 62.0], [68.2, 62.0], [68.3, 62.0], [68.4, 62.0], [68.5, 62.0], [68.6, 62.0], [68.7, 62.0], [68.8, 62.0], [68.9, 62.0], [69.0, 62.0], [69.1, 62.0], [69.2, 62.0], [69.3, 62.0], [69.4, 62.0], [69.5, 62.0], [69.6, 62.0], [69.7, 62.0], [69.8, 62.0], [69.9, 63.0], [70.0, 63.0], [70.1, 63.0], [70.2, 63.0], [70.3, 63.0], [70.4, 63.0], [70.5, 63.0], [70.6, 63.0], [70.7, 63.0], [70.8, 63.0], [70.9, 63.0], [71.0, 63.0], [71.1, 63.0], [71.2, 63.0], [71.3, 63.0], [71.4, 63.0], [71.5, 63.0], [71.6, 63.0], [71.7, 63.0], [71.8, 63.0], [71.9, 63.0], [72.0, 63.0], [72.1, 63.0], [72.2, 63.0], [72.3, 63.0], [72.4, 63.0], [72.5, 64.0], [72.6, 64.0], [72.7, 64.0], [72.8, 64.0], [72.9, 64.0], [73.0, 64.0], [73.1, 64.0], [73.2, 64.0], [73.3, 64.0], [73.4, 64.0], [73.5, 64.0], [73.6, 64.0], [73.7, 64.0], [73.8, 64.0], [73.9, 64.0], [74.0, 64.0], [74.1, 64.0], [74.2, 64.0], [74.3, 64.0], [74.4, 65.0], [74.5, 65.0], [74.6, 65.0], [74.7, 65.0], [74.8, 65.0], [74.9, 65.0], [75.0, 65.0], [75.1, 65.0], [75.2, 65.0], [75.3, 65.0], [75.4, 65.0], [75.5, 65.0], [75.6, 65.0], [75.7, 65.0], [75.8, 65.0], [75.9, 66.0], [76.0, 66.0], [76.1, 66.0], [76.2, 66.0], [76.3, 66.0], [76.4, 66.0], [76.5, 66.0], [76.6, 66.0], [76.7, 66.0], [76.8, 66.0], [76.9, 66.0], [77.0, 67.0], [77.1, 67.0], [77.2, 67.0], [77.3, 67.0], [77.4, 67.0], [77.5, 67.0], [77.6, 67.0], [77.7, 67.0], [77.8, 67.0], [77.9, 68.0], [78.0, 68.0], [78.1, 68.0], [78.2, 68.0], [78.3, 68.0], [78.4, 69.0], [78.5, 69.0], [78.6, 69.0], [78.7, 69.0], [78.8, 69.0], [78.9, 70.0], [79.0, 70.0], [79.1, 70.0], [79.2, 71.0], [79.3, 71.0], [79.4, 72.0], [79.5, 72.0], [79.6, 73.0], [79.7, 74.0], [79.8, 75.0], [79.9, 82.0], [80.0, 91.0], [80.1, 93.0], [80.2, 94.0], [80.3, 94.0], [80.4, 95.0], [80.5, 95.0], [80.6, 95.0], [80.7, 96.0], [80.8, 96.0], [80.9, 96.0], [81.0, 96.0], [81.1, 97.0], [81.2, 97.0], [81.3, 97.0], [81.4, 97.0], [81.5, 97.0], [81.6, 97.0], [81.7, 98.0], [81.8, 98.0], [81.9, 98.0], [82.0, 98.0], [82.1, 98.0], [82.2, 98.0], [82.3, 98.0], [82.4, 98.0], [82.5, 99.0], [82.6, 99.0], [82.7, 99.0], [82.8, 99.0], [82.9, 99.0], [83.0, 99.0], [83.1, 99.0], [83.2, 99.0], [83.3, 99.0], [83.4, 100.0], [83.5, 100.0], [83.6, 100.0], [83.7, 100.0], [83.8, 100.0], [83.9, 100.0], [84.0, 100.0], [84.1, 100.0], [84.2, 100.0], [84.3, 100.0], [84.4, 100.0], [84.5, 101.0], [84.6, 101.0], [84.7, 101.0], [84.8, 101.0], [84.9, 101.0], [85.0, 101.0], [85.1, 101.0], [85.2, 101.0], [85.3, 101.0], [85.4, 101.0], [85.5, 101.0], [85.6, 102.0], [85.7, 102.0], [85.8, 102.0], [85.9, 102.0], [86.0, 102.0], [86.1, 102.0], [86.2, 102.0], [86.3, 102.0], [86.4, 102.0], [86.5, 102.0], [86.6, 102.0], [86.7, 103.0], [86.8, 103.0], [86.9, 103.0], [87.0, 103.0], [87.1, 103.0], [87.2, 103.0], [87.3, 103.0], [87.4, 103.0], [87.5, 103.0], [87.6, 103.0], [87.7, 103.0], [87.8, 104.0], [87.9, 104.0], [88.0, 104.0], [88.1, 104.0], [88.2, 104.0], [88.3, 104.0], [88.4, 104.0], [88.5, 104.0], [88.6, 104.0], [88.7, 104.0], [88.8, 105.0], [88.9, 105.0], [89.0, 105.0], [89.1, 105.0], [89.2, 105.0], [89.3, 105.0], [89.4, 105.0], [89.5, 105.0], [89.6, 105.0], [89.7, 106.0], [89.8, 106.0], [89.9, 106.0], [90.0, 106.0], [90.1, 106.0], [90.2, 106.0], [90.3, 106.0], [90.4, 106.0], [90.5, 106.0], [90.6, 107.0], [90.7, 107.0], [90.8, 107.0], [90.9, 107.0], [91.0, 107.0], [91.1, 107.0], [91.2, 107.0], [91.3, 108.0], [91.4, 108.0], [91.5, 108.0], [91.6, 108.0], [91.7, 108.0], [91.8, 108.0], [91.9, 109.0], [92.0, 109.0], [92.1, 109.0], [92.2, 109.0], [92.3, 109.0], [92.4, 109.0], [92.5, 110.0], [92.6, 110.0], [92.7, 110.0], [92.8, 110.0], [92.9, 111.0], [93.0, 111.0], [93.1, 111.0], [93.2, 112.0], [93.3, 112.0], [93.4, 112.0], [93.5, 113.0], [93.6, 113.0], [93.7, 114.0], [93.8, 115.0], [93.9, 115.0], [94.0, 116.0], [94.1, 117.0], [94.2, 119.0], [94.3, 122.0], [94.4, 133.0], [94.5, 137.0], [94.6, 139.0], [94.7, 141.0], [94.8, 142.0], [94.9, 142.0], [95.0, 143.0], [95.1, 144.0], [95.2, 144.0], [95.3, 145.0], [95.4, 145.0], [95.5, 146.0], [95.6, 146.0], [95.7, 146.0], [95.8, 147.0], [95.9, 147.0], [96.0, 148.0], [96.1, 148.0], [96.2, 148.0], [96.3, 149.0], [96.4, 149.0], [96.5, 149.0], [96.6, 150.0], [96.7, 150.0], [96.8, 151.0], [96.9, 151.0], [97.0, 151.0], [97.1, 152.0], [97.2, 152.0], [97.3, 153.0], [97.4, 153.0], [97.5, 154.0], [97.6, 154.0], [97.7, 155.0], [97.8, 155.0], [97.9, 156.0], [98.0, 157.0], [98.1, 158.0], [98.2, 159.0], [98.3, 161.0], [98.4, 165.0], [98.5, 183.0], [98.6, 187.0], [98.7, 189.0], [98.8, 191.0], [98.9, 192.0], [99.0, 194.0], [99.1, 195.0], [99.2, 197.0], [99.3, 198.0], [99.4, 201.0], [99.5, 204.0], [99.6, 221.0], [99.7, 236.0], [99.8, 245.0], [99.9, 278.0], [100.0, 462.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 85084.0, "series": [{"data": [[0.0, 85084.0], [300.0, 37.0], [100.0, 16349.0], [200.0, 634.0], [400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 102105.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 102105.0, "series": [{"data": [[0.0, 102105.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 77.20418848167543, "minX": 1.792667905E12, "maxY": 100.0, "series": [{"data": [[1.792667938E12, 100.0], [1.79266794E12, 100.0], [1.792667942E12, 100.0], [1.792667944E12, 100.0], [1.792667946E12, 100.0], [1.792667926E12, 100.0], [1.792667928E12, 100.0], [1.79266793E12, 100.0], [1.792667932E12, 100.0], [1.792667934E12, 100.0], [1.792667936E12, 100.0], [1.792667916E12, 100.0], [1.792667959E12, 100.0], [1.792667918E12, 100.0], [1.792667961E12, 100.0], [1.79266792E12, 100.0], [1.792667963E12, 100.0], [1.792667922E12, 100.0], [1.792667965E12, 77.20418848167543], [1.792667924E12, 100.0], [1.792667947E12, 100.0], [1.792667906E12, 100.0], [1.792667949E12, 100.0], [1.792667908E12, 100.0], [1.792667951E12, 100.0], [1.79266791E12, 100.0], [1.792667953E12, 100.0], [1.792667912E12, 100.0], [1.792667955E12, 100.0], [1.792667914E12, 100.0], [1.792667957E12, 100.0], [1.792667937E12, 100.0], [1.792667939E12, 100.0], [1.792667941E12, 100.0], [1.792667943E12, 100.0], [1.792667945E12, 100.0], [1.792667927E12, 100.0], [1.792667929E12, 100.0], [1.792667931E12, 100.0], [1.792667933E12, 100.0], [1.792667935E12, 100.0], [1.792667915E12, 100.0], [1.792667958E12, 100.0], [1.792667917E12, 100.0], [1.79266796E12, 100.0], [1.792667919E12, 100.0], [1.792667962E12, 100.0], [1.792667921E12, 100.0], [1.792667964E12, 99.99941451990631], [1.792667923E12, 100.0], [1.792667925E12, 100.0], [1.792667905E12, 100.0], [1.792667948E12, 100.0], [1.792667907E12, 100.0], [1.79266795E12, 100.0], [1.792667909E12, 100.0], [1.792667952E12, 100.0], [1.792667911E12, 100.0], [1.792667954E12, 100.0], [1.792667913E12, 100.0], [1.792667956E12, 100.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667965E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 14.0, "minX": 40.0, "maxY": 176.0, "series": [{"data": [[40.0, 63.0], [43.0, 98.0], [49.0, 44.0], [48.0, 60.5], [51.0, 44.0], [53.0, 57.0], [52.0, 71.66666666666667], [55.0, 50.5], [54.0, 69.33333333333334], [57.0, 64.85714285714286], [56.0, 176.0], [59.0, 89.0], [58.0, 99.0], [61.0, 89.85714285714285], [60.0, 56.0], [63.0, 127.5], [62.0, 49.0], [66.0, 71.83333333333334], [65.0, 80.0], [64.0, 54.0], [71.0, 58.0], [70.0, 75.5], [69.0, 47.5], [68.0, 101.66666666666667], [75.0, 50.0], [74.0, 54.0], [73.0, 53.0], [72.0, 68.0], [79.0, 43.25], [77.0, 60.83333333333333], [76.0, 38.142857142857146], [83.0, 64.16666666666667], [82.0, 116.5], [81.0, 50.0], [80.0, 41.0], [87.0, 14.0], [86.0, 48.25], [84.0, 90.33333333333333], [91.0, 56.8], [90.0, 55.416666666666664], [89.0, 71.2], [88.0, 36.75], [95.0, 14.5], [94.0, 49.57142857142857], [93.0, 34.5], [92.0, 50.142857142857146], [99.0, 78.0], [97.0, 114.5], [96.0, 39.99999999999999], [100.0, 58.62447381590174]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[99.95734782821593, 58.630870182655066]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 80220.0, "minX": 1.792667905E12, "maxY": 831222.0, "series": [{"data": [[1.792667938E12, 797694.0], [1.79266794E12, 790729.0], [1.792667942E12, 798729.0], [1.792667944E12, 743716.0], [1.792667946E12, 792683.0], [1.792667926E12, 808480.0], [1.792667928E12, 803585.0], [1.79266793E12, 811972.0], [1.792667932E12, 806671.0], [1.792667934E12, 808354.0], [1.792667936E12, 809099.0], [1.792667916E12, 814874.0], [1.792667959E12, 828973.0], [1.792667918E12, 810695.0], [1.792667961E12, 820307.0], [1.79266792E12, 808925.0], [1.792667963E12, 824640.0], [1.792667922E12, 799793.0], [1.792667965E12, 90696.0], [1.792667924E12, 806429.0], [1.792667947E12, 792596.0], [1.792667906E12, 824499.0], [1.792667949E12, 788959.0], [1.792667908E12, 810144.0], [1.792667951E12, 792509.0], [1.79266791E12, 820446.0], [1.792667953E12, 798758.0], [1.792667912E12, 821655.0], [1.792667955E12, 803972.0], [1.792667914E12, 812514.0], [1.792667957E12, 815140.0], [1.792667937E12, 803740.0], [1.792667939E12, 781046.0], [1.792667941E12, 803972.0], [1.792667943E12, 774913.0], [1.792667945E12, 794260.0], [1.792667927E12, 813220.0], [1.792667929E12, 815019.0], [1.792667931E12, 805549.0], [1.792667933E12, 797607.0], [1.792667935E12, 817273.0], [1.792667915E12, 822226.0], [1.792667958E12, 806144.0], [1.792667917E12, 814100.0], [1.79266796E12, 817399.0], [1.792667919E12, 807977.0], [1.792667962E12, 819629.0], [1.792667921E12, 799948.0], [1.792667964E12, 810865.0], [1.792667923E12, 801631.0], [1.792667925E12, 800867.0], [1.792667905E12, 708485.0], [1.792667948E12, 800683.0], [1.792667907E12, 829568.0], [1.79266795E12, 792451.0], [1.792667909E12, 819798.0], [1.792667952E12, 796891.0], [1.792667911E12, 831222.0], [1.792667954E12, 811353.0], [1.792667913E12, 820388.0], [1.792667956E12, 806932.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.792667938E12, 707280.0], [1.79266794E12, 700980.0], [1.792667942E12, 708120.0], [1.792667944E12, 659400.0], [1.792667946E12, 702660.0], [1.792667926E12, 716940.0], [1.792667928E12, 712320.0], [1.79266793E12, 719880.0], [1.792667932E12, 715260.0], [1.792667934E12, 716520.0], [1.792667936E12, 717360.0], [1.792667916E12, 722400.0], [1.792667959E12, 733320.0], [1.792667918E12, 718620.0], [1.792667961E12, 725760.0], [1.79266792E12, 717360.0], [1.792667963E12, 729540.0], [1.792667922E12, 708960.0], [1.792667965E12, 80220.0], [1.792667924E12, 714840.0], [1.792667947E12, 702660.0], [1.792667906E12, 730800.0], [1.792667949E12, 699720.0], [1.792667908E12, 718620.0], [1.792667951E12, 702660.0], [1.79266791E12, 727440.0], [1.792667953E12, 708120.0], [1.792667912E12, 728280.0], [1.792667955E12, 712740.0], [1.792667914E12, 720720.0], [1.792667957E12, 721140.0], [1.792667937E12, 712740.0], [1.792667939E12, 692580.0], [1.792667941E12, 712740.0], [1.792667943E12, 687120.0], [1.792667945E12, 704340.0], [1.792667927E12, 721140.0], [1.792667929E12, 722400.0], [1.792667931E12, 714420.0], [1.792667933E12, 707280.0], [1.792667935E12, 724500.0], [1.792667915E12, 729120.0], [1.792667958E12, 713160.0], [1.792667917E12, 721560.0], [1.79266796E12, 723240.0], [1.792667919E12, 716520.0], [1.792667962E12, 725340.0], [1.792667921E12, 709380.0], [1.792667964E12, 717360.0], [1.792667923E12, 710640.0], [1.792667925E12, 710220.0], [1.792667905E12, 627900.0], [1.792667948E12, 709800.0], [1.792667907E12, 735420.0], [1.79266795E12, 702660.0], [1.792667909E12, 727020.0], [1.792667952E12, 706440.0], [1.792667911E12, 736680.0], [1.792667954E12, 719460.0], [1.792667913E12, 727440.0], [1.792667956E12, 714840.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667965E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 56.22215876641916, "minX": 1.792667905E12, "maxY": 63.39617834394901, "series": [{"data": [[1.792667938E12, 58.88479809976255], [1.79266794E12, 59.720191731575746], [1.792667942E12, 58.64531435349938], [1.792667944E12, 63.39617834394901], [1.792667946E12, 59.79736999402274], [1.792667926E12, 58.18219097832452], [1.792667928E12, 59.59080188679249], [1.79266793E12, 58.74387397899653], [1.792667932E12, 58.00763358778632], [1.792667934E12, 58.57854630715133], [1.792667936E12, 58.44379391100701], [1.792667916E12, 57.94244186046514], [1.792667959E12, 56.619129438717145], [1.792667918E12, 57.81531268264174], [1.792667961E12, 57.5133101851853], [1.79266792E12, 58.10128805620604], [1.792667963E12, 57.338514680483556], [1.792667922E12, 59.58767772511852], [1.792667965E12, 61.790575916230374], [1.792667924E12, 59.1339600470036], [1.792667947E12, 59.20980274955172], [1.792667906E12, 57.78160919540223], [1.792667949E12, 60.610444177671084], [1.792667908E12, 58.1192285213326], [1.792667951E12, 59.80753138075309], [1.79266791E12, 56.76443418013852], [1.792667953E12, 59.002372479240854], [1.792667912E12, 57.95732410611305], [1.792667955E12, 58.74779021803182], [1.792667914E12, 57.55011655011656], [1.792667957E12, 57.86488060570757], [1.792667937E12, 59.07307012374774], [1.792667939E12, 59.844147968465684], [1.792667941E12, 60.072480848556275], [1.792667943E12, 61.103911980440074], [1.792667945E12, 59.63029218843174], [1.792667927E12, 58.080955154338945], [1.792667929E12, 57.13779069767439], [1.792667931E12, 59.30629041740148], [1.792667933E12, 59.36995249406173], [1.792667935E12, 57.92637681159419], [1.792667915E12, 58.06336405529955], [1.792667958E12, 59.21378091872791], [1.792667917E12, 58.66938300349252], [1.79266796E12, 57.43147502903604], [1.792667919E12, 58.435521688159476], [1.792667962E12, 58.510712217718535], [1.792667921E12, 59.29484902309061], [1.792667964E12, 58.63466042154562], [1.792667923E12, 58.421985815602916], [1.792667925E12, 58.728562980484966], [1.792667905E12, 56.633444816053455], [1.792667948E12, 59.03964497041425], [1.792667907E12, 56.22215876641916], [1.79266795E12, 59.727435744172176], [1.792667909E12, 58.47487001733092], [1.792667952E12, 59.20868014268724], [1.792667911E12, 57.701254275940684], [1.792667954E12, 58.08698190309409], [1.792667913E12, 57.26674364896072], [1.792667956E12, 59.56169212690949]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667965E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 56.22044545973728, "minX": 1.792667905E12, "maxY": 63.39554140127377, "series": [{"data": [[1.792667938E12, 58.88301662707841], [1.79266794E12, 59.71839424805278], [1.792667942E12, 58.643534994068844], [1.792667944E12, 63.39554140127377], [1.792667946E12, 59.796772265391496], [1.792667926E12, 58.17984768599886], [1.792667928E12, 59.589622641509465], [1.79266793E12, 58.74329054842481], [1.792667932E12, 58.00645918966527], [1.792667934E12, 58.576201641266145], [1.792667936E12, 58.44262295081958], [1.792667916E12, 57.94186046511632], [1.792667959E12, 56.61683848797255], [1.792667918E12, 57.814143775569924], [1.792667961E12, 57.51273148148161], [1.79266792E12, 58.098360655737636], [1.792667963E12, 57.33736327000576], [1.792667922E12, 59.58590047393369], [1.792667965E12, 61.790575916230374], [1.792667924E12, 59.13278495887196], [1.792667947E12, 59.20980274955172], [1.792667906E12, 57.77701149425292], [1.792667949E12, 60.6092436974789], [1.792667908E12, 58.11630625365282], [1.792667951E12, 59.80454273759717], [1.79266791E12, 56.76327944572747], [1.792667953E12, 59.0], [1.792667912E12, 57.95444059976932], [1.792667955E12, 58.74779021803182], [1.792667914E12, 57.548368298368295], [1.792667957E12, 57.86371578334304], [1.792667937E12, 59.071891573364795], [1.792667939E12, 59.843541540327514], [1.792667941E12, 60.07130229817317], [1.792667943E12, 61.102078239608886], [1.792667945E12, 59.62850327966602], [1.792667927E12, 58.07979033197434], [1.792667929E12, 57.137209302325545], [1.792667931E12, 59.30570252792485], [1.792667933E12, 59.36817102137771], [1.792667935E12, 57.92405797101446], [1.792667915E12, 58.062211981566776], [1.792667958E12, 59.21201413427557], [1.792667917E12, 58.66705471478468], [1.79266796E12, 57.43031358885017], [1.792667919E12, 58.434935521688175], [1.792667962E12, 58.50955414012741], [1.792667921E12, 59.29070455891058], [1.792667964E12, 58.632903981264626], [1.792667923E12, 58.420212765957366], [1.792667925E12, 58.72678888231808], [1.792667905E12, 56.62943143812717], [1.792667948E12, 59.03846153846157], [1.792667907E12, 56.22044545973728], [1.79266795E12, 59.72683801554096], [1.792667909E12, 58.470826112073965], [1.792667952E12, 59.20808561236629], [1.792667911E12, 57.69840364880273], [1.792667954E12, 58.07764156450672], [1.792667913E12, 57.264434180138494], [1.792667956E12, 59.560517038777974]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667965E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.792667905E12, "maxY": 0.011104617182933966, "series": [{"data": [[1.792667938E12, 0.00415676959619953], [1.79266794E12, 0.0029958058717795143], [1.792667942E12, 0.0017793594306049825], [1.792667944E12, 0.0012738853503184734], [1.792667946E12, 0.0017931858936043072], [1.792667926E12, 0.0029291154071470447], [1.792667928E12, 0.002358490566037743], [1.79266793E12, 0.0023337222870478433], [1.792667932E12, 0.0011743981209630108], [1.792667934E12, 0.0029308323563892224], [1.792667936E12, 0.004098360655737701], [1.792667916E12, 0.0023255813953488367], [1.792667959E12, 0.0028636884306987445], [1.792667918E12, 0.0035067212156633613], [1.792667961E12, 0.0028935185185185214], [1.79266792E12, 0.004098360655737707], [1.792667963E12, 0.002878526194588373], [1.792667922E12, 0.0023696682464454987], [1.792667965E12, 0.0], [1.792667924E12, 0.0011750881316098742], [1.792667947E12, 0.002390914524805746], [1.792667906E12, 0.002298850574712651], [1.792667949E12, 0.004201680672268909], [1.792667908E12, 0.011104617182933966], [1.792667951E12, 0.0011954572624028722], [1.79266791E12, 0.00461893764434181], [1.792667953E12, 0.0011862396204033252], [1.792667912E12, 0.0057670126874279], [1.792667955E12, 0.004714201532115508], [1.792667914E12, 0.0069930069930069835], [1.792667957E12, 5.82411182294703E-4], [1.792667937E12, 0.002357100766057757], [1.792667939E12, 0.003638568829593695], [1.792667941E12, 0.0029463759575721884], [1.792667943E12, 0.001833740831295846], [1.792667945E12, 0.003577817531305908], [1.792667927E12, 0.004659289458357612], [1.792667929E12, 0.0011627906976744199], [1.792667931E12, 0.0035273368606701964], [1.792667933E12, 0.002969121140142522], [1.792667935E12, 0.0040579710144927564], [1.792667915E12, 0.006336405529953892], [1.792667958E12, 0.002944640753828035], [1.792667917E12, 5.82072176949942E-4], [1.79266796E12, 0.003484320557491292], [1.792667919E12, 0.004689331770222757], [1.792667962E12, 0.004632310364794455], [1.792667921E12, 0.0035523978685612773], [1.792667964E12, 0.0035128805620608904], [1.792667923E12, 0.0035460992907801452], [1.792667925E12, 0.0029568302779420493], [1.792667905E12, 0.0040133779264214095], [1.792667948E12, 0.0029585798816568138], [1.792667907E12, 0.004568817818389498], [1.79266795E12, 0.0029886431560071747], [1.792667909E12, 0.0057770075101097615], [1.792667952E12, 0.0035671819262782455], [1.792667911E12, 0.001710376282782214], [1.792667954E12, 0.004670169293636905], [1.792667913E12, 0.008083140877598151], [1.792667956E12, 0.003525264394829615]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667965E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.792667905E12, "maxY": 462.0, "series": [{"data": [[1.792667938E12, 391.0], [1.79266794E12, 258.0], [1.792667942E12, 245.0], [1.792667944E12, 346.0], [1.792667946E12, 348.0], [1.792667926E12, 290.0], [1.792667928E12, 334.0], [1.79266793E12, 287.0], [1.792667932E12, 327.0], [1.792667934E12, 323.0], [1.792667936E12, 250.0], [1.792667916E12, 323.0], [1.792667959E12, 281.0], [1.792667918E12, 197.0], [1.792667961E12, 287.0], [1.79266792E12, 246.0], [1.792667963E12, 330.0], [1.792667922E12, 343.0], [1.792667965E12, 194.0], [1.792667924E12, 339.0], [1.792667947E12, 287.0], [1.792667906E12, 226.0], [1.792667949E12, 282.0], [1.792667908E12, 284.0], [1.792667951E12, 377.0], [1.79266791E12, 246.0], [1.792667953E12, 249.0], [1.792667912E12, 360.0], [1.792667955E12, 337.0], [1.792667914E12, 318.0], [1.792667957E12, 286.0], [1.792667937E12, 336.0], [1.792667939E12, 336.0], [1.792667941E12, 298.0], [1.792667943E12, 345.0], [1.792667945E12, 289.0], [1.792667927E12, 324.0], [1.792667929E12, 234.0], [1.792667931E12, 299.0], [1.792667933E12, 254.0], [1.792667935E12, 298.0], [1.792667915E12, 336.0], [1.792667958E12, 387.0], [1.792667917E12, 335.0], [1.79266796E12, 326.0], [1.792667919E12, 235.0], [1.792667962E12, 320.0], [1.792667921E12, 337.0], [1.792667964E12, 286.0], [1.792667923E12, 250.0], [1.792667925E12, 336.0], [1.792667905E12, 462.0], [1.792667948E12, 250.0], [1.792667907E12, 238.0], [1.79266795E12, 289.0], [1.792667909E12, 245.0], [1.792667952E12, 298.0], [1.792667911E12, 358.0], [1.792667954E12, 251.0], [1.792667913E12, 286.0], [1.792667956E12, 302.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.792667938E12, 6.0], [1.79266794E12, 6.0], [1.792667942E12, 6.0], [1.792667944E12, 7.0], [1.792667946E12, 7.0], [1.792667926E12, 7.0], [1.792667928E12, 7.0], [1.79266793E12, 7.0], [1.792667932E12, 6.0], [1.792667934E12, 7.0], [1.792667936E12, 6.0], [1.792667916E12, 5.0], [1.792667959E12, 6.0], [1.792667918E12, 7.0], [1.792667961E12, 7.0], [1.79266792E12, 6.0], [1.792667963E12, 6.0], [1.792667922E12, 6.0], [1.792667965E12, 9.0], [1.792667924E12, 7.0], [1.792667947E12, 6.0], [1.792667906E12, 7.0], [1.792667949E12, 7.0], [1.792667908E12, 6.0], [1.792667951E12, 8.0], [1.79266791E12, 7.0], [1.792667953E12, 7.0], [1.792667912E12, 6.0], [1.792667955E12, 6.0], [1.792667914E12, 7.0], [1.792667957E12, 7.0], [1.792667937E12, 6.0], [1.792667939E12, 7.0], [1.792667941E12, 7.0], [1.792667943E12, 7.0], [1.792667945E12, 7.0], [1.792667927E12, 7.0], [1.792667929E12, 7.0], [1.792667931E12, 6.0], [1.792667933E12, 6.0], [1.792667935E12, 6.0], [1.792667915E12, 7.0], [1.792667958E12, 7.0], [1.792667917E12, 7.0], [1.79266796E12, 6.0], [1.792667919E12, 7.0], [1.792667962E12, 6.0], [1.792667921E12, 6.0], [1.792667964E12, 6.0], [1.792667923E12, 7.0], [1.792667925E12, 6.0], [1.792667905E12, 7.0], [1.792667948E12, 7.0], [1.792667907E12, 7.0], [1.79266795E12, 5.0], [1.792667909E12, 8.0], [1.792667952E12, 6.0], [1.792667911E12, 7.0], [1.792667954E12, 6.0], [1.792667913E12, 7.0], [1.792667956E12, 7.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.792667938E12, 106.0], [1.79266794E12, 107.0], [1.792667942E12, 106.0], [1.792667944E12, 124.0], [1.792667946E12, 106.0], [1.792667926E12, 104.0], [1.792667928E12, 107.0], [1.79266793E12, 107.0], [1.792667932E12, 107.0], [1.792667934E12, 106.0], [1.792667936E12, 104.0], [1.792667916E12, 105.0], [1.792667959E12, 102.0], [1.792667918E12, 100.0], [1.792667961E12, 107.0], [1.79266792E12, 105.0], [1.792667963E12, 105.0], [1.792667922E12, 104.0], [1.792667965E12, 106.80000000000001], [1.792667924E12, 108.0], [1.792667947E12, 107.0], [1.792667906E12, 99.0], [1.792667949E12, 110.0], [1.792667908E12, 104.0], [1.792667951E12, 109.0], [1.79266791E12, 104.0], [1.792667953E12, 105.0], [1.792667912E12, 103.0], [1.792667955E12, 107.0], [1.792667914E12, 106.0], [1.792667957E12, 105.0], [1.792667937E12, 107.20000000000005], [1.792667939E12, 108.0], [1.792667941E12, 106.0], [1.792667943E12, 112.0], [1.792667945E12, 109.0], [1.792667927E12, 106.0], [1.792667929E12, 104.0], [1.792667931E12, 108.0], [1.792667933E12, 108.0], [1.792667935E12, 102.0], [1.792667915E12, 104.0], [1.792667958E12, 107.0], [1.792667917E12, 106.0], [1.79266796E12, 106.0], [1.792667919E12, 104.0], [1.792667962E12, 107.0], [1.792667921E12, 108.0], [1.792667964E12, 107.0], [1.792667923E12, 105.0], [1.792667925E12, 106.0], [1.792667905E12, 103.0], [1.792667948E12, 107.0], [1.792667907E12, 102.79999999999995], [1.79266795E12, 109.0], [1.792667909E12, 100.0], [1.792667952E12, 107.0], [1.792667911E12, 102.0], [1.792667954E12, 107.0], [1.792667913E12, 104.0], [1.792667956E12, 109.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.792667938E12, 188.60000000000036], [1.79266794E12, 168.19999999999982], [1.792667942E12, 160.12999999999988], [1.792667944E12, 199.28999999999996], [1.792667946E12, 193.26], [1.792667926E12, 191.0], [1.792667928E12, 196.0], [1.79266793E12, 191.0], [1.792667932E12, 203.84000000000015], [1.792667934E12, 192.7900000000002], [1.792667936E12, 185.91000000000008], [1.792667916E12, 196.0], [1.792667959E12, 187.0], [1.792667918E12, 151.0], [1.792667961E12, 193.71000000000004], [1.79266792E12, 198.0], [1.792667963E12, 194.0], [1.792667922E12, 155.0], [1.792667965E12, 182.0399999999998], [1.792667924E12, 232.25000000000068], [1.792667947E12, 190.26], [1.792667906E12, 151.17999999999984], [1.792667949E12, 198.65999999999985], [1.792667908E12, 193.87999999999988], [1.792667951E12, 190.03999999999996], [1.79266791E12, 187.34000000000015], [1.792667953E12, 171.68999999999846], [1.792667912E12, 192.0], [1.792667955E12, 198.01999999999998], [1.792667914E12, 193.0], [1.792667957E12, 190.81999999999994], [1.792667937E12, 199.0], [1.792667939E12, 200.0], [1.792667941E12, 193.01999999999998], [1.792667943E12, 209.0], [1.792667945E12, 205.22000000000003], [1.792667927E12, 157.63999999999987], [1.792667929E12, 157.0], [1.792667931E12, 236.0], [1.792667933E12, 197.0], [1.792667935E12, 185.0], [1.792667915E12, 191.62999999999988], [1.792667958E12, 195.01999999999998], [1.792667917E12, 196.80999999999995], [1.79266796E12, 193.07999999999993], [1.792667919E12, 156.0], [1.792667962E12, 201.72000000000003], [1.792667921E12, 192.19999999999982], [1.792667964E12, 197.91000000000008], [1.792667923E12, 170.25999999999885], [1.792667925E12, 196.0], [1.792667905E12, 190.03999999999996], [1.792667948E12, 192.0], [1.792667907E12, 185.48000000000002], [1.79266795E12, 197.0], [1.792667909E12, 153.68000000000006], [1.792667952E12, 198.0], [1.792667911E12, 196.45000000000005], [1.792667954E12, 200.0], [1.792667913E12, 179.0], [1.792667956E12, 199.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.792667938E12, 59.0], [1.79266794E12, 59.0], [1.792667942E12, 58.5], [1.792667944E12, 59.0], [1.792667946E12, 59.0], [1.792667926E12, 58.0], [1.792667928E12, 58.0], [1.79266793E12, 57.0], [1.792667932E12, 57.0], [1.792667934E12, 58.0], [1.792667936E12, 58.0], [1.792667916E12, 57.0], [1.792667959E12, 56.0], [1.792667918E12, 58.0], [1.792667961E12, 56.0], [1.79266792E12, 58.0], [1.792667963E12, 56.0], [1.792667922E12, 59.0], [1.792667965E12, 57.0], [1.792667924E12, 57.0], [1.792667947E12, 58.0], [1.792667906E12, 57.0], [1.792667949E12, 59.0], [1.792667908E12, 57.0], [1.792667951E12, 59.0], [1.79266791E12, 57.0], [1.792667953E12, 58.0], [1.792667912E12, 57.0], [1.792667955E12, 58.0], [1.792667914E12, 56.0], [1.792667957E12, 57.0], [1.792667937E12, 58.0], [1.792667939E12, 59.0], [1.792667941E12, 58.0], [1.792667943E12, 59.0], [1.792667945E12, 58.0], [1.792667927E12, 57.0], [1.792667929E12, 57.0], [1.792667931E12, 58.0], [1.792667933E12, 58.0], [1.792667935E12, 57.0], [1.792667915E12, 56.0], [1.792667958E12, 58.0], [1.792667917E12, 57.0], [1.79266796E12, 56.0], [1.792667919E12, 58.0], [1.792667962E12, 57.0], [1.792667921E12, 58.0], [1.792667964E12, 57.0], [1.792667923E12, 59.0], [1.792667925E12, 58.0], [1.792667905E12, 57.0], [1.792667948E12, 58.0], [1.792667907E12, 56.0], [1.79266795E12, 59.0], [1.792667909E12, 57.0], [1.792667952E12, 58.0], [1.792667911E12, 56.0], [1.792667954E12, 57.0], [1.792667913E12, 57.0], [1.792667956E12, 57.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.792667938E12, 116.0], [1.79266794E12, 124.0], [1.792667942E12, 113.64999999999986], [1.792667944E12, 150.44999999999982], [1.792667946E12, 117.0], [1.792667926E12, 113.59999999999991], [1.792667928E12, 145.0], [1.79266793E12, 148.0], [1.792667932E12, 149.0], [1.792667934E12, 140.64999999999986], [1.792667936E12, 136.54999999999995], [1.792667916E12, 146.0], [1.792667959E12, 139.0], [1.792667918E12, 106.0], [1.792667961E12, 145.0], [1.79266792E12, 144.0], [1.792667963E12, 144.0], [1.792667922E12, 109.0], [1.792667965E12, 137.19999999999993], [1.792667924E12, 149.0], [1.792667947E12, 147.0], [1.792667906E12, 105.0], [1.792667949E12, 150.29999999999973], [1.792667908E12, 145.0], [1.792667951E12, 148.0], [1.79266791E12, 141.0], [1.792667953E12, 116.0], [1.792667912E12, 116.5], [1.792667955E12, 146.0], [1.792667914E12, 146.0], [1.792667957E12, 136.39999999999964], [1.792667937E12, 146.0999999999999], [1.792667939E12, 147.0], [1.792667941E12, 147.0], [1.792667943E12, 154.14999999999986], [1.792667945E12, 152.0], [1.792667927E12, 141.0999999999999], [1.792667929E12, 114.0], [1.792667931E12, 149.0], [1.792667933E12, 137.25], [1.792667935E12, 110.0], [1.792667915E12, 145.0], [1.792667958E12, 146.0], [1.792667917E12, 145.0], [1.79266796E12, 144.0], [1.792667919E12, 113.0], [1.792667962E12, 145.0], [1.792667921E12, 146.0], [1.792667964E12, 147.54999999999995], [1.792667923E12, 114.34999999999991], [1.792667925E12, 144.39999999999986], [1.792667905E12, 119.20000000000005], [1.792667948E12, 142.0], [1.792667907E12, 116.19999999999959], [1.79266795E12, 149.0], [1.792667909E12, 108.0], [1.792667952E12, 146.0], [1.792667911E12, 144.0], [1.792667954E12, 147.29999999999995], [1.792667913E12, 120.0], [1.792667956E12, 151.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667965E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 56.0, "minX": 191.0, "maxY": 59.0, "series": [{"data": [[1495.0, 57.0], [1570.0, 59.0], [1649.0, 59.0], [1636.0, 59.0], [1720.0, 57.0], [1711.0, 58.0], [1716.0, 56.0], [1718.0, 57.0], [1717.0, 57.0], [1706.0, 58.0], [1707.0, 58.0], [1708.0, 57.0], [1689.0, 58.0], [1688.0, 59.0], [1684.0, 58.0], [1682.0, 58.0], [1686.0, 58.0], [1692.0, 59.0], [1714.0, 57.0], [1713.0, 57.0], [1669.0, 59.0], [1666.0, 59.0], [1673.0, 59.0], [1677.0, 58.0], [1691.0, 58.0], [1690.0, 58.0], [1702.0, 57.0], [1703.0, 57.0], [1696.0, 58.0], [1697.0, 58.0], [1698.0, 58.0], [1725.0, 57.0], [1727.0, 57.0], [1722.0, 56.0], [1701.0, 58.0], [1731.0, 57.0], [1740.0, 57.0], [1751.0, 56.0], [1732.0, 57.0], [1754.0, 56.0], [1734.0, 57.0], [1736.0, 56.0], [1737.0, 56.0], [1746.0, 56.0], [1728.0, 56.0], [191.0, 57.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1754.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 56.0, "minX": 191.0, "maxY": 59.0, "series": [{"data": [[1495.0, 57.0], [1570.0, 59.0], [1649.0, 59.0], [1636.0, 59.0], [1720.0, 57.0], [1711.0, 57.5], [1716.0, 56.0], [1718.0, 57.0], [1717.0, 57.0], [1706.0, 58.0], [1707.0, 58.0], [1708.0, 57.0], [1689.0, 58.0], [1688.0, 59.0], [1684.0, 58.0], [1682.0, 58.0], [1686.0, 58.0], [1692.0, 59.0], [1714.0, 57.0], [1713.0, 57.0], [1669.0, 59.0], [1666.0, 59.0], [1673.0, 59.0], [1677.0, 58.0], [1691.0, 58.0], [1690.0, 58.0], [1702.0, 57.0], [1703.0, 57.0], [1696.0, 58.0], [1697.0, 58.0], [1698.0, 58.0], [1725.0, 57.0], [1727.0, 57.0], [1722.0, 56.0], [1701.0, 58.0], [1731.0, 57.0], [1740.0, 57.0], [1751.0, 56.0], [1732.0, 57.0], [1754.0, 56.0], [1734.0, 57.0], [1736.0, 56.0], [1737.0, 56.0], [1746.0, 56.0], [1728.0, 56.0], [191.0, 57.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1754.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 96.0, "minX": 1.792667905E12, "maxY": 1754.0, "series": [{"data": [[1.792667938E12, 1684.0], [1.79266794E12, 1669.0], [1.792667942E12, 1686.0], [1.792667944E12, 1570.0], [1.792667946E12, 1673.0], [1.792667926E12, 1707.0], [1.792667928E12, 1696.0], [1.79266793E12, 1714.0], [1.792667932E12, 1704.0], [1.792667934E12, 1707.0], [1.792667936E12, 1708.0], [1.792667916E12, 1720.0], [1.792667959E12, 1746.0], [1.792667918E12, 1711.0], [1.792667961E12, 1728.0], [1.79266792E12, 1708.0], [1.792667963E12, 1737.0], [1.792667922E12, 1688.0], [1.792667965E12, 96.0], [1.792667924E12, 1701.0], [1.792667947E12, 1673.0], [1.792667906E12, 1740.0], [1.792667949E12, 1667.0], [1.792667908E12, 1711.0], [1.792667951E12, 1675.0], [1.79266791E12, 1731.0], [1.792667953E12, 1687.0], [1.792667912E12, 1735.0], [1.792667955E12, 1697.0], [1.792667914E12, 1716.0], [1.792667957E12, 1717.0], [1.792667937E12, 1696.0], [1.792667939E12, 1650.0], [1.792667941E12, 1697.0], [1.792667943E12, 1636.0], [1.792667945E12, 1677.0], [1.792667927E12, 1717.0], [1.792667929E12, 1720.0], [1.792667931E12, 1700.0], [1.792667933E12, 1683.0], [1.792667935E12, 1725.0], [1.792667915E12, 1736.0], [1.792667958E12, 1698.0], [1.792667917E12, 1718.0], [1.79266796E12, 1722.0], [1.792667919E12, 1706.0], [1.792667962E12, 1727.0], [1.792667921E12, 1689.0], [1.792667964E12, 1703.0], [1.792667923E12, 1692.0], [1.792667925E12, 1692.0], [1.792667905E12, 1595.0], [1.792667948E12, 1689.0], [1.792667907E12, 1751.0], [1.79266795E12, 1671.0], [1.792667909E12, 1731.0], [1.792667952E12, 1681.0], [1.792667911E12, 1754.0], [1.792667954E12, 1713.0], [1.792667913E12, 1732.0], [1.792667956E12, 1702.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667965E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 191.0, "minX": 1.792667905E12, "maxY": 1754.0, "series": [{"data": [[1.792667938E12, 1684.0], [1.79266794E12, 1669.0], [1.792667942E12, 1686.0], [1.792667944E12, 1570.0], [1.792667946E12, 1673.0], [1.792667926E12, 1707.0], [1.792667928E12, 1696.0], [1.79266793E12, 1714.0], [1.792667932E12, 1703.0], [1.792667934E12, 1706.0], [1.792667936E12, 1708.0], [1.792667916E12, 1720.0], [1.792667959E12, 1746.0], [1.792667918E12, 1711.0], [1.792667961E12, 1728.0], [1.79266792E12, 1708.0], [1.792667963E12, 1737.0], [1.792667922E12, 1688.0], [1.792667965E12, 191.0], [1.792667924E12, 1702.0], [1.792667947E12, 1673.0], [1.792667906E12, 1740.0], [1.792667949E12, 1666.0], [1.792667908E12, 1711.0], [1.792667951E12, 1673.0], [1.79266791E12, 1732.0], [1.792667953E12, 1686.0], [1.792667912E12, 1734.0], [1.792667955E12, 1697.0], [1.792667914E12, 1716.0], [1.792667957E12, 1717.0], [1.792667937E12, 1697.0], [1.792667939E12, 1649.0], [1.792667941E12, 1697.0], [1.792667943E12, 1636.0], [1.792667945E12, 1677.0], [1.792667927E12, 1717.0], [1.792667929E12, 1720.0], [1.792667931E12, 1701.0], [1.792667933E12, 1684.0], [1.792667935E12, 1725.0], [1.792667915E12, 1736.0], [1.792667958E12, 1698.0], [1.792667917E12, 1718.0], [1.79266796E12, 1722.0], [1.792667919E12, 1706.0], [1.792667962E12, 1727.0], [1.792667921E12, 1689.0], [1.792667964E12, 1708.0], [1.792667923E12, 1692.0], [1.792667925E12, 1691.0], [1.792667905E12, 1495.0], [1.792667948E12, 1690.0], [1.792667907E12, 1751.0], [1.79266795E12, 1673.0], [1.792667909E12, 1731.0], [1.792667952E12, 1682.0], [1.792667911E12, 1754.0], [1.792667954E12, 1713.0], [1.792667913E12, 1732.0], [1.792667956E12, 1702.0]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792667965E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 191.0, "minX": 1.792667905E12, "maxY": 1754.0, "series": [{"data": [[1.792667938E12, 1684.0], [1.79266794E12, 1669.0], [1.792667942E12, 1686.0], [1.792667944E12, 1570.0], [1.792667946E12, 1673.0], [1.792667926E12, 1707.0], [1.792667928E12, 1696.0], [1.79266793E12, 1714.0], [1.792667932E12, 1703.0], [1.792667934E12, 1706.0], [1.792667936E12, 1708.0], [1.792667916E12, 1720.0], [1.792667959E12, 1746.0], [1.792667918E12, 1711.0], [1.792667961E12, 1728.0], [1.79266792E12, 1708.0], [1.792667963E12, 1737.0], [1.792667922E12, 1688.0], [1.792667965E12, 191.0], [1.792667924E12, 1702.0], [1.792667947E12, 1673.0], [1.792667906E12, 1740.0], [1.792667949E12, 1666.0], [1.792667908E12, 1711.0], [1.792667951E12, 1673.0], [1.79266791E12, 1732.0], [1.792667953E12, 1686.0], [1.792667912E12, 1734.0], [1.792667955E12, 1697.0], [1.792667914E12, 1716.0], [1.792667957E12, 1717.0], [1.792667937E12, 1697.0], [1.792667939E12, 1649.0], [1.792667941E12, 1697.0], [1.792667943E12, 1636.0], [1.792667945E12, 1677.0], [1.792667927E12, 1717.0], [1.792667929E12, 1720.0], [1.792667931E12, 1701.0], [1.792667933E12, 1684.0], [1.792667935E12, 1725.0], [1.792667915E12, 1736.0], [1.792667958E12, 1698.0], [1.792667917E12, 1718.0], [1.79266796E12, 1722.0], [1.792667919E12, 1706.0], [1.792667962E12, 1727.0], [1.792667921E12, 1689.0], [1.792667964E12, 1708.0], [1.792667923E12, 1692.0], [1.792667925E12, 1691.0], [1.792667905E12, 1495.0], [1.792667948E12, 1690.0], [1.792667907E12, 1751.0], [1.79266795E12, 1673.0], [1.792667909E12, 1731.0], [1.792667952E12, 1682.0], [1.792667911E12, 1754.0], [1.792667954E12, 1713.0], [1.792667913E12, 1732.0], [1.792667956E12, 1702.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667965E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 191.0, "minX": 1.792667905E12, "maxY": 1754.0, "series": [{"data": [[1.792667938E12, 1684.0], [1.79266794E12, 1669.0], [1.792667942E12, 1686.0], [1.792667944E12, 1570.0], [1.792667946E12, 1673.0], [1.792667926E12, 1707.0], [1.792667928E12, 1696.0], [1.79266793E12, 1714.0], [1.792667932E12, 1703.0], [1.792667934E12, 1706.0], [1.792667936E12, 1708.0], [1.792667916E12, 1720.0], [1.792667959E12, 1746.0], [1.792667918E12, 1711.0], [1.792667961E12, 1728.0], [1.79266792E12, 1708.0], [1.792667963E12, 1737.0], [1.792667922E12, 1688.0], [1.792667965E12, 191.0], [1.792667924E12, 1702.0], [1.792667947E12, 1673.0], [1.792667906E12, 1740.0], [1.792667949E12, 1666.0], [1.792667908E12, 1711.0], [1.792667951E12, 1673.0], [1.79266791E12, 1732.0], [1.792667953E12, 1686.0], [1.792667912E12, 1734.0], [1.792667955E12, 1697.0], [1.792667914E12, 1716.0], [1.792667957E12, 1717.0], [1.792667937E12, 1697.0], [1.792667939E12, 1649.0], [1.792667941E12, 1697.0], [1.792667943E12, 1636.0], [1.792667945E12, 1677.0], [1.792667927E12, 1717.0], [1.792667929E12, 1720.0], [1.792667931E12, 1701.0], [1.792667933E12, 1684.0], [1.792667935E12, 1725.0], [1.792667915E12, 1736.0], [1.792667958E12, 1698.0], [1.792667917E12, 1718.0], [1.79266796E12, 1722.0], [1.792667919E12, 1706.0], [1.792667962E12, 1727.0], [1.792667921E12, 1689.0], [1.792667964E12, 1708.0], [1.792667923E12, 1692.0], [1.792667925E12, 1691.0], [1.792667905E12, 1495.0], [1.792667948E12, 1690.0], [1.792667907E12, 1751.0], [1.79266795E12, 1673.0], [1.792667909E12, 1731.0], [1.792667952E12, 1682.0], [1.792667911E12, 1754.0], [1.792667954E12, 1713.0], [1.792667913E12, 1732.0], [1.792667956E12, 1702.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792667965E12, "title": "Total Transactions Per Second"}},
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


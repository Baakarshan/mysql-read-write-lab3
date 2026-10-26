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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 618.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 2.0], [1.5, 2.0], [1.6, 2.0], [1.7, 2.0], [1.8, 2.0], [1.9, 2.0], [2.0, 2.0], [2.1, 2.0], [2.2, 2.0], [2.3, 2.0], [2.4, 2.0], [2.5, 2.0], [2.6, 2.0], [2.7, 2.0], [2.8, 2.0], [2.9, 2.0], [3.0, 2.0], [3.1, 2.0], [3.2, 2.0], [3.3, 2.0], [3.4, 2.0], [3.5, 2.0], [3.6, 2.0], [3.7, 2.0], [3.8, 2.0], [3.9, 2.0], [4.0, 2.0], [4.1, 2.0], [4.2, 2.0], [4.3, 2.0], [4.4, 2.0], [4.5, 2.0], [4.6, 2.0], [4.7, 2.0], [4.8, 2.0], [4.9, 2.0], [5.0, 2.0], [5.1, 2.0], [5.2, 3.0], [5.3, 3.0], [5.4, 3.0], [5.5, 3.0], [5.6, 3.0], [5.7, 3.0], [5.8, 3.0], [5.9, 3.0], [6.0, 3.0], [6.1, 3.0], [6.2, 3.0], [6.3, 3.0], [6.4, 3.0], [6.5, 3.0], [6.6, 3.0], [6.7, 3.0], [6.8, 3.0], [6.9, 3.0], [7.0, 3.0], [7.1, 3.0], [7.2, 3.0], [7.3, 3.0], [7.4, 3.0], [7.5, 3.0], [7.6, 3.0], [7.7, 3.0], [7.8, 3.0], [7.9, 3.0], [8.0, 3.0], [8.1, 3.0], [8.2, 3.0], [8.3, 3.0], [8.4, 3.0], [8.5, 3.0], [8.6, 3.0], [8.7, 3.0], [8.8, 3.0], [8.9, 3.0], [9.0, 3.0], [9.1, 3.0], [9.2, 3.0], [9.3, 3.0], [9.4, 3.0], [9.5, 3.0], [9.6, 3.0], [9.7, 3.0], [9.8, 3.0], [9.9, 3.0], [10.0, 3.0], [10.1, 3.0], [10.2, 3.0], [10.3, 3.0], [10.4, 3.0], [10.5, 3.0], [10.6, 3.0], [10.7, 3.0], [10.8, 3.0], [10.9, 3.0], [11.0, 4.0], [11.1, 4.0], [11.2, 4.0], [11.3, 4.0], [11.4, 4.0], [11.5, 4.0], [11.6, 4.0], [11.7, 4.0], [11.8, 4.0], [11.9, 4.0], [12.0, 4.0], [12.1, 4.0], [12.2, 4.0], [12.3, 4.0], [12.4, 4.0], [12.5, 4.0], [12.6, 4.0], [12.7, 4.0], [12.8, 4.0], [12.9, 4.0], [13.0, 4.0], [13.1, 4.0], [13.2, 4.0], [13.3, 4.0], [13.4, 4.0], [13.5, 4.0], [13.6, 4.0], [13.7, 4.0], [13.8, 4.0], [13.9, 4.0], [14.0, 4.0], [14.1, 4.0], [14.2, 4.0], [14.3, 4.0], [14.4, 4.0], [14.5, 4.0], [14.6, 4.0], [14.7, 4.0], [14.8, 4.0], [14.9, 4.0], [15.0, 4.0], [15.1, 4.0], [15.2, 4.0], [15.3, 4.0], [15.4, 4.0], [15.5, 4.0], [15.6, 4.0], [15.7, 4.0], [15.8, 4.0], [15.9, 4.0], [16.0, 4.0], [16.1, 4.0], [16.2, 4.0], [16.3, 4.0], [16.4, 4.0], [16.5, 4.0], [16.6, 4.0], [16.7, 4.0], [16.8, 4.0], [16.9, 5.0], [17.0, 5.0], [17.1, 5.0], [17.2, 5.0], [17.3, 5.0], [17.4, 5.0], [17.5, 5.0], [17.6, 5.0], [17.7, 5.0], [17.8, 5.0], [17.9, 5.0], [18.0, 5.0], [18.1, 5.0], [18.2, 5.0], [18.3, 5.0], [18.4, 5.0], [18.5, 5.0], [18.6, 5.0], [18.7, 5.0], [18.8, 5.0], [18.9, 5.0], [19.0, 5.0], [19.1, 5.0], [19.2, 5.0], [19.3, 5.0], [19.4, 5.0], [19.5, 5.0], [19.6, 5.0], [19.7, 5.0], [19.8, 5.0], [19.9, 5.0], [20.0, 5.0], [20.1, 5.0], [20.2, 5.0], [20.3, 5.0], [20.4, 5.0], [20.5, 5.0], [20.6, 5.0], [20.7, 5.0], [20.8, 5.0], [20.9, 5.0], [21.0, 5.0], [21.1, 5.0], [21.2, 5.0], [21.3, 5.0], [21.4, 5.0], [21.5, 5.0], [21.6, 5.0], [21.7, 5.0], [21.8, 5.0], [21.9, 5.0], [22.0, 5.0], [22.1, 5.0], [22.2, 5.0], [22.3, 5.0], [22.4, 5.0], [22.5, 5.0], [22.6, 6.0], [22.7, 6.0], [22.8, 6.0], [22.9, 6.0], [23.0, 6.0], [23.1, 6.0], [23.2, 6.0], [23.3, 6.0], [23.4, 6.0], [23.5, 6.0], [23.6, 6.0], [23.7, 6.0], [23.8, 6.0], [23.9, 6.0], [24.0, 6.0], [24.1, 6.0], [24.2, 6.0], [24.3, 6.0], [24.4, 6.0], [24.5, 6.0], [24.6, 6.0], [24.7, 6.0], [24.8, 6.0], [24.9, 6.0], [25.0, 6.0], [25.1, 6.0], [25.2, 6.0], [25.3, 6.0], [25.4, 6.0], [25.5, 6.0], [25.6, 6.0], [25.7, 6.0], [25.8, 6.0], [25.9, 6.0], [26.0, 6.0], [26.1, 6.0], [26.2, 6.0], [26.3, 6.0], [26.4, 6.0], [26.5, 6.0], [26.6, 6.0], [26.7, 6.0], [26.8, 6.0], [26.9, 6.0], [27.0, 6.0], [27.1, 6.0], [27.2, 6.0], [27.3, 6.0], [27.4, 6.0], [27.5, 6.0], [27.6, 6.0], [27.7, 6.0], [27.8, 6.0], [27.9, 6.0], [28.0, 7.0], [28.1, 7.0], [28.2, 7.0], [28.3, 7.0], [28.4, 7.0], [28.5, 7.0], [28.6, 7.0], [28.7, 7.0], [28.8, 7.0], [28.9, 7.0], [29.0, 7.0], [29.1, 7.0], [29.2, 7.0], [29.3, 7.0], [29.4, 7.0], [29.5, 7.0], [29.6, 7.0], [29.7, 7.0], [29.8, 7.0], [29.9, 7.0], [30.0, 7.0], [30.1, 7.0], [30.2, 7.0], [30.3, 7.0], [30.4, 7.0], [30.5, 7.0], [30.6, 7.0], [30.7, 7.0], [30.8, 7.0], [30.9, 7.0], [31.0, 7.0], [31.1, 7.0], [31.2, 7.0], [31.3, 7.0], [31.4, 7.0], [31.5, 7.0], [31.6, 7.0], [31.7, 7.0], [31.8, 7.0], [31.9, 7.0], [32.0, 7.0], [32.1, 7.0], [32.2, 7.0], [32.3, 7.0], [32.4, 7.0], [32.5, 7.0], [32.6, 7.0], [32.7, 7.0], [32.8, 7.0], [32.9, 7.0], [33.0, 7.0], [33.1, 7.0], [33.2, 8.0], [33.3, 8.0], [33.4, 8.0], [33.5, 8.0], [33.6, 8.0], [33.7, 8.0], [33.8, 8.0], [33.9, 8.0], [34.0, 8.0], [34.1, 8.0], [34.2, 8.0], [34.3, 8.0], [34.4, 8.0], [34.5, 8.0], [34.6, 8.0], [34.7, 8.0], [34.8, 8.0], [34.9, 8.0], [35.0, 8.0], [35.1, 8.0], [35.2, 8.0], [35.3, 8.0], [35.4, 8.0], [35.5, 8.0], [35.6, 8.0], [35.7, 8.0], [35.8, 8.0], [35.9, 8.0], [36.0, 8.0], [36.1, 8.0], [36.2, 8.0], [36.3, 8.0], [36.4, 8.0], [36.5, 8.0], [36.6, 8.0], [36.7, 8.0], [36.8, 8.0], [36.9, 8.0], [37.0, 8.0], [37.1, 8.0], [37.2, 8.0], [37.3, 8.0], [37.4, 8.0], [37.5, 8.0], [37.6, 8.0], [37.7, 8.0], [37.8, 9.0], [37.9, 9.0], [38.0, 9.0], [38.1, 9.0], [38.2, 9.0], [38.3, 9.0], [38.4, 9.0], [38.5, 9.0], [38.6, 9.0], [38.7, 9.0], [38.8, 9.0], [38.9, 9.0], [39.0, 9.0], [39.1, 9.0], [39.2, 9.0], [39.3, 9.0], [39.4, 9.0], [39.5, 9.0], [39.6, 9.0], [39.7, 9.0], [39.8, 9.0], [39.9, 9.0], [40.0, 9.0], [40.1, 9.0], [40.2, 9.0], [40.3, 9.0], [40.4, 9.0], [40.5, 9.0], [40.6, 9.0], [40.7, 9.0], [40.8, 9.0], [40.9, 9.0], [41.0, 9.0], [41.1, 9.0], [41.2, 9.0], [41.3, 9.0], [41.4, 9.0], [41.5, 9.0], [41.6, 9.0], [41.7, 9.0], [41.8, 10.0], [41.9, 10.0], [42.0, 10.0], [42.1, 10.0], [42.2, 10.0], [42.3, 10.0], [42.4, 10.0], [42.5, 10.0], [42.6, 10.0], [42.7, 10.0], [42.8, 10.0], [42.9, 10.0], [43.0, 10.0], [43.1, 10.0], [43.2, 10.0], [43.3, 10.0], [43.4, 10.0], [43.5, 10.0], [43.6, 10.0], [43.7, 10.0], [43.8, 10.0], [43.9, 10.0], [44.0, 10.0], [44.1, 10.0], [44.2, 10.0], [44.3, 10.0], [44.4, 10.0], [44.5, 10.0], [44.6, 10.0], [44.7, 10.0], [44.8, 10.0], [44.9, 10.0], [45.0, 10.0], [45.1, 10.0], [45.2, 10.0], [45.3, 10.0], [45.4, 10.0], [45.5, 11.0], [45.6, 11.0], [45.7, 11.0], [45.8, 11.0], [45.9, 11.0], [46.0, 11.0], [46.1, 11.0], [46.2, 11.0], [46.3, 11.0], [46.4, 11.0], [46.5, 11.0], [46.6, 11.0], [46.7, 11.0], [46.8, 11.0], [46.9, 11.0], [47.0, 11.0], [47.1, 11.0], [47.2, 11.0], [47.3, 11.0], [47.4, 11.0], [47.5, 11.0], [47.6, 11.0], [47.7, 11.0], [47.8, 11.0], [47.9, 11.0], [48.0, 11.0], [48.1, 11.0], [48.2, 11.0], [48.3, 11.0], [48.4, 11.0], [48.5, 11.0], [48.6, 11.0], [48.7, 11.0], [48.8, 12.0], [48.9, 12.0], [49.0, 12.0], [49.1, 12.0], [49.2, 12.0], [49.3, 12.0], [49.4, 12.0], [49.5, 12.0], [49.6, 12.0], [49.7, 12.0], [49.8, 12.0], [49.9, 12.0], [50.0, 12.0], [50.1, 12.0], [50.2, 12.0], [50.3, 12.0], [50.4, 12.0], [50.5, 12.0], [50.6, 12.0], [50.7, 12.0], [50.8, 12.0], [50.9, 12.0], [51.0, 12.0], [51.1, 12.0], [51.2, 12.0], [51.3, 12.0], [51.4, 12.0], [51.5, 12.0], [51.6, 12.0], [51.7, 12.0], [51.8, 12.0], [51.9, 13.0], [52.0, 13.0], [52.1, 13.0], [52.2, 13.0], [52.3, 13.0], [52.4, 13.0], [52.5, 13.0], [52.6, 13.0], [52.7, 13.0], [52.8, 13.0], [52.9, 13.0], [53.0, 13.0], [53.1, 13.0], [53.2, 13.0], [53.3, 13.0], [53.4, 13.0], [53.5, 13.0], [53.6, 13.0], [53.7, 13.0], [53.8, 13.0], [53.9, 13.0], [54.0, 13.0], [54.1, 13.0], [54.2, 13.0], [54.3, 13.0], [54.4, 13.0], [54.5, 13.0], [54.6, 14.0], [54.7, 14.0], [54.8, 14.0], [54.9, 14.0], [55.0, 14.0], [55.1, 14.0], [55.2, 14.0], [55.3, 14.0], [55.4, 14.0], [55.5, 14.0], [55.6, 14.0], [55.7, 14.0], [55.8, 14.0], [55.9, 14.0], [56.0, 14.0], [56.1, 14.0], [56.2, 14.0], [56.3, 14.0], [56.4, 14.0], [56.5, 14.0], [56.6, 14.0], [56.7, 14.0], [56.8, 14.0], [56.9, 14.0], [57.0, 15.0], [57.1, 15.0], [57.2, 15.0], [57.3, 15.0], [57.4, 15.0], [57.5, 15.0], [57.6, 15.0], [57.7, 15.0], [57.8, 15.0], [57.9, 15.0], [58.0, 15.0], [58.1, 15.0], [58.2, 15.0], [58.3, 15.0], [58.4, 15.0], [58.5, 15.0], [58.6, 15.0], [58.7, 15.0], [58.8, 15.0], [58.9, 15.0], [59.0, 15.0], [59.1, 15.0], [59.2, 16.0], [59.3, 16.0], [59.4, 16.0], [59.5, 16.0], [59.6, 16.0], [59.7, 16.0], [59.8, 16.0], [59.9, 16.0], [60.0, 16.0], [60.1, 16.0], [60.2, 16.0], [60.3, 16.0], [60.4, 16.0], [60.5, 16.0], [60.6, 16.0], [60.7, 16.0], [60.8, 16.0], [60.9, 16.0], [61.0, 16.0], [61.1, 16.0], [61.2, 17.0], [61.3, 17.0], [61.4, 17.0], [61.5, 17.0], [61.6, 17.0], [61.7, 17.0], [61.8, 17.0], [61.9, 17.0], [62.0, 17.0], [62.1, 17.0], [62.2, 17.0], [62.3, 17.0], [62.4, 17.0], [62.5, 17.0], [62.6, 17.0], [62.7, 17.0], [62.8, 17.0], [62.9, 18.0], [63.0, 18.0], [63.1, 18.0], [63.2, 18.0], [63.3, 18.0], [63.4, 18.0], [63.5, 18.0], [63.6, 18.0], [63.7, 18.0], [63.8, 18.0], [63.9, 18.0], [64.0, 18.0], [64.1, 18.0], [64.2, 18.0], [64.3, 18.0], [64.4, 18.0], [64.5, 18.0], [64.6, 19.0], [64.7, 19.0], [64.8, 19.0], [64.9, 19.0], [65.0, 19.0], [65.1, 19.0], [65.2, 19.0], [65.3, 19.0], [65.4, 19.0], [65.5, 19.0], [65.6, 19.0], [65.7, 19.0], [65.8, 19.0], [65.9, 19.0], [66.0, 19.0], [66.1, 19.0], [66.2, 20.0], [66.3, 20.0], [66.4, 20.0], [66.5, 20.0], [66.6, 20.0], [66.7, 20.0], [66.8, 20.0], [66.9, 20.0], [67.0, 20.0], [67.1, 20.0], [67.2, 20.0], [67.3, 20.0], [67.4, 20.0], [67.5, 20.0], [67.6, 20.0], [67.7, 21.0], [67.8, 21.0], [67.9, 21.0], [68.0, 21.0], [68.1, 21.0], [68.2, 21.0], [68.3, 21.0], [68.4, 21.0], [68.5, 21.0], [68.6, 21.0], [68.7, 21.0], [68.8, 21.0], [68.9, 21.0], [69.0, 21.0], [69.1, 21.0], [69.2, 22.0], [69.3, 22.0], [69.4, 22.0], [69.5, 22.0], [69.6, 22.0], [69.7, 22.0], [69.8, 22.0], [69.9, 22.0], [70.0, 22.0], [70.1, 22.0], [70.2, 22.0], [70.3, 22.0], [70.4, 22.0], [70.5, 23.0], [70.6, 23.0], [70.7, 23.0], [70.8, 23.0], [70.9, 23.0], [71.0, 23.0], [71.1, 23.0], [71.2, 23.0], [71.3, 23.0], [71.4, 23.0], [71.5, 23.0], [71.6, 23.0], [71.7, 24.0], [71.8, 24.0], [71.9, 24.0], [72.0, 24.0], [72.1, 24.0], [72.2, 24.0], [72.3, 24.0], [72.4, 24.0], [72.5, 24.0], [72.6, 24.0], [72.7, 24.0], [72.8, 25.0], [72.9, 25.0], [73.0, 25.0], [73.1, 25.0], [73.2, 25.0], [73.3, 25.0], [73.4, 25.0], [73.5, 25.0], [73.6, 25.0], [73.7, 25.0], [73.8, 26.0], [73.9, 26.0], [74.0, 26.0], [74.1, 26.0], [74.2, 26.0], [74.3, 26.0], [74.4, 26.0], [74.5, 26.0], [74.6, 26.0], [74.7, 26.0], [74.8, 27.0], [74.9, 27.0], [75.0, 27.0], [75.1, 27.0], [75.2, 27.0], [75.3, 27.0], [75.4, 27.0], [75.5, 27.0], [75.6, 27.0], [75.7, 27.0], [75.8, 28.0], [75.9, 28.0], [76.0, 28.0], [76.1, 28.0], [76.2, 28.0], [76.3, 28.0], [76.4, 28.0], [76.5, 28.0], [76.6, 28.0], [76.7, 29.0], [76.8, 29.0], [76.9, 29.0], [77.0, 29.0], [77.1, 29.0], [77.2, 29.0], [77.3, 29.0], [77.4, 29.0], [77.5, 30.0], [77.6, 30.0], [77.7, 30.0], [77.8, 30.0], [77.9, 30.0], [78.0, 30.0], [78.1, 30.0], [78.2, 31.0], [78.3, 31.0], [78.4, 31.0], [78.5, 31.0], [78.6, 31.0], [78.7, 31.0], [78.8, 31.0], [78.9, 32.0], [79.0, 32.0], [79.1, 32.0], [79.2, 32.0], [79.3, 32.0], [79.4, 32.0], [79.5, 33.0], [79.6, 33.0], [79.7, 33.0], [79.8, 33.0], [79.9, 33.0], [80.0, 33.0], [80.1, 34.0], [80.2, 34.0], [80.3, 34.0], [80.4, 34.0], [80.5, 34.0], [80.6, 34.0], [80.7, 35.0], [80.8, 35.0], [80.9, 35.0], [81.0, 35.0], [81.1, 35.0], [81.2, 35.0], [81.3, 36.0], [81.4, 36.0], [81.5, 36.0], [81.6, 36.0], [81.7, 36.0], [81.8, 37.0], [81.9, 37.0], [82.0, 37.0], [82.1, 37.0], [82.2, 37.0], [82.3, 37.0], [82.4, 38.0], [82.5, 38.0], [82.6, 38.0], [82.7, 38.0], [82.8, 38.0], [82.9, 39.0], [83.0, 39.0], [83.1, 39.0], [83.2, 39.0], [83.3, 39.0], [83.4, 40.0], [83.5, 40.0], [83.6, 40.0], [83.7, 40.0], [83.8, 40.0], [83.9, 41.0], [84.0, 41.0], [84.1, 41.0], [84.2, 41.0], [84.3, 42.0], [84.4, 42.0], [84.5, 42.0], [84.6, 42.0], [84.7, 43.0], [84.8, 43.0], [84.9, 43.0], [85.0, 43.0], [85.1, 44.0], [85.2, 44.0], [85.3, 44.0], [85.4, 44.0], [85.5, 45.0], [85.6, 45.0], [85.7, 45.0], [85.8, 46.0], [85.9, 46.0], [86.0, 46.0], [86.1, 46.0], [86.2, 47.0], [86.3, 47.0], [86.4, 47.0], [86.5, 48.0], [86.6, 48.0], [86.7, 48.0], [86.8, 49.0], [86.9, 49.0], [87.0, 49.0], [87.1, 50.0], [87.2, 50.0], [87.3, 50.0], [87.4, 51.0], [87.5, 51.0], [87.6, 51.0], [87.7, 52.0], [87.8, 52.0], [87.9, 53.0], [88.0, 53.0], [88.1, 53.0], [88.2, 54.0], [88.3, 54.0], [88.4, 54.0], [88.5, 55.0], [88.6, 55.0], [88.7, 56.0], [88.8, 56.0], [88.9, 56.0], [89.0, 57.0], [89.1, 57.0], [89.2, 57.0], [89.3, 58.0], [89.4, 58.0], [89.5, 59.0], [89.6, 59.0], [89.7, 59.0], [89.8, 60.0], [89.9, 60.0], [90.0, 61.0], [90.1, 61.0], [90.2, 62.0], [90.3, 62.0], [90.4, 62.0], [90.5, 63.0], [90.6, 63.0], [90.7, 64.0], [90.8, 64.0], [90.9, 65.0], [91.0, 65.0], [91.1, 66.0], [91.2, 66.0], [91.3, 67.0], [91.4, 67.0], [91.5, 68.0], [91.6, 69.0], [91.7, 69.0], [91.8, 70.0], [91.9, 70.0], [92.0, 71.0], [92.1, 72.0], [92.2, 72.0], [92.3, 73.0], [92.4, 74.0], [92.5, 74.0], [92.6, 75.0], [92.7, 76.0], [92.8, 76.0], [92.9, 77.0], [93.0, 77.0], [93.1, 78.0], [93.2, 79.0], [93.3, 80.0], [93.4, 80.0], [93.5, 81.0], [93.6, 82.0], [93.7, 83.0], [93.8, 83.0], [93.9, 84.0], [94.0, 85.0], [94.1, 86.0], [94.2, 87.0], [94.3, 88.0], [94.4, 88.0], [94.5, 89.0], [94.6, 90.0], [94.7, 91.0], [94.8, 92.0], [94.9, 93.0], [95.0, 94.0], [95.1, 95.0], [95.2, 96.0], [95.3, 97.0], [95.4, 98.0], [95.5, 99.0], [95.6, 101.0], [95.7, 102.0], [95.8, 103.0], [95.9, 105.0], [96.0, 106.0], [96.1, 107.0], [96.2, 109.0], [96.3, 111.0], [96.4, 112.0], [96.5, 114.0], [96.6, 116.0], [96.7, 117.0], [96.8, 119.0], [96.9, 121.0], [97.0, 123.0], [97.1, 125.0], [97.2, 127.0], [97.3, 129.0], [97.4, 131.0], [97.5, 134.0], [97.6, 136.0], [97.7, 139.0], [97.8, 141.0], [97.9, 144.0], [98.0, 147.0], [98.1, 149.0], [98.2, 152.0], [98.3, 155.0], [98.4, 159.0], [98.5, 163.0], [98.6, 168.0], [98.7, 172.0], [98.8, 178.0], [98.9, 184.0], [99.0, 190.0], [99.1, 197.0], [99.2, 205.0], [99.3, 214.0], [99.4, 223.0], [99.5, 234.0], [99.6, 249.0], [99.7, 267.0], [99.8, 290.0], [99.9, 336.0]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 224514.0, "series": [{"data": [[0.0, 224514.0], [300.0, 326.0], [600.0, 1.0], [100.0, 8543.0], [200.0, 1614.0], [400.0, 75.0], [500.0, 19.0]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 19.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 235073.0, "series": [{"data": [[0.0, 235073.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 19.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 75.5558766859344, "minX": 1.792666851E12, "maxY": 100.0, "series": [{"data": [[1.792666871E12, 100.0], [1.792666873E12, 100.0], [1.792666875E12, 100.0], [1.792666877E12, 100.0], [1.792666879E12, 100.0], [1.792666859E12, 100.0], [1.792666902E12, 100.0], [1.792666861E12, 100.0], [1.792666904E12, 100.0], [1.792666863E12, 100.0], [1.792666906E12, 100.0], [1.792666865E12, 100.0], [1.792666908E12, 100.0], [1.792666867E12, 100.0], [1.79266691E12, 100.0], [1.792666869E12, 100.0], [1.792666892E12, 100.0], [1.792666851E12, 100.0], [1.792666894E12, 100.0], [1.792666853E12, 100.0], [1.792666896E12, 100.0], [1.792666855E12, 100.0], [1.792666898E12, 100.0], [1.792666857E12, 100.0], [1.7926669E12, 100.0], [1.792666882E12, 100.0], [1.792666884E12, 100.0], [1.792666886E12, 100.0], [1.792666888E12, 100.0], [1.79266689E12, 100.0], [1.79266687E12, 100.0], [1.792666872E12, 100.0], [1.792666874E12, 100.0], [1.792666876E12, 100.0], [1.792666878E12, 100.0], [1.79266688E12, 100.0], [1.79266686E12, 100.0], [1.792666903E12, 100.0], [1.792666905E12, 100.0], [1.792666862E12, 100.0], [1.792666864E12, 100.0], [1.792666907E12, 100.0], [1.792666909E12, 100.0], [1.792666866E12, 100.0], [1.792666868E12, 100.0], [1.792666911E12, 75.5558766859344], [1.792666891E12, 100.0], [1.792666893E12, 100.0], [1.792666852E12, 100.0], [1.792666895E12, 100.0], [1.792666897E12, 100.0], [1.792666854E12, 100.0], [1.792666856E12, 100.0], [1.792666899E12, 100.0], [1.792666901E12, 100.0], [1.792666858E12, 100.0], [1.792666881E12, 100.0], [1.792666883E12, 100.0], [1.792666885E12, 100.0], [1.792666887E12, 100.0], [1.792666889E12, 100.0]], "isOverall": false, "label": "线程组", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792666911E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 13.0, "maxY": 230.0, "series": [{"data": [[13.0, 12.0], [16.0, 18.0], [17.0, 6.148148148148147], [18.0, 3.7777777777777777], [19.0, 8.5], [20.0, 6.374999999999999], [21.0, 4.983333333333334], [22.0, 9.1], [23.0, 11.666666666666666], [24.0, 5.0], [25.0, 18.4], [26.0, 34.0], [28.0, 30.5], [29.0, 29.0], [30.0, 30.5], [31.0, 9.388888888888888], [33.0, 6.0], [32.0, 5.75], [35.0, 71.66666666666667], [37.0, 34.0], [38.0, 15.125], [40.0, 93.0], [43.0, 214.0], [42.0, 227.0], [45.0, 70.33333333333333], [44.0, 230.0], [47.0, 185.0], [46.0, 11.6], [49.0, 19.0], [48.0, 38.5], [51.0, 18.0], [50.0, 15.0], [53.0, 10.0], [52.0, 18.5], [57.0, 18.0], [59.0, 2.5], [58.0, 58.8], [61.0, 9.6], [60.0, 28.2], [63.0, 16.77551020408163], [62.0, 46.5], [67.0, 31.235294117647058], [66.0, 39.0], [65.0, 26.5], [64.0, 31.25], [71.0, 83.66666666666667], [69.0, 78.33333333333333], [75.0, 17.5], [74.0, 21.875], [73.0, 28.0], [72.0, 67.0], [79.0, 48.44444444444444], [78.0, 38.0], [77.0, 48.0], [76.0, 26.727272727272727], [83.0, 16.090909090909093], [82.0, 57.333333333333336], [81.0, 67.0], [87.0, 9.875], [86.0, 8.763636363636364], [85.0, 50.25], [84.0, 35.2], [91.0, 66.0], [90.0, 58.0], [89.0, 13.75], [88.0, 22.42857142857143], [95.0, 62.0], [94.0, 2.0], [93.0, 21.666666666666664], [92.0, 59.0], [98.0, 28.625], [97.0, 25.0], [96.0, 13.0], [100.0, 24.957629431278303]], "isOverall": false, "label": "Products", "isController": false}, {"data": [[99.8920720398822, 24.948564817177818]], "isOverall": false, "label": "Products-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 269994.0, "minX": 1.792666851E12, "maxY": 1920839.0, "series": [{"data": [[1.792666871E12, 1872717.0], [1.792666873E12, 1867941.0], [1.792666875E12, 1870925.0], [1.792666877E12, 1880566.0], [1.792666879E12, 1889162.0], [1.792666859E12, 1835567.0], [1.792666902E12, 1877971.0], [1.792666861E12, 1879678.0], [1.792666904E12, 1885281.0], [1.792666863E12, 1861196.0], [1.792666906E12, 1885825.0], [1.792666865E12, 1894271.0], [1.792666908E12, 1852326.0], [1.792666867E12, 1873482.0], [1.79266691E12, 1917980.0], [1.792666869E12, 1884585.0], [1.792666892E12, 1910440.0], [1.792666851E12, 1022668.0], [1.792666894E12, 1853093.0], [1.792666853E12, 1642337.0], [1.792666896E12, 1866817.0], [1.792666855E12, 1823340.0], [1.792666898E12, 1884243.0], [1.792666857E12, 1830205.0], [1.7926669E12, 1751514.0], [1.792666882E12, 1883852.0], [1.792666884E12, 1855092.0], [1.792666886E12, 1873353.0], [1.792666888E12, 1882264.0], [1.79266689E12, 1892421.0], [1.79266687E12, 1878595.0], [1.792666872E12, 1895370.0], [1.792666874E12, 1871055.0], [1.792666876E12, 1892809.0], [1.792666878E12, 1884411.0], [1.79266688E12, 1899486.0], [1.79266686E12, 1865399.0], [1.792666903E12, 1886844.0], [1.792666905E12, 1910754.0], [1.792666862E12, 1871201.0], [1.792666864E12, 1881795.0], [1.792666907E12, 1903804.0], [1.792666909E12, 1876676.0], [1.792666866E12, 1870682.0], [1.792666868E12, 1906560.0], [1.792666911E12, 490782.0], [1.792666891E12, 1868788.0], [1.792666893E12, 1869321.0], [1.792666852E12, 1523490.0], [1.792666895E12, 1891080.0], [1.792666897E12, 1908893.0], [1.792666854E12, 1721508.0], [1.792666856E12, 1806010.0], [1.792666899E12, 1920839.0], [1.792666901E12, 1874839.0], [1.792666858E12, 1686873.0], [1.792666881E12, 1857886.0], [1.792666883E12, 1877647.0], [1.792666885E12, 1899762.0], [1.792666887E12, 1881392.0], [1.792666889E12, 1881432.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.792666871E12, 1029324.0], [1.792666873E12, 1026726.0], [1.792666875E12, 1028289.0], [1.792666877E12, 1033748.0], [1.792666879E12, 1038424.0], [1.792666859E12, 1008768.0], [1.792666902E12, 1032178.0], [1.792666861E12, 1033226.0], [1.792666904E12, 1036347.0], [1.792666863E12, 1023084.0], [1.792666906E12, 1036863.0], [1.792666865E12, 1041293.0], [1.792666908E12, 1018142.0], [1.792666867E12, 1029843.0], [1.79266691E12, 1054036.0], [1.792666869E12, 1036085.0], [1.792666892E12, 1050143.0], [1.792666851E12, 561636.0], [1.792666894E12, 1018397.0], [1.792666853E12, 903150.0], [1.792666896E12, 1026202.0], [1.792666855E12, 1002011.0], [1.792666898E12, 1035562.0], [1.792666857E12, 1005906.0], [1.7926669E12, 962736.0], [1.792666882E12, 1035301.0], [1.792666884E12, 1019702.0], [1.792666886E12, 1029580.0], [1.792666888E12, 1034522.0], [1.79266689E12, 1039983.0], [1.79266687E12, 1032701.0], [1.792666872E12, 1042073.0], [1.792666874E12, 1028542.0], [1.792666876E12, 1040504.0], [1.792666878E12, 1035570.0], [1.79266688E12, 1043632.0], [1.79266686E12, 1025425.0], [1.792666903E12, 1037128.0], [1.792666905E12, 1050134.0], [1.792666862E12, 1028540.0], [1.792666864E12, 1034260.0], [1.792666907E12, 1046235.0], [1.792666909E12, 1031401.0], [1.792666866E12, 1028281.0], [1.792666868E12, 1048050.0], [1.792666911E12, 269994.0], [1.792666891E12, 1027241.0], [1.792666893E12, 1027758.0], [1.792666852E12, 838639.0], [1.792666895E12, 1039729.0], [1.792666897E12, 1049608.0], [1.792666854E12, 945816.0], [1.792666856E12, 992650.0], [1.792666899E12, 1055858.0], [1.792666901E12, 1030622.0], [1.792666858E12, 927095.0], [1.792666881E12, 1021260.0], [1.792666883E12, 1031922.0], [1.792666885E12, 1043889.0], [1.792666887E12, 1034014.0], [1.792666889E12, 1034014.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792666911E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 18.408122119815708, "minX": 1.792666851E12, "maxY": 27.887766554433227, "series": [{"data": [[1.792666871E12, 25.972706595905986], [1.792666873E12, 24.828984038510264], [1.792666875E12, 25.909182899063982], [1.792666877E12, 24.965022647206872], [1.792666879E12, 25.94188376753497], [1.792666859E12, 25.38705518308409], [1.792666902E12, 24.55947580645163], [1.792666861E12, 25.42472306142994], [1.792666904E12, 25.7690763052209], [1.792666863E12, 25.93135011441649], [1.792666906E12, 24.216758655293503], [1.792666865E12, 24.896827379465403], [1.792666908E12, 25.167092488502764], [1.792666867E12, 25.775448345541683], [1.79266691E12, 25.575765054294177], [1.792666869E12, 25.17072558373087], [1.792666892E12, 25.83700767896954], [1.792666851E12, 24.222325150532605], [1.792666894E12, 26.1731800766284], [1.792666853E12, 18.408122119815708], [1.792666896E12, 25.369328263624833], [1.792666855E12, 23.543354101765317], [1.792666898E12, 25.042702838482818], [1.792666857E12, 25.364365140936115], [1.7926669E12, 26.39827073763846], [1.792666882E12, 24.795226130653276], [1.792666884E12, 24.621683673469413], [1.792666886E12, 26.03890853966647], [1.792666888E12, 25.195624842846296], [1.79266689E12, 25.738619309654766], [1.79266687E12, 24.18261964735515], [1.792666872E12, 24.616325511732406], [1.792666874E12, 24.965857359635784], [1.792666876E12, 25.416749999999997], [1.792666878E12, 23.83521728208995], [1.79266688E12, 24.33100697906284], [1.79266686E12, 24.83257229832569], [1.792666903E12, 25.278154000501672], [1.792666905E12, 24.671042853604174], [1.792666862E12, 24.172736469398057], [1.792666864E12, 25.742706237424542], [1.792666907E12, 25.37692690203881], [1.792666909E12, 24.54627994955869], [1.792666866E12, 24.383253225398384], [1.792666868E12, 24.48696947133278], [1.792666911E12, 20.578034682080947], [1.792666891E12, 24.294504937958916], [1.792666893E12, 24.09946848899018], [1.792666852E12, 26.375000000000046], [1.792666895E12, 24.817863397548145], [1.792666897E12, 24.977199504337033], [1.792666854E12, 21.266226622662245], [1.792666856E12, 25.264675052410908], [1.792666899E12, 24.764966740576487], [1.792666901E12, 25.174406865219634], [1.792666858E12, 27.887766554433227], [1.792666881E12, 25.477585328578723], [1.792666883E12, 26.080917569952085], [1.792666885E12, 24.582606528781504], [1.792666887E12, 24.39471698113204], [1.792666889E12, 24.731069182389938]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792666911E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 18.393145161290327, "minX": 1.792666851E12, "maxY": 27.883557800224434, "series": [{"data": [[1.792666871E12, 25.96967399545112], [1.792666873E12, 24.828223967570285], [1.792666875E12, 25.907918036933882], [1.792666877E12, 24.963764469048837], [1.792666879E12, 25.940380761522977], [1.792666859E12, 25.386023723568822], [1.792666902E12, 24.558215725806434], [1.792666861E12, 25.4232124874119], [1.792666904E12, 25.767570281124527], [1.792666863E12, 25.92702771421308], [1.792666906E12, 24.215504264927237], [1.792666865E12, 24.89532850362232], [1.792666908E12, 25.166070516096134], [1.792666867E12, 25.77418540035367], [1.79266691E12, 25.57527147087854], [1.792666869E12, 25.16947024855639], [1.792666892E12, 25.83601684419118], [1.792666851E12, 24.196850393700775], [1.792666894E12, 26.172158365261836], [1.792666853E12, 18.393145161290327], [1.792666896E12, 25.36780735107734], [1.792666855E12, 23.523624091381137], [1.792666898E12, 25.041698065812582], [1.792666857E12, 25.36022756658902], [1.7926669E12, 26.396919751418533], [1.792666882E12, 24.7944723618091], [1.792666884E12, 24.620918367346935], [1.792666886E12, 26.036887316826707], [1.792666888E12, 25.19386472215232], [1.79266689E12, 25.737368684342158], [1.79266687E12, 24.18110831234257], [1.792666872E12, 24.61607588617072], [1.792666874E12, 24.96383409205874], [1.792666876E12, 25.414999999999964], [1.792666878E12, 23.833961316252207], [1.79266688E12, 24.328763708873364], [1.79266686E12, 24.829274479959476], [1.792666903E12, 25.27715073990467], [1.792666905E12, 24.66856576665841], [1.792666862E12, 24.169448659585267], [1.792666864E12, 25.741700201207205], [1.792666907E12, 25.37593237195421], [1.792666909E12, 24.546027742749075], [1.792666866E12, 24.38224133569437], [1.792666868E12, 24.48572846860261], [1.792666911E12, 20.576107899807326], [1.792666891E12, 24.29374525196258], [1.792666893E12, 24.09820298658566], [1.792666852E12, 26.35918114143919], [1.792666895E12, 24.81711283462594], [1.792666897E12, 24.97620817843862], [1.792666854E12, 21.24697469746969], [1.792666856E12, 25.255503144654078], [1.792666899E12, 24.76373491007637], [1.792666901E12, 25.173649671883002], [1.792666858E12, 27.883557800224434], [1.792666881E12, 25.475802343351965], [1.792666883E12, 26.079909251323386], [1.792666885E12, 24.582108148517268], [1.792666887E12, 24.393962264150918], [1.792666889E12, 24.730062893081723]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792666911E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 4.999999999999996E-4, "minX": 1.792666851E12, "maxY": 0.40944881889763757, "series": [{"data": [[1.792666871E12, 0.002021733636593382], [1.792666873E12, 0.0017734988598935896], [1.792666875E12, 0.0030356691120667872], [1.792666877E12, 0.0032712632108706633], [1.792666879E12, 0.0017535070140280568], [1.792666859E12, 0.042547705002578685], [1.792666902E12, 0.0025201612903225927], [1.792666861E12, 0.01208459214501509], [1.792666904E12, 0.0030120481927710815], [1.792666863E12, 0.0071192473938469295], [1.792666906E12, 0.002508780732563981], [1.792666865E12, 0.004496627529352987], [1.792666908E12, 0.002043944813490036], [1.792666867E12, 0.004546602677443798], [1.79266691E12, 0.0024679170779861844], [1.792666869E12, 0.0017574692442882283], [1.792666892E12, 0.003220213029477335], [1.792666851E12, 0.40944881889763757], [1.792666894E12, 5.108556832694776E-4], [1.792666853E12, 0.2655529953917051], [1.792666896E12, 0.0027883396704689524], [1.792666855E12, 0.19288681204569066], [1.792666898E12, 0.0012559658377292162], [1.792666857E12, 0.04990949056115853], [1.7926669E12, 0.0027019724398811146], [1.792666882E12, 0.0025125628140703553], [1.792666884E12, 0.0017857142857142887], [1.792666886E12, 0.0020212228398180914], [1.792666888E12, 0.0020115665074176546], [1.79266689E12, 0.002501250625312657], [1.79266687E12, 0.002267002518891696], [1.792666872E12, 0.0014977533699450849], [1.792666874E12, 0.003540718259989881], [1.792666876E12, 4.999999999999996E-4], [1.792666878E12, 0.00150715900527506], [1.79266688E12, 0.0022432701894317068], [1.79266686E12, 0.007356671740233386], [1.792666903E12, 0.0017557060446450952], [1.792666905E12, 0.0014862521674510755], [1.792666862E12, 0.004299443601416293], [1.792666864E12, 0.00402414486921528], [1.792666907E12, 0.0014917951268025834], [1.792666909E12, 0.0017654476670870098], [1.792666866E12, 0.0032886415380723503], [1.792666868E12, 0.00173740382228841], [1.792666911E12, 0.0028901734104046233], [1.792666891E12, 0.0025322866548493426], [1.792666893E12, 0.0020248038471273127], [1.792666852E12, 0.20347394540942934], [1.792666895E12, 0.001751313485113837], [1.792666897E12, 0.0017348203221809154], [1.792666854E12, 0.2552255225522542], [1.792666856E12, 0.07389937106918243], [1.792666899E12, 0.0029563932002956393], [1.792666901E12, 0.002271580010095922], [1.792666858E12, 0.024130190796857482], [1.792666881E12, 0.0017829852266938383], [1.792666883E12, 0.0015124779430299978], [1.792666885E12, 0.002491901320707701], [1.792666887E12, 0.0015094339622641526], [1.792666889E12, 0.003773584905660382]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792666911E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.792666851E12, "maxY": 618.0, "series": [{"data": [[1.792666871E12, 573.0], [1.792666873E12, 541.0], [1.792666875E12, 451.0], [1.792666877E12, 333.0], [1.792666879E12, 327.0], [1.792666859E12, 284.0], [1.792666902E12, 539.0], [1.792666861E12, 442.0], [1.792666904E12, 524.0], [1.792666863E12, 424.0], [1.792666906E12, 618.0], [1.792666865E12, 442.0], [1.792666908E12, 450.0], [1.792666867E12, 409.0], [1.79266691E12, 380.0], [1.792666869E12, 439.0], [1.792666892E12, 456.0], [1.792666851E12, 157.0], [1.792666894E12, 368.0], [1.792666853E12, 252.0], [1.792666896E12, 362.0], [1.792666855E12, 124.0], [1.792666898E12, 551.0], [1.792666857E12, 221.0], [1.7926669E12, 400.0], [1.792666882E12, 468.0], [1.792666884E12, 502.0], [1.792666886E12, 565.0], [1.792666888E12, 493.0], [1.79266689E12, 454.0], [1.79266687E12, 405.0], [1.792666872E12, 421.0], [1.792666874E12, 485.0], [1.792666876E12, 332.0], [1.792666878E12, 404.0], [1.79266688E12, 344.0], [1.79266686E12, 450.0], [1.792666903E12, 344.0], [1.792666905E12, 394.0], [1.792666862E12, 414.0], [1.792666864E12, 542.0], [1.792666907E12, 574.0], [1.792666909E12, 464.0], [1.792666866E12, 353.0], [1.792666868E12, 323.0], [1.792666911E12, 230.0], [1.792666891E12, 456.0], [1.792666893E12, 591.0], [1.792666852E12, 288.0], [1.792666895E12, 390.0], [1.792666897E12, 543.0], [1.792666854E12, 215.0], [1.792666856E12, 282.0], [1.792666899E12, 284.0], [1.792666901E12, 472.0], [1.792666858E12, 246.0], [1.792666881E12, 559.0], [1.792666883E12, 552.0], [1.792666885E12, 433.0], [1.792666887E12, 430.0], [1.792666889E12, 399.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.792666871E12, 1.0], [1.792666873E12, 1.0], [1.792666875E12, 1.0], [1.792666877E12, 1.0], [1.792666879E12, 1.0], [1.792666859E12, 1.0], [1.792666902E12, 1.0], [1.792666861E12, 1.0], [1.792666904E12, 1.0], [1.792666863E12, 1.0], [1.792666906E12, 1.0], [1.792666865E12, 1.0], [1.792666908E12, 1.0], [1.792666867E12, 1.0], [1.79266691E12, 1.0], [1.792666869E12, 1.0], [1.792666892E12, 1.0], [1.792666851E12, 1.0], [1.792666894E12, 1.0], [1.792666853E12, 1.0], [1.792666896E12, 1.0], [1.792666855E12, 1.0], [1.792666898E12, 1.0], [1.792666857E12, 1.0], [1.7926669E12, 1.0], [1.792666882E12, 1.0], [1.792666884E12, 1.0], [1.792666886E12, 1.0], [1.792666888E12, 1.0], [1.79266689E12, 1.0], [1.79266687E12, 1.0], [1.792666872E12, 1.0], [1.792666874E12, 1.0], [1.792666876E12, 1.0], [1.792666878E12, 1.0], [1.79266688E12, 1.0], [1.79266686E12, 1.0], [1.792666903E12, 1.0], [1.792666905E12, 1.0], [1.792666862E12, 1.0], [1.792666864E12, 1.0], [1.792666907E12, 1.0], [1.792666909E12, 1.0], [1.792666866E12, 1.0], [1.792666868E12, 1.0], [1.792666911E12, 1.0], [1.792666891E12, 1.0], [1.792666893E12, 1.0], [1.792666852E12, 1.0], [1.792666895E12, 1.0], [1.792666897E12, 1.0], [1.792666854E12, 1.0], [1.792666856E12, 1.0], [1.792666899E12, 1.0], [1.792666901E12, 1.0], [1.792666858E12, 1.0], [1.792666881E12, 1.0], [1.792666883E12, 1.0], [1.792666885E12, 1.0], [1.792666887E12, 1.0], [1.792666889E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.792666871E12, 63.0], [1.792666873E12, 70.0], [1.792666875E12, 64.0], [1.792666877E12, 63.0], [1.792666879E12, 54.0], [1.792666859E12, 62.0], [1.792666902E12, 66.0], [1.792666861E12, 61.0], [1.792666904E12, 70.0], [1.792666863E12, 72.0], [1.792666906E12, 65.0], [1.792666865E12, 59.0], [1.792666908E12, 66.0], [1.792666867E12, 72.0], [1.79266691E12, 50.0], [1.792666869E12, 58.0], [1.792666892E12, 59.0], [1.792666851E12, 44.0], [1.792666894E12, 71.40000000000009], [1.792666853E12, 38.0], [1.792666896E12, 67.0], [1.792666855E12, 42.0], [1.792666898E12, 72.0], [1.792666857E12, 58.0], [1.7926669E12, 52.0], [1.792666882E12, 65.0], [1.792666884E12, 64.0], [1.792666886E12, 71.0], [1.792666888E12, 64.0], [1.79266689E12, 68.0], [1.79266687E12, 65.0], [1.792666872E12, 64.0], [1.792666874E12, 70.0], [1.792666876E12, 62.90000000000009], [1.792666878E12, 57.80000000000018], [1.79266688E12, 56.0], [1.79266686E12, 63.0], [1.792666903E12, 69.0], [1.792666905E12, 56.0], [1.792666862E12, 67.0], [1.792666864E12, 60.0], [1.792666907E12, 46.0], [1.792666909E12, 68.0], [1.792666866E12, 63.0], [1.792666868E12, 54.0], [1.792666911E12, 50.0], [1.792666891E12, 70.0], [1.792666893E12, 65.0], [1.792666852E12, 45.0], [1.792666895E12, 65.0], [1.792666897E12, 62.0], [1.792666854E12, 40.0], [1.792666856E12, 55.0], [1.792666899E12, 49.0], [1.792666901E12, 67.0], [1.792666858E12, 63.0], [1.792666881E12, 73.30000000000018], [1.792666883E12, 64.0], [1.792666885E12, 60.0], [1.792666887E12, 68.0], [1.792666889E12, 63.40000000000009]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.792666871E12, 225.10000000000036], [1.792666873E12, 213.0], [1.792666875E12, 196.0], [1.792666877E12, 180.5], [1.792666879E12, 179.5600000000013], [1.792666859E12, 136.21000000000004], [1.792666902E12, 226.30999999999995], [1.792666861E12, 150.53999999999996], [1.792666904E12, 240.0], [1.792666863E12, 214.97999999999956], [1.792666906E12, 227.39000000000033], [1.792666865E12, 166.8800000000001], [1.792666908E12, 229.8499999999999], [1.792666867E12, 206.80000000000064], [1.79266691E12, 189.0], [1.792666869E12, 193.0], [1.792666892E12, 181.47999999999956], [1.792666851E12, 106.40000000000009], [1.792666894E12, 214.6800000000003], [1.792666853E12, 116.0], [1.792666896E12, 192.53999999999996], [1.792666855E12, 82.9399999999996], [1.792666898E12, 203.0], [1.792666857E12, 128.32000000000016], [1.7926669E12, 216.92000000000007], [1.792666882E12, 237.19000000000005], [1.792666884E12, 202.0], [1.792666886E12, 204.8199999999997], [1.792666888E12, 196.5399999999986], [1.79266689E12, 212.06999999999834], [1.79266687E12, 185.57999999999993], [1.792666872E12, 194.92999999999984], [1.792666874E12, 232.89999999999964], [1.792666876E12, 172.98999999999978], [1.792666878E12, 148.35999999999967], [1.79266688E12, 159.8699999999999], [1.79266686E12, 176.57000000000016], [1.792666903E12, 211.1199999999999], [1.792666905E12, 170.6199999999999], [1.792666862E12, 186.0], [1.792666864E12, 199.69000000000005], [1.792666907E12, 236.76999999999998], [1.792666909E12, 238.34000000000015], [1.792666866E12, 193.46000000000004], [1.792666868E12, 154.09999999999945], [1.792666911E12, 137.2199999999998], [1.792666891E12, 192.5], [1.792666893E12, 212.44000000000005], [1.792666852E12, 185.75], [1.792666895E12, 194.0], [1.792666897E12, 203.63999999999987], [1.792666854E12, 119.63000000000011], [1.792666856E12, 126.0], [1.792666899E12, 133.80000000000018], [1.792666901E12, 209.0], [1.792666858E12, 148.3499999999999], [1.792666881E12, 199.46000000000004], [1.792666883E12, 229.9600000000005], [1.792666885E12, 184.86000000000013], [1.792666887E12, 197.23999999999978], [1.792666889E12, 205.23999999999978]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.792666871E12, 10.0], [1.792666873E12, 8.0], [1.792666875E12, 12.0], [1.792666877E12, 12.0], [1.792666879E12, 16.0], [1.792666859E12, 14.0], [1.792666902E12, 9.0], [1.792666861E12, 15.0], [1.792666904E12, 9.0], [1.792666863E12, 9.0], [1.792666906E12, 10.0], [1.792666865E12, 14.0], [1.792666908E12, 10.0], [1.792666867E12, 8.0], [1.79266691E12, 17.0], [1.792666869E12, 14.0], [1.792666892E12, 15.0], [1.792666851E12, 22.0], [1.792666894E12, 10.0], [1.792666853E12, 12.0], [1.792666896E12, 12.0], [1.792666855E12, 22.0], [1.792666898E12, 8.0], [1.792666857E12, 18.0], [1.7926669E12, 17.0], [1.792666882E12, 9.0], [1.792666884E12, 11.0], [1.792666886E12, 10.0], [1.792666888E12, 11.0], [1.79266689E12, 10.0], [1.79266687E12, 10.0], [1.792666872E12, 10.0], [1.792666874E12, 8.0], [1.792666876E12, 13.0], [1.792666878E12, 13.0], [1.79266688E12, 14.0], [1.79266686E12, 10.0], [1.792666903E12, 10.0], [1.792666905E12, 15.0], [1.792666862E12, 9.0], [1.792666864E12, 12.0], [1.792666907E12, 17.0], [1.792666909E12, 8.0], [1.792666866E12, 11.0], [1.792666868E12, 15.0], [1.792666911E12, 10.0], [1.792666891E12, 9.0], [1.792666893E12, 8.0], [1.792666852E12, 22.0], [1.792666895E12, 11.0], [1.792666897E12, 12.0], [1.792666854E12, 16.0], [1.792666856E12, 18.0], [1.792666899E12, 18.0], [1.792666901E12, 9.0], [1.792666858E12, 19.0], [1.792666881E12, 9.0], [1.792666883E12, 11.0], [1.792666885E12, 13.0], [1.792666887E12, 8.0], [1.792666889E12, 10.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.792666871E12, 110.0], [1.792666873E12, 116.0], [1.792666875E12, 99.0], [1.792666877E12, 98.0], [1.792666879E12, 86.0], [1.792666859E12, 85.0], [1.792666902E12, 109.0], [1.792666861E12, 87.0], [1.792666904E12, 110.0], [1.792666863E12, 112.0], [1.792666906E12, 101.0], [1.792666865E12, 83.0], [1.792666908E12, 96.0], [1.792666867E12, 104.0], [1.79266691E12, 77.34999999999991], [1.792666869E12, 90.0], [1.792666892E12, 88.0], [1.792666851E12, 66.0], [1.792666894E12, 115.19999999999982], [1.792666853E12, 54.0], [1.792666896E12, 104.69999999999982], [1.792666855E12, 57.0], [1.792666898E12, 105.89999999999964], [1.792666857E12, 77.0], [1.7926669E12, 85.0], [1.792666882E12, 107.0], [1.792666884E12, 98.0], [1.792666886E12, 109.0], [1.792666888E12, 94.0], [1.79266689E12, 104.04999999999973], [1.79266687E12, 100.0], [1.792666872E12, 101.0], [1.792666874E12, 110.0], [1.792666876E12, 93.0], [1.792666878E12, 86.0], [1.79266688E12, 82.34999999999991], [1.79266686E12, 98.0], [1.792666903E12, 107.0], [1.792666905E12, 87.0], [1.792666862E12, 103.0], [1.792666864E12, 98.14999999999964], [1.792666907E12, 70.0], [1.792666909E12, 111.0], [1.792666866E12, 94.0], [1.792666868E12, 86.0], [1.792666911E12, 79.0], [1.792666891E12, 106.0], [1.792666893E12, 103.0], [1.792666852E12, 63.0], [1.792666895E12, 101.0], [1.792666897E12, 92.0], [1.792666854E12, 57.0], [1.792666856E12, 73.14999999999964], [1.792666899E12, 67.0], [1.792666901E12, 113.84999999999991], [1.792666858E12, 93.0], [1.792666881E12, 119.0], [1.792666883E12, 98.0], [1.792666885E12, 92.29999999999973], [1.792666887E12, 108.19999999999982], [1.792666889E12, 99.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792666911E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 8.0, "minX": 1038.0, "maxY": 22.0, "series": [{"data": [[1038.0, 10.0], [2159.0, 22.0], [3224.0, 22.0], [3472.0, 12.0], [3564.0, 19.0], [3636.0, 16.0], [3701.0, 17.0], [3816.0, 18.0], [3942.0, 10.0], [3852.0, 22.0], [3867.0, 18.0], [3878.0, 14.0], [3954.0, 9.0], [3933.0, 9.0], [3926.0, 9.0], [3967.0, 11.0], [3914.0, 10.0], [3962.0, 9.0], [3965.0, 8.0], [3920.0, 11.0], [3915.0, 10.0], [3953.0, 11.0], [3951.0, 8.0], [3959.0, 8.0], [3957.0, 10.0], [3958.0, 10.0], [3947.0, 8.0], [3945.0, 12.0], [3949.0, 9.0], [3972.0, 15.0], [3976.0, 12.0], [4003.0, 14.0], [4029.0, 15.0], [3983.0, 14.0], [3992.0, 16.0], [3987.0, 10.0], [3984.0, 9.0], [3986.0, 10.0], [3997.0, 11.0], [3998.0, 10.0], [4037.0, 15.0], [4059.0, 18.0], [4052.0, 17.0], [4035.0, 12.0], [3981.0, 11.0], [3980.0, 9.0], [3977.0, 11.0], [3970.0, 10.0], [3968.0, 9.0], [4006.0, 10.0], [4012.0, 14.0], [4013.0, 13.0], [4022.0, 17.0], [4000.0, 13.0], [3974.0, 12.0], [3975.0, 9.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4059.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8.0, "minX": 1038.0, "maxY": 22.0, "series": [{"data": [[1038.0, 10.0], [2159.0, 22.0], [3224.0, 22.0], [3472.0, 12.0], [3564.0, 19.0], [3636.0, 16.0], [3701.0, 17.0], [3816.0, 18.0], [3942.0, 10.0], [3852.0, 22.0], [3867.0, 18.0], [3878.0, 14.0], [3954.0, 9.0], [3933.0, 9.0], [3926.0, 9.0], [3967.0, 11.0], [3914.0, 10.0], [3962.0, 9.0], [3965.0, 8.0], [3920.0, 11.0], [3915.0, 10.0], [3953.0, 11.0], [3951.0, 8.0], [3959.0, 8.0], [3957.0, 10.0], [3958.0, 10.0], [3947.0, 8.0], [3945.0, 12.0], [3949.0, 9.0], [3972.0, 15.0], [3976.0, 12.0], [4003.0, 14.0], [4029.0, 15.0], [3983.0, 14.0], [3992.0, 16.0], [3987.0, 10.0], [3984.0, 9.0], [3986.0, 10.0], [3997.0, 11.0], [3998.0, 10.0], [4037.0, 15.0], [4059.0, 18.0], [4052.0, 17.0], [4035.0, 12.0], [3981.0, 11.0], [3980.0, 9.0], [3977.0, 11.0], [3970.0, 10.0], [3968.0, 9.0], [4006.0, 10.0], [4012.0, 14.0], [4013.0, 13.0], [4022.0, 17.0], [4000.0, 13.0], [3974.0, 12.0], [3975.0, 9.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4059.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 940.0, "minX": 1.792666851E12, "maxY": 4057.0, "series": [{"data": [[1.792666871E12, 3957.0], [1.792666873E12, 3948.0], [1.792666875E12, 3953.0], [1.792666877E12, 3974.0], [1.792666879E12, 3993.0], [1.792666859E12, 3877.0], [1.792666902E12, 3968.0], [1.792666861E12, 3970.0], [1.792666904E12, 3982.0], [1.792666863E12, 3934.0], [1.792666906E12, 3986.0], [1.792666865E12, 4002.0], [1.792666908E12, 3913.0], [1.792666867E12, 3958.0], [1.79266691E12, 4051.0], [1.792666869E12, 3984.0], [1.792666892E12, 4036.0], [1.792666851E12, 2237.0], [1.792666894E12, 3915.0], [1.792666853E12, 3479.0], [1.792666896E12, 3945.0], [1.792666855E12, 3855.0], [1.792666898E12, 3981.0], [1.792666857E12, 3867.0], [1.7926669E12, 3703.0], [1.792666882E12, 3980.0], [1.792666884E12, 3920.0], [1.792666886E12, 3958.0], [1.792666888E12, 3974.0], [1.79266689E12, 4000.0], [1.79266687E12, 3970.0], [1.792666872E12, 4005.0], [1.792666874E12, 3954.0], [1.792666876E12, 4000.0], [1.792666878E12, 3980.0], [1.79266688E12, 4012.0], [1.79266686E12, 3943.0], [1.792666903E12, 3988.0], [1.792666905E12, 4039.0], [1.792666862E12, 3955.0], [1.792666864E12, 3976.0], [1.792666907E12, 4022.0], [1.792666909E12, 3965.0], [1.792666866E12, 3954.0], [1.792666868E12, 4029.0], [1.792666911E12, 940.0], [1.792666891E12, 3949.0], [1.792666893E12, 3952.0], [1.792666852E12, 3196.0], [1.792666895E12, 3997.0], [1.792666897E12, 4035.0], [1.792666854E12, 3663.0], [1.792666856E12, 3829.0], [1.792666899E12, 4057.0], [1.792666901E12, 3961.0], [1.792666858E12, 3564.0], [1.792666881E12, 3926.0], [1.792666883E12, 3967.0], [1.792666885E12, 4013.0], [1.792666887E12, 3975.0], [1.792666889E12, 3976.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792666911E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1038.0, "minX": 1.792666851E12, "maxY": 4059.0, "series": [{"data": [[1.792666871E12, 3957.0], [1.792666873E12, 3947.0], [1.792666875E12, 3953.0], [1.792666877E12, 3974.0], [1.792666879E12, 3992.0], [1.792666859E12, 3878.0], [1.792666902E12, 3968.0], [1.792666861E12, 3972.0], [1.792666904E12, 3984.0], [1.792666863E12, 3933.0], [1.792666906E12, 3986.0], [1.792666865E12, 4003.0], [1.792666908E12, 3914.0], [1.792666867E12, 3959.0], [1.79266691E12, 4052.0], [1.792666869E12, 3983.0], [1.792666892E12, 4037.0], [1.792666851E12, 2159.0], [1.792666894E12, 3915.0], [1.792666853E12, 3472.0], [1.792666896E12, 3945.0], [1.792666855E12, 3852.0], [1.792666898E12, 3981.0], [1.792666857E12, 3867.0], [1.7926669E12, 3701.0], [1.792666882E12, 3980.0], [1.792666884E12, 3920.0], [1.792666886E12, 3958.0], [1.792666888E12, 3977.0], [1.79266689E12, 3998.0], [1.79266687E12, 3970.0], [1.792666872E12, 4006.0], [1.792666874E12, 3954.0], [1.792666876E12, 4000.0], [1.792666878E12, 3981.0], [1.79266688E12, 4012.0], [1.79266686E12, 3942.0], [1.792666903E12, 3987.0], [1.792666905E12, 4037.0], [1.792666862E12, 3954.0], [1.792666864E12, 3976.0], [1.792666907E12, 4022.0], [1.792666909E12, 3965.0], [1.792666866E12, 3953.0], [1.792666868E12, 4029.0], [1.792666911E12, 1038.0], [1.792666891E12, 3949.0], [1.792666893E12, 3951.0], [1.792666852E12, 3224.0], [1.792666895E12, 3997.0], [1.792666897E12, 4035.0], [1.792666854E12, 3636.0], [1.792666856E12, 3816.0], [1.792666899E12, 4059.0], [1.792666901E12, 3962.0], [1.792666858E12, 3564.0], [1.792666881E12, 3926.0], [1.792666883E12, 3967.0], [1.792666885E12, 4013.0], [1.792666887E12, 3975.0], [1.792666889E12, 3975.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.792666911E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1038.0, "minX": 1.792666851E12, "maxY": 4059.0, "series": [{"data": [[1.792666871E12, 3957.0], [1.792666873E12, 3947.0], [1.792666875E12, 3953.0], [1.792666877E12, 3974.0], [1.792666879E12, 3992.0], [1.792666859E12, 3878.0], [1.792666902E12, 3968.0], [1.792666861E12, 3972.0], [1.792666904E12, 3984.0], [1.792666863E12, 3933.0], [1.792666906E12, 3986.0], [1.792666865E12, 4003.0], [1.792666908E12, 3914.0], [1.792666867E12, 3959.0], [1.79266691E12, 4052.0], [1.792666869E12, 3983.0], [1.792666892E12, 4037.0], [1.792666851E12, 2159.0], [1.792666894E12, 3915.0], [1.792666853E12, 3472.0], [1.792666896E12, 3945.0], [1.792666855E12, 3852.0], [1.792666898E12, 3981.0], [1.792666857E12, 3867.0], [1.7926669E12, 3701.0], [1.792666882E12, 3980.0], [1.792666884E12, 3920.0], [1.792666886E12, 3958.0], [1.792666888E12, 3977.0], [1.79266689E12, 3998.0], [1.79266687E12, 3970.0], [1.792666872E12, 4006.0], [1.792666874E12, 3954.0], [1.792666876E12, 4000.0], [1.792666878E12, 3981.0], [1.79266688E12, 4012.0], [1.79266686E12, 3942.0], [1.792666903E12, 3987.0], [1.792666905E12, 4037.0], [1.792666862E12, 3954.0], [1.792666864E12, 3976.0], [1.792666907E12, 4022.0], [1.792666909E12, 3965.0], [1.792666866E12, 3953.0], [1.792666868E12, 4029.0], [1.792666911E12, 1038.0], [1.792666891E12, 3949.0], [1.792666893E12, 3951.0], [1.792666852E12, 3224.0], [1.792666895E12, 3997.0], [1.792666897E12, 4035.0], [1.792666854E12, 3636.0], [1.792666856E12, 3816.0], [1.792666899E12, 4059.0], [1.792666901E12, 3962.0], [1.792666858E12, 3564.0], [1.792666881E12, 3926.0], [1.792666883E12, 3967.0], [1.792666885E12, 4013.0], [1.792666887E12, 3975.0], [1.792666889E12, 3975.0]], "isOverall": false, "label": "Products-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792666911E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1038.0, "minX": 1.792666851E12, "maxY": 4059.0, "series": [{"data": [[1.792666871E12, 3957.0], [1.792666873E12, 3947.0], [1.792666875E12, 3953.0], [1.792666877E12, 3974.0], [1.792666879E12, 3992.0], [1.792666859E12, 3878.0], [1.792666902E12, 3968.0], [1.792666861E12, 3972.0], [1.792666904E12, 3984.0], [1.792666863E12, 3933.0], [1.792666906E12, 3986.0], [1.792666865E12, 4003.0], [1.792666908E12, 3914.0], [1.792666867E12, 3959.0], [1.79266691E12, 4052.0], [1.792666869E12, 3983.0], [1.792666892E12, 4037.0], [1.792666851E12, 2159.0], [1.792666894E12, 3915.0], [1.792666853E12, 3472.0], [1.792666896E12, 3945.0], [1.792666855E12, 3852.0], [1.792666898E12, 3981.0], [1.792666857E12, 3867.0], [1.7926669E12, 3701.0], [1.792666882E12, 3980.0], [1.792666884E12, 3920.0], [1.792666886E12, 3958.0], [1.792666888E12, 3977.0], [1.79266689E12, 3998.0], [1.79266687E12, 3970.0], [1.792666872E12, 4006.0], [1.792666874E12, 3954.0], [1.792666876E12, 4000.0], [1.792666878E12, 3981.0], [1.79266688E12, 4012.0], [1.79266686E12, 3942.0], [1.792666903E12, 3987.0], [1.792666905E12, 4037.0], [1.792666862E12, 3954.0], [1.792666864E12, 3976.0], [1.792666907E12, 4022.0], [1.792666909E12, 3965.0], [1.792666866E12, 3953.0], [1.792666868E12, 4029.0], [1.792666911E12, 1038.0], [1.792666891E12, 3949.0], [1.792666893E12, 3951.0], [1.792666852E12, 3224.0], [1.792666895E12, 3997.0], [1.792666897E12, 4035.0], [1.792666854E12, 3636.0], [1.792666856E12, 3816.0], [1.792666899E12, 4059.0], [1.792666901E12, 3962.0], [1.792666858E12, 3564.0], [1.792666881E12, 3926.0], [1.792666883E12, 3967.0], [1.792666885E12, 4013.0], [1.792666887E12, 3975.0], [1.792666889E12, 3975.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.792666911E12, "title": "Total Transactions Per Second"}},
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


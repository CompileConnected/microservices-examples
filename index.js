

module.exports = (req, res) => {
    res.end(JSON.stringify({
        "type": "bar",
        "data": {
         "labels": [
          "PUBGM",
          "MLBB",
          "PUBG PC",
          "Valorant"
         ],
         "datasets": [
          {
           "backgroundColor": "rgba(2,117,216,1)",
           "borderColor": "rgba(2,117,216,1)",
           "data": [
            127,
            114,
            54,
            23
           ],
           "label": "Visitor"
          }
         ]
        },
        "options": {
         "scales": {
          "xAxes": [
           {
            "time": {
             "unit": "month"
            },
            "gridLines": {
             "display": false
            },
            "ticks": {
             "maxTicksLimit": 6
            }
           }
          ],
          "yAxes": [
           {
            "ticks": {
             "min": 0,
             "max": 170,
             "maxTicksLimit": 5
            },
            "gridLines": {
             "display": true
            }
           }
          ]
         },
         "legend": {
          "display": false
         }
        }
       }))
  }
library(mongolite)

test_con <- mongo(collection = "test",db = "bcp", url = "mongodb://Arstajen:b10433033@ds111050.mlab.com:11050/bcp")

if(test_con$count() > 0) data_test$drop() 

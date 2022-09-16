# VPIN big-data analysis

I had the opportunity to work with a finance professor on an interesting project during my senior year of college. My professor, an ex-software engineer who holds a PhD in Finance, worked with me to convert his code from SAS to Python, Pandas, and Numpy.

## Markets are Volatile
The theoretical foundation for the VPIN algorithm has its roots in the concept of informed trading, which summarizes the point that "those who have more information will trade more frequently." Can we base our predictions of the future price of an asset on our perception of what information others have?


The method, originally proposed by researchers David Easley and Maureen O\'Hara of Cornell University, and Marcos M. López de Prado of Tudor Investment Corporation. In summary, the method groups time-series data (exchanges of securities) into buckets, and assumes that if a security is traded in high volume or frequently over a short span of time, traders of the security likely have more information than you.


## Choosing the stack
As I mentioned, my professor had already written the code in SAS to perform the calculation. Everything worked, but there was an out standing problem - we were on a budget and working with a lot of data. Our budget ruled out brute forcing things and paying for large servers. I had proposed a solution using Python, Pandas, Numpy, and Scipy to make things more manageable.

While SAS was objectively a better-optomized tool for running data analysis, it lacks the fundamental intuitivity that Python has. Operations like slicing data and expanding records, were convoluted in SAS but are crucial to the VPIN algorithm. SAS was difficult to use, and resulted in more "test-flights" while prototyping the code. Each run of the SAS script would take days to run!

## Too much data
We were dealing with ~500GB of raw S&P500 stock market data. This data was unfiltered, formatted as .sas7bdat files, and split across ~360 files for the year we year analyzing. I had to find a way to automate the conversion of this data into a useable format. A requirement was that the data be split into databases on a "per-firm" basis - one database for AAPL and another of MSFT.

SQLite3 ended up being the right tool for this job considering the scope of the project and time (and space) constraints. In other life, I would have chosen a well-optomized single database with fast access to data on a "per-firm" basis.

## Automating the calculation
Considering that we were still prototyping the project, it was best to split the code into three sections: splitting data into time bars, converting these time bars into volume buckets, and the calculating VPIN based off the volume buckets.

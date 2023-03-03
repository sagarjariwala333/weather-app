package com.example.demo.misc;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

public class DateTime {
	
	public static String getDate(long unixTimeStamp, long timeOffset)
	{
		Date date=new Date((unixTimeStamp*1000L)+(timeOffset*1000L));
		SimpleDateFormat formatter=new SimpleDateFormat("dd/MM/yyyy");
		formatter.setTimeZone(TimeZone.getTimeZone("UTC"));
		String sdate=formatter.format(date);
		return sdate;
	}
	
	public static String getTime(long unixTimeStamp, long timeOffset)
	{
		Date date=new Date((unixTimeStamp+timeOffset)*1000L);
		SimpleDateFormat formatter=new SimpleDateFormat("hh:mm aa");
		formatter.setTimeZone(TimeZone.getTimeZone("UTC"));
		String stime=formatter.format(date);
		return stime;
	}
	
}

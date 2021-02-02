package com.bitcamp.korea_tour.model.service.homestay;

import java.util.List;

import com.bitcamp.korea_tour.model.homestay.HomeStayListDto;
import com.bitcamp.korea_tour.model.homestay.HomeStayPhotoDto;


public interface HomeStayListService {
	List<HomeStayListDto> getAllHomeStayList(int start, int perPage);
	List<HomeStayPhotoDto> setAllHomeStayPhoto(int homeStayNum);
	int getTotalHomeStayList();
	Double getTest();
}

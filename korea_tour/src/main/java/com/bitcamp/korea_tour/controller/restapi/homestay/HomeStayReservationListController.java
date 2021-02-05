package com.bitcamp.korea_tour.controller.restapi.homestay;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.bitcamp.korea_tour.model.homestay.HomeStayReservationDto;
import com.bitcamp.korea_tour.model.service.homestay.HomeStayHostService;
import com.bitcamp.korea_tour.model.service.paging.PagingService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class HomeStayReservationListController {
	private final HomeStayHostService hhs;
	private final PagingService pagingService;

	int totalCount = 0;
	int start = 0;
	int perPage = 0;
	int totalPage = 0;
	
	/**
	 * 예약 리스트 출력
	 * @param currentPage
	 * @param approval
	 * @param userNum
	 * @return
	 */
	
	  @GetMapping("/homestays/reservation/{userNum}/{approval}/{currentPage}") public
	  JsonData<List<HomeStayReservationDto>> getReservationList(
	  
	  @PathVariable(value="currentPage") int currentPage,
	  @PathVariable(value="approval") int approval,
	  @PathVariable(value="userNum") int userNum){
	  System.out.println(userNum);
	  int homestayNum = hhs.getHomeStayNum2(userNum);
	  
	  totalCount=hhs.getTotalCount(homestayNum);
	  start=pagingService.getPagingData(totalCount, currentPage).get("start");
	  perPage=pagingService.getPagingData(totalCount, currentPage).get("perPage");
	  totalPage=pagingService.getPagingData(totalCount,
	  currentPage).get("totalPage");
	  
	  
	  List<HomeStayReservationDto> list = hhs.getAllReservation(homestayNum, approval, start,
	  perPage);
	  
	  
	  return new JsonData<List<HomeStayReservationDto>>(list, totalPage);
	  
	  
	  }


	@Data
	@AllArgsConstructor
	static class JsonData<T> {
		private T list;
		int totalPage;
	}

	@Data
	@AllArgsConstructor
	static class JsonAlist<T> {
		private T alist;
		int totalPage;
	}

	@Data
	@AllArgsConstructor
	static class JsonRlist<T> {
		private T rlist;
		int totalPage;
	}

	@Data
	@AllArgsConstructor
	static class JsonPlist<T> {
		private T plist;
		int totalPage;
	}

}

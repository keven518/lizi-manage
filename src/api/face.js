import request from "@/utils/request";

// https://www.showdoc.cc/676767222857812?page_id=3908829914806444

// 产品分类
export function productCategory(data) {
  return request({
    url: "http://www.liztrip.com/product/category",
    method: "get",
    data
  });
}

// 添加产品分类
export function addProdCate(data) {
  return request({
    url: "http://www.liztrip.com/product/category",
    method: "post",
    data
  });
}

// http://域名/product 列表、详情
export function productList(data) {
  return request.get("http://www.liztrip.com/product", {
    params: data
  });
}

export function productUpdata(data) {
  return request.put("http://www.liztrip.com/product", data);
}

export function productDelete(data) {
  return request.delete("http://www.liztrip.com/product", { data: data });
}

export function addProduct(data) {
  return request({
    url: "http://www.liztrip.com/product",
    method: "post",
    data
  });
}

// http://域名//course 课程列表、详情
export function courseList(data) {
  return request.get("http://www.liztrip.com/course", {
    params: data
  });
}

export function courseCategory(data) {
  return request({
    url: "http://www.liztrip.com/course/category",
    method: "get",
    data
  });
}

export function courseDelete(data) {
  return request.delete("http://www.liztrip.com/course", { data: data });
}

// http://域名/course
export function addCourse(data) {
  return request({
    url: "http://www.liztrip.com/course",
    method: "post",
    data
  });
}

export function courseDetails(data) {
  return request.get("http://www.liztrip.com/course", {
    params: data
  });
}

// http://域名/course/chapter 添加章节

export function addChapter(data) {
  return request({
    url: "http://www.liztrip.com/course/chapter",
    method: "post",
    data
  });
}

export function editChapter(data) {
  request.put("http://www.liztrip.com/course/chapter", data);
}

export function chapter(data) {
  return request.get("http://www.liztrip.com/course/chapter", {
    params: data
  });
}

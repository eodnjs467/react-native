# react-native
 💫 react native 를 사용하여 앱 만들기 코드 테스트 및 학습


# 개발 환경

|구분|버전|
|---|---|
|react-native-cli|2.0.1|
|react-native|0.67.2|
|DBMS|firebase|
|node|17.13.0|
|cocoapod|1.11.2|

# 참고 자료
| 구분 | 버전 |
|---|---|
|도서|리액트 네이티브를 다루는 기술 ,김민준(길벗)|
|자료|Google Search…|

# index
1. [BigwonGallery](#bigwongallery)
2. [TodoApp](#todoapp)
3. [DayLog](#daylog)

# BigwonGallery
### 프로젝트 생성
* react-native init
* 라이브러리 : firebase, navigator, image-picker, vector-icons, …

### 기능 목록
* screens
	* RootStack
		* MainTab
			* HomeStack
				* FeedScreen
				* ProfileScreen
			* MyProfileStack
				* MyProfileScreen
				* PostScreen
		* UploadScreen
		* ModifyScreen
		* SignInScreen
		* WelcomeScreen
* components
	* ActionSheetModal
	* Avatar
	* BorderedInput
	* CameraButton
	* CustomButton
	* IconRightButton
	* PostCard
	* PostGridItem
	* Profile
	* SetupProfile
	* SignButton
	* SignForm
	* UploadModeModal
* context
	* UserContext
* hooks
	* usePostAction
	* usePosts
* lib
	* auth
	* posts
	* users
* assets
	* user.png

### 이슈
1. [ios에 firebase 적용 오류](https://github.com/eodnjs467/react-native/issues/1)
2. [firebase 라이브러리 설치 후 빌더 오류](https://github.com/eodnjs467/react-native/issues/2)
3. [firebase 이미지 업로드 후 출력 오류](https://github.com/eodnjs467/react-native/issues/3)

### 결과물

<img src="https://user-images.githubusercontent.com/24502604/155870209-b5a386bf-0e82-40ed-9f84-f492efaaf751.gif" width="350" height="700" />

# TodoApp

# DayLog

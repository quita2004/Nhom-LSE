var myapp = angular.module('myapp');

myapp.service('svTuMoi', function () {

	this.tu_moi = [
	{
		tu: "abandon",
		loai_tu:  "(v)",
		phat_am: "ə'bændən",
		nghia: "bỏ, từ bỏ" 
	},
	{
		tu: "abandoned", 
		loai_tu:  "adj",
		phat_am: "ə'bændənd",
		nghia: "bị bỏ rơi, bị ruồng bỏ"
	}, 
	{
		tu: "ability", 
		loai_tu: "(n)",
		phat_am: "ə'biliti",
		nghia: "khả năng, năng lực" 
	},
	{
		tu: "able",
		loai_tu:  "adj",
		phat_am : "'eibl",
		nghia: "có năng lực, có tài"
	},
	{
		tu: "unable", 
		loai_tu: "adj",
		phat_am: "'ʌn'eibl",
		nghia: "không có năng lực, không có tài"
	},
	{
		tu: "about",
		loai_tu: "adv, prep",
		phat_am: "ə'baut",
		nghia: "khoảng, về"
	},
	{ 
		tu: "above",
		loai_tu: "prep, adv",
		phat_am: "ə'bʌv",
		nghia: "ở trên, lên trên"
	},
	{
		tu: "abroad",
		loai_tu: "adv",
		phat_am: "ə'brɔ:d",
		nghia: "ở, ra nước ngoài, ngoài trời"
	},
	{
		tu: "absence",
		loai_tu: "n",
		phat_am: "'æbsəns",
		nghia: "sự vắng mặt"
	},
	{
		tu: "absent",
		loai_tu: "adj", 
		phat_am: "'æbsənt",
		nghia: "vắng mặt, nghỉ"
	},
	{
		tu: "absolute",
		loai_tu: "adj",
		phat_am: "'æbsəlu:t",
		nghia: "tuyệt đối, hoàn toàn"
	},
	{
		tu: "absolutely",
		loai_tu: "adv",
		phat_am: "'æbsəlu:tli",
		nghia: "tuyệt đối, hoàn toàn"
	},
	{
		tu: "absorb",
		loai_tu: "v",
		phat_am: "əb'sɔ:b",
		nghia: "thu hút, hấp thu, lôi cuốn"
	},
	{
		tu: "abuse",
		loai_tu: "n,v",
		phat_am: "ə'bju:s",
		nghia: "lộng hành, lạm dụng"
	},
	{
		tu: "academic",
		loai_tu: "adj",
		phat_am: "ækə'demik",
		nghia: "thuộc học viện, ĐH, viện hàn lâm"
	},
	{
		tu: "accent",
		loai_tu: "n",
		phat_am: "'æksənt",
		nghia: "trọng âm, dấu trọng âm"
	},
	{
		tu: "accept",
		loai_tu: "v",
		phat_am: "ək'sept",
		nghia: "chấp nhận, chấp thuận"
	},
	{
		tu: "acceptable",
		loai_tu: "adj",
		phat_am: "ək'septəbl",
		nghia: "có thể chấp nhận, chấp thuận"
	},
	{
		tu: "unacceptable",
		loai_tu: "adj",
		phat_am: "'ʌnək'septəbl"
	},
	{
		tu: "access",
		loai_tu: "n",
		phat_am: "'ækses",
		nghia: "lối, cửa, đường vào"
	},
	{
		tu: "accident",
		loai_tu: "n",
		phat_am: "'æksidənt",
		nghia: "tai nạn, rủi ro"
	},
	{
		tu: "accidental",
		loai_tu: "adj",
		phat_am: "æksi'dentl",
		nghia: "tình cờ, bất ngờ"
	},
	{
		tu: "accidentally",
		loai_tu: "adv",
		phat_am: "æksi'dentəli",
		nghia: "tình cờ, ngẫu nhiên"
	},
	{
		tu: "accommodation",
		loai_tu: "n",
		phat_am: "ə,kɔmə'deiʃn",
		nghia: "sự thích nghi, điều tiết"
	},
	{
		tu: "accompany",
		loai_tu: "v",
		phat_am: "ə'kʌmpəni",
		nghia: "đi theo, đi cùng, kèm theo"
	},
	{
		tu: "according to",
		loai_tu: "prep",
		phat_am: "ə'kɔ:diɳ",
		nghia: "theo, y theo"
	},
	{
		tu: "account",
		loai_tu: "n, v",
		phat_am: "ə'kaunt",
		nghia: "tài khoản, kế toán; tính toán, tính đến"
	},
	{
		tu: "accurate",
		loai_tu: "adj",
		phat_am: "'ækjurit",
		nghia: "đúng đắn, chính xác, xác đáng"
	},
	{
		tu: "accurately",
		loai_tu: "adv",
		phat_am: "'ækjuritli",
		nghia: "đúng đắn, chính xác"
	},
	{
		tu: "accuse",
		loai_tu: "v",
		phat_am: "ə'kju:z",
		nghia: "tố cáo, buộc tội, kết tội"
	},
	{
		tu: "achieve",
		loai_tu: "v",
		phat_am: "ə'tʃi:v",
		nghia: "đạt được, dành được"
	},
	{
		tu: "achievement",
		loai_tu: "n",
		phat_am: "ə'tʃi:vmənt",
		nghia: "thành tích, thành tựu"
	},
	{
		tu: "acid",
		loai_tu: "n",
		phat_am: "'æsid",
		nghia: "axit"
	},
	{
		tu: "acknowledge",
		loai_tu: "v",
		phat_am: "ək'nɔlidʤ",
		nghia: "công nhận, thừa nhận"
	},
	{
		tu: "acquire",
		loai_tu: "v",
		phat_âm: "ə'kwaiə",
		nghia: "dành được, đạt được, kiếm được"
	},
	{
		tu: "across",
		loai_tu: "adv, prep",
		phat_am: "ə'krɔs",
		nghia: "qua, ngang qua"
	},
	{
		tu: "act",
		loai_tu: "n., v.",
		phat_am: "ækt",
		nghia: "hành động, hành vi, cử chỉ, đối xử"
	},
	{
		tu: "action",
		loai_tu: "n.",
		phat_am: "'ækʃn",
		nghia: "hành động, hành vi, tác động"
	},
	{
		tu: "take action",
		nghia: "hành động"
	},
	{
		tu: "active",
		loai_tu: "adj",
		phat_am: "'æktiv",
		nghia: "tích cực hoạt động, nhanh nhẹn"
	},
	{
		tu: "actively",
		loai_tu: "adv.",
		phat_am: "'æktivli"
	},
	{
		tu: "activity",
		loai_tu: "n.",
		phat_am: "æk'tiviti"
	},
	{
		tu: "actor | actress",
		loai_tu: "n",
		phat_am: "'æktə | 'æktris",
		nghia: "diễn viên"
	},
	{
		tu: "actual",
		loai_tu: "adj",
		phat_am: "'æktjuəl",
		nghia: "thực tế, có thật"
	},
	{
		tu: "actually",
		loai_tu: "adv.",
		phat_am: "'æktjuəli",
		nghia: "hiện nay, hiện tại"
	},
	{
		tu: "advertisement",
		loai_tu:  "(v)",
		phat_am: "/əd'və:tismənt/",
		nghia: "quảng cáo" 
	},
	{
		tu: "adapt",
		loai_tu:  "(v)",
		phat_am: "/ə'dæpt/",
		nghia: "tra, lắp vào" 
	},
	{
		tu: "add",
		loai_tu:  "(v)",
		phat_am: "/æd/",
		nghia: "cộng, thêm vào" 
	},
	{
		tu: "addition",
		loai_tu:  "(n)",
		phat_am: "/ə'diʃn/",
		nghia: "tính cộng, phép cộng" 
	},
	{
		tu: "in additon (to)",
		loai_tu:  "(v)",
		phat_am: "",
		nghia: "thêm vào" 
	},
	{
		tu: "additional",
		loai_tu:  "(adj)",
		phat_am: "/ə'diʃənl/",
		nghia: "thêm vào, tăng thêm" 
	},
	{
		tu: "address",
		loai_tu:  "(n)",
		phat_am: "/ə'dres/",
		nghia: "địa chỉ, đê địa chỉ" 
	},
	{
		tu: "adequate",
		loai_tu:  "(adj)",
		phat_am: "/'ædikwit/",
		nghia: "đầy, đầy đủ" 
	},
	{
		tu: "adequately",
		loai_tu:  "(adv)",
		phat_am: "/'ædikwitli/",
		nghia: "tương xứng, thỏa đáng" 
	},
	{
		tu: "adjust",
		loai_tu:  "(v)",
		phat_am: "/ə'dʤʌst/",
		nghia: "sửa lại cho đúng, điều chỉnh" 
	},
	{
		tu: "admiration",
		loai_tu:  "(n)",
		phat_am: "/,ædmə'reiʃn/",
		nghia: "sự khâm phục, thán phục" 
	},
	{
		tu: "admire",
		loai_tu:  "(v)",
		phat_am: "/əd'maiə/",
		nghia: "khâm phục, thán phục" 
	},
	{
		tu: "admit",
		loai_tu:  "(v)",
		phat_am: "/əd'mit/",
		nghia: "nhận, cho vào" 
	},
	{
		tu: "adopt",
		loai_tu:  "(v)",
		phat_am: "/ə'dɔpt/",
		nghia: "nhận làm con nuôi" 
	},
	{
		tu: "adult",
		loai_tu:  "(n)",
		phat_am: "/'ædʌlt/",
		nghia: "người lớn, người trưởng thành" 
	},
	{
		tu: "advance",
		loai_tu:  "(n,v)",
		phat_am: "/əd'vɑ:ns/",
		nghia: "sự tiến bộ, sự tiến lên" 
	},
	{
		tu: "advanced",
		loai_tu:  "(adj)",
		phat_am: "/əd'vɑ:nst/",
		nghia: "tiên tiến, tiến bộ, cấp cao" 
	},
	{
		tu: "in advance",
		loai_tu:  "()",
		phat_am: "",
		nghia: "trước, sớm" 
	},
	{
		tu: "advantage",
		loai_tu:  "(n)",
		phat_am: "/əb'vɑ:ntidʤ/",
		nghia: "sự thuận lợi, lợi ích, lợi thế" 
	},
	{
		tu: "take advantage of",
		loai_tu:  "()",
		phat_am: "",
		nghia: "lợi dụng" 
	},
	{
		tu: "advanture",
		loai_tu:  "(n)",
		phat_am: "/əd'ventʃə/",
		nghia: "sự phiêu lưu, mạo hiểm" 
	},
	{
		tu: "advertise",
		loai_tu:  "(n)",
		phat_am: "/'ædvətaiz/",
		nghia: "báo cho biết, báo cho biết trước" 
	},
	{
		tu: "advertising",
		loai_tu:  "(n)",
		phat_am: "",
		nghia: "sự quảng cáo, nghề quảng cáo" 
	},
	{
		tu: "advertisement",
		loai_tu:  "(ad, adverb)n",
		phat_am: "/əd'və:tismənt/",
		nghia: "" 
	},
	{
		tu: "advice",
		loai_tu:  "(n)",
		phat_am: "/əd'vais/",
		nghia: "lời khuyên, chỉ bảo" 
	},
	{
		tu: "advise",
		loai_tu:  "(v)",
		phat_am: "/əd'vaiz/",
		nghia: "khuyên bảo, răn bảo" 
	},
	{
		tu: "affair",
		loai_tu:  "(n)",
		phat_am: "/ə'feə/",
		nghia: "việc" 
	},
	{
		tu: "affect",
		loai_tu:  "(v)",
		phat_am: "/ə'fekt/",
		nghia: "làm ảnh hưởng, tác động đến" 
	},
	{
		tu: "affection",
		loai_tu:  "(n)",
		phat_am: "/ə'fekʃn/",
		nghia: "" 
	},
	{
		tu: "afford",
		loai_tu:  "(v)",
		phat_am: "/ə'fɔ:d/",
		nghia: "có thể, đủ khả năng" 
	},
	{
		tu: "afraid",
		loai_tu:  "(adj)",
		phat_am: "/ə'freid/",
		nghia: "sợ, sợ hãi, hoảng sợ" 
	},
	{
		tu: "after",
		loai_tu:  "(prep,conj,adv)",
		phat_am: "/'ɑ:ftə/",
		nghia: "sau, đằng sau" 
	},
	{
		tu: "afternoon",
		loai_tu:  "(n)",
		phat_am: "/'ɑ:ftə'nu:n/",
		nghia: "buổi chiều" 
	},
	{
		tu: "afterwards",
		loai_tu:  "(adv)",
		phat_am: "/'ɑ:ftəwəd/",
		nghia: "sau này, về sau" 
	},
	{
		tu: "again",
		loai_tu:  "(adv)",
		phat_am: "/ə'gen/",
		nghia: "lại, nữa, lần nữa" 
	},
	{
		tu: "against",
		loai_tu:  "(prep)",
		phat_am: "/ə'geinst/",
		nghia: "chống lại, phản đối" 
	},
	{
		tu: "age",
		loai_tu:  "(n)",
		phat_am: "/eidʤ/",
		nghia: "tuổi" 
	},
	{
		tu: "aged",
		loai_tu:  "(v)",
		phat_am: "/'eidʤid/",
		nghia: "già đi" 
	},
	{
		tu: "agency",
		loai_tu:  "(n)",
		phat_am: "/'eidʤənsi/",
		nghia: "tác dụng, lực, môi giới, trung gian" 
	},
	{
		tu: "agent",
		loai_tu:  "(n)",
		phat_am: "/'eidʤənt/",
		nghia: "đại lý, tác nhân" 
	},
	{
		tu: "aggressive",
		loai_tu:  "(adj)",
		phat_am: "/ə'gresiv/",
		nghia: "xâm lược, hung hăng" 
	},
	{
		tu: "ago",
		loai_tu:  "(adv)",
		phat_am: "/ə'gou/",
		nghia: "trước đây" 
	}

	];

});
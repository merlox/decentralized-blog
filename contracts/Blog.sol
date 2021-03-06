// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.7.0;

contract Blog {
    struct Article {
        uint256 id;
        string title;
        string content;
        address owner;
        uint256 date;
    }

    mapping(address => Article[]) public articles;
    mapping(address => uint256[]) public articleIds; // A list of owned article IDs
    uint256 public lastId; // To get all the articles

    function addArticle(string memory _title, string memory _content) public {
        uint256 myId = articles[msg.sender].length;
        Article memory myArticle = Article(myId, _title, _content, msg.sender, block.timestamp);
        articleIds[msg.sender].push(myId);
        articles[msg.sender].push(myArticle);
        lastId++;
    }

    function getArticle(uint256 _id, address _owner) public view returns (uint256, string memory, string memory, address) {
        Article memory myArticle = articles[_owner][_id];
        return (myArticle.id, myArticle.title, myArticle.content, myArticle.owner);
    }

    function getArticleIds(address _owner) public view returns (uint256[] memory) {
        return articleIds[_owner];
    }
}

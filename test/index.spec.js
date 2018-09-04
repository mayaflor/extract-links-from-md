const chai = require('chai');
const expect = chai.expect;
const reqIndex = require('../index');
const getLinks = reqIndex.getLinksFromMd;


describe('getLinksFromMd()', () => {
  describe('When given an empty string', () => {
    it('Should return error: No Parameter found', () => {
      expect(() => (getLinks(""))).to.throw(Error, "No Parameter found")
    });
  });
  describe('When given a number', () => {
    it('Should return error: Parameter must contain letters', () => {
      expect(() => (getLinks(123))).to.throw(Error, "Parameter must contain letters")
    });
  });
  describe('When given a string with no link', () => {
    it('Should return an empty string', () => {
      const noLink = "Oi você quer entrar no site ?";
      expect(getLinks(noLink)).to.equal("");
    });
  });
  describe('When given a string with one link', () => {
    it('Should return a link', () => {
      const oneLink = "Oi você quer entrar no site [google](www.google.com) ?";
      expect(getLinks(oneLink)).to.deep.equal([{href: 'www.google.com', text: 'google'}]);
      // expect(() => (getLinks("Oi você quer entrar no site [google](www.google.com) ?"))).to.equal("[{href: 'www.google.com', text: 'google'}]")
    });
  });
  describe('When given a string with three links', () => {
    it('Should return three inks', () => {
      const threeLink = "Oi você quer entrar no site [google](www.google.com) , [twitter](www.twitter.com) ou [facebook](www.facebook.com) ?";
      expect(getLinks(threeLink)).to.deep.equal([{href: 'www.google.com', text: 'google'},
      {href: 'www.twitter.com', text: 'twitter'},
      {href: 'www.facebook.com', text: 'facebook'}]);
    });
  });
});
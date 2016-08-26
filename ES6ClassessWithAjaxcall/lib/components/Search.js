import React, { Component, PropTypes } from 'react'
import Vehicle from '../components/Vehicle'

import {
  ActionBar,
  ActionBarRow,
  BoolShould,
  CheckboxFilter,
  CheckboxItemList,
  DynamicRangeFilter,
  FilteredQuery,
  HierarchicalMenuFilter,
  Hits,
  HitsStats,
  InitialLoader,
  ItemHistogramList,
  ItemList,
  Layout,
  LayoutBody,
  LayoutResults,
  MenuFilter,
  NoHits,
  NumericRefinementListFilter,
  Pagination,
  RangeFilter,
  RefinementListFilter,
  ResetFilters,
  SearchBox,
  SearchkitManager,
  SearchkitProvider,
  Select,
  SelectedFilters,
  SideBar,
  SortingSelector,
  Tabs,
  TagCloud,
  TermQuery,
  Toggle,
  TopBar,
  ViewSwitcherHits,
  ViewSwitcherToggle
} from 'searchkit';

import _ from 'lodash'
import extend from 'lodash/fp/extend'

const url = 'http://iassearch01.autoremarketers.com'
const path = '/search/ias-us-auctions/listing/'
const searchkit = new SearchkitManager(url + path)

export default class Search extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '/static/css/theme.css'
    document.body.appendChild(link);
  }

  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
      <Layout size='l'>
        <LayoutBody>
        <div className="search-nav">
        	<div className="container-fluid">
            <ul className="nav navbar-nav pull-left">
              <li><a href="#">Filters <span className="fa fa-sliders"></span></a></li>
        		 </ul>
        		<div className="search-title">
        			<h4>Search</h4>
        		</div>
            <ul className="nav navbar-nav status-links">
              <li className="active"><a href="#">Vehicles</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Locations</a></li>
            </ul>
            <SearchBox
              translations={{"searchbox.placeholder":"search vehicles"}}
              queryOptions={{"minimum_should_match":"70%"}}
              autofocus={false}
              searchOnChange={true}
              queryFields={["name^10", "exteriorColor^5", "drive^5", "engine^5", "transmission^5"]}/>

            <ul className="nav navbar-nav pull-right search-nav-right">
              <li><a href="#">Search History <span className="fa fa-history"></span></a></li>
              <li><a href="#">Recently Viewed <span className="fa fa-car"></span></a></li>
        		 </ul>
        	</div>
        </div>

              <SideBar>
                <MenuFilter
                  id='make'
                  title=''
                  field='make'
                  operator='OR'
                  size={5000}
                  translations={{'All':'All Makes'}}
                  listComponent={Select}
                />

                <CheckboxFilter id='hasImage'
                  title='Image'
                  label='Has Image'
                  filter={TermQuery('hasImage', 'true')}
                />
              </SideBar>

              <LayoutResults>
                <ActionBar>
                  <ActionBarRow>
                    <HitsStats translations={{
                      "hitstats.results_found":"{hitCount} results found"
                    }}/>
                    <ViewSwitcherToggle/>
                    <SortingSelector options={[
                      {label:"Relevance", field:"_score", order:"desc", defaultOption:true},
                      {label:"Year - Latest First", field:"year", order:"desc"},
                      {label:"Year - Oldest First", field:"year", order:"asc"},
                      {label:"Miles - Lowest First", field:"mileage", order:"desc"},
                      {label:"Miles - Highest First", field:"mileage", order:"asc"},
                      {label:"Auction Name", field:"marketplaceName", order:"asc"},
                      {label:"Event Name", field:"eventName", order:"asc"},
                      {label:"Seller Name", field:"sellerName", order:"asc"},
                    ]}/>
                  </ActionBarRow>
                  <ActionBarRow>
                    <SelectedFilters />
                    <ResetFilters />
                  </ActionBarRow>
                </ActionBar>

                <ViewSwitcherHits
                    hitsPerPage={15} highlightFields={[]}
                    sourceFilter={
                      ['id', 'name', 'year', 'make', 'model', 'bodyStyle', 'marketplaceName', 'eventName', 'sellerName', 'mainImage', 'mileage', 'exteriorColor', 'options', 'engine', 'transmission', 'drive', 'vIN', 'stockNumber', 'lotNumber', 'description']
                    }
                    hitComponents = {[
                      {key:'list', title:'List', itemComponent:ListItem, defaultOption:true},
                      {key:'grid', title:'Grid', itemComponent:GridItem},
                    ]}
                    scrollTo='body'
                />

                <NoHits suggestionsField={'make'}/>
                <InitialLoader/>
                <Pagination showNumbers={true}/>
              </LayoutResults>

            </LayoutBody>
          </Layout>
        </SearchkitProvider>
    );
  }
}

const GridItem = (props)=> {
  const {bemBlocks, result} = props
  const source:any = _.extend({}, result._source, result.highlight)
  console.log(source)
  return (
    <div className={bemBlocks.item().mix(bemBlocks.container('item'))} data-qa="hit">
      <Vehicle vehicleData={source} />
    </div>
  )
}

const ListItem = (props)=> {
  const {bemBlocks, result} = props
  const source:any = _.extend({}, result._source, result.highlight)

  return (
    <div className={bemBlocks.item().mix(bemBlocks.container('item'))} data-qa="hit">
      <div className={bemBlocks.item('poster')}>
        <img data-qa="poster"
          src={result._source.mainImage}
          onError={(e)=>{e.target.src='https://placeholdit.imgix.net/~text?w=240&h=170'}}
        />
        </div>
      <div className={bemBlocks.item('details')}>
      <a href="#">
        <h2 className={bemBlocks.item('title')}
          dangerouslySetInnerHTML={{__html:`${source.year} ${source.make} ${source.model} ${source.bodyStyle}`}}>
        </h2>
      </a>
      </div>
    </div>
  )
}

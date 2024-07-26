import React from "react";
import check from "../../assets/svgs/check.svg";
import warehouse from "../../assets/specialization/warehouse.jpg";
import "../../index.css";

function Warehousing() {
	return (
		<div className="bg-white p-4 md:p-8">
			<div className="relative bg-black rounded-xl overflow-hidden mb-6 md:mb-8">
				<img
					className="absolute inset-0 w-full h-full object-cover opacity-30"
					src={warehouse}
					alt="Warehousing"
				/>
				<div className="relative flex justify-center items-center h-60 md:h-96">
					<h1 className="text-white text-2xl md:text-6xl z-0 text-center">
						Warehousing
					</h1>
				</div>
			</div>

			<div className="px-4 md:px-20 mb-6 md:mb-8">
				<div className="mb-6 md:mb-8">
					<p>
						<span className="GradientText">
							SEAWAVE FORWARDING & LOGISTICS PVT. LTD.
						</span>{" "}
						had identified warehouse as one of the key component of
						national and international trade. With this focus,
						<span className="GradientText">SEAWAVE</span> had set up
						large warehouses at strategic locations in and around
						the port. The Company commands over 19,000 sq. ft of
						warehousing space in and around the Mumbai (Bombay). It
						also has warehouses at Panvel, Bhiwandi and outskirts of
						Pune. Non - hazardous cargo meant for exports and
						imported cargo pending final consumption and those that
						are to be further distributed within the country are
						kept in the warehouses. Some of these warehouses are
						equipped with electrical cranes to cater to specific
						handling requirement of the clients.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
					<div>
						<h2 className="text-xl md:text-2xl my-2">
							SEAWAVE provides its expertise in:
						</h2>
						<div className="flex items-center p-2">
							<img
								src={check}
								alt=""
								className="check h-5 md:h-6 mr-4"
							/>
							<p className="text-sm md:text-base">
								Warehouse Identification.
							</p>
						</div>
						<div className="flex items-center p-2">
							<img
								src={check}
								alt=""
								className="check h-5 md:h-6 mr-4"
							/>
							<p className="text-sm md:text-base">
								Record Management and Storage.
							</p>
						</div>
						<div className="flex items-center p-2">
							<img
								src={check}
								alt=""
								className="check h-5 md:h-6 mr-4"
							/>
							<p className="text-sm md:text-base">
								Warehouse Management.
							</p>
						</div>
						<div className="flex items-center p-2">
							<img
								src={check}
								alt=""
								className="check h-5 md:h-6 mr-4"
							/>
							<p className="text-sm md:text-base">
								Inventory & Distribution Management.
							</p>
						</div>
						<div className="flex items-center p-2">
							<img
								src={check}
								alt=""
								className="check h-5 md:h-6 mr-4"
							/>
							<p className="text-sm md:text-base">
								Just in Time (JIT) Deliveries.
							</p>
						</div>
						<div className="flex items-center p-2">
							<img
								src={check}
								alt=""
								className="check h-5 md:h-6 mr-4"
							/>
							<p className="text-sm md:text-base">
								Opening & repacking facilities.
							</p>
						</div>
					</div>
					<div>
						<h2 className="text-xl md:text-2xl my-2">
							Our Warehousing Infrastructure Advantages:
						</h2>
						<div className="flex items-center p-2">
							<img
								src={check}
								alt=""
								className="check h-5 md:h-6 mr-4"
							/>
							<p className="text-sm md:text-base">
								Safe & systematic storage of goods.
							</p>
						</div>
						<div className="flex items-center p-2">
							<img
								src={check}
								alt=""
								className="check h-5 md:h-6 mr-4"
							/>
							<p className="text-sm md:text-base">
								Hygienic & clean environment.
							</p>
						</div>
						<div className="flex items-center p-2">
							<img
								src={check}
								alt=""
								className="check h-5 md:h-6 mr-4"
							/>
							<p className="text-sm md:text-base">
								In-house Computerized Weigh bridge facility.
							</p>
						</div>
						<div className="flex items-center p-2">
							<img
								src={check}
								alt=""
								className="check h-5 md:h-6 mr-4"
							/>
							<p className="text-sm md:text-base">
								Container repair facility of IICL standard.
							</p>
						</div>
						<div className="flex items-center p-2">
							<img
								src={check}
								alt=""
								className="check h-5 md:h-6 mr-4"
							/>
							<p className="text-sm md:text-base">
								Helps our clients to reduce fixed overheads,
								increase efficiency, cut down valuable
								management time and offer great efficiency.
							</p>
						</div>
					</div>
				</div>
				<div className="mt-6 md:mt-8">
					<p>
						We provide high level professional warehousing services
						and care that is the assurance of the safe arrival of
						your product anywhere, anytime. Through our integrated
						inventory management system, we not only provide control
						on a worldwide basis but also allow customers to
						supplement and redistribute cargo. This approach reduces
						cycle time while assuring constant availability of
						product. We offer special warehousing facilities for
						containerized, refrigerated and hazardous materials.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Warehousing;

"use client";

import React, { useState } from "react";
import { initialAnalyticsData, demoAnalyticsInsights } from "@/data/ewaste/analytics";
import DoughnutChart from "@/components/ewaste/charts/DoughnutChart";
import BarChart from "@/components/ewaste/charts/BarChart";
import HorizontalBarChart from "@/components/ewaste/charts/HorizontalBarChart";
import AreaLineChart from "@/components/ewaste/charts/AreaLineChart";
import StatCard from "@/components/ewaste/charts/StatCard";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  MapPin,
  Calendar,
  Layers,
  Recycle,
  ShieldAlert,
  Info,
  CheckCircle,
} from "lucide-react";

export default function AnalyticsDashboardPage() {
  const [selectedCity, setSelectedCity] = useState("All");
  const [dateRange, setDateRange] = useState("Last 12 Months");

  const analytics = initialAnalyticsData;

  const filteredCityData =
    selectedCity === "All"
      ? analytics.cityDistribution
      : analytics.cityDistribution.filter((c) => c.city === selectedCity);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#172D49]/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#F47C68] text-white flex items-center justify-center">
              <BarChart3 className="w-4 h-4" />
            </span>
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
              Circular Telemetry
            </span>
            <span className="text-[10px] bg-[#172D49] text-white px-2 py-0.5 rounded font-mono">
              Model Evaluation
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#172D49] mt-1">
            Delhi NCR E-Waste Recovery Analytics
          </h1>
          <p className="text-xs sm:text-sm text-[#172D49]/70 font-sans mt-0.5">
            Regional collection metrics, category material balances, and depot utilization across 22 monitored NCR nodes.
          </p>
        </div>

        {/* Global Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-xl border border-[#172D49]/15 text-xs text-[#172D49]">
            <Calendar className="w-3.5 h-3.5 text-[#5B7866] ml-1" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-transparent focus:outline-none font-display font-medium pr-2"
            >
              <option value="Last 12 Months">Last 12 Months (2026)</option>
              <option value="Last 6 Months">Last 6 Months</option>
              <option value="Current Quarter">Q3 2026</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-xl border border-[#172D49]/15 text-xs text-[#172D49]">
            <MapPin className="w-3.5 h-3.5 text-[#F47C68] ml-1" />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-transparent focus:outline-none font-display font-medium pr-2"
            >
              <option value="All">All Cities (NCR)</option>
              <option value="New Delhi">New Delhi</option>
              <option value="Delhi">Delhi</option>
              <option value="Faridabad">Faridabad</option>
              <option value="Gurugram">Gurugram</option>
              <option value="Manesar">Manesar</option>
              <option value="Sonipat">Sonipat</option>
              <option value="Bahadurgarh">Bahadurgarh</option>
              <option value="Panipat">Panipat</option>
              <option value="Rohtak">Rohtak</option>
              <option value="Palwal">Palwal</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mandatory Demonstration Data Notice Banner */}
      <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#172D49]/15 text-xs text-[#172D49] flex items-start gap-3 shadow-xs">
        <ShieldAlert className="w-5 h-5 text-[#F47C68] shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="font-display font-bold uppercase tracking-wider text-[#F47C68]">
            Demonstration Data — Not Live Operational Statistics
          </span>
          <p className="text-[#172D49]/70 leading-relaxed font-sans">
            All chart volumes, material percentages, and turnaround days shown on this dashboard are derived from centralized academic simulation models designed to showcase production analytics architecture.
          </p>
        </div>
      </div>

      {/* KPI Overview Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          label="Cumulative Material Diverted"
          value="12.2 Tonnes"
          subtext="Certified zero-landfill extraction"
          trendText="18% MoM"
          trendPositive={true}
          icon={Recycle}
          badge="Verified"
        />
        <StatCard
          label="Total Handover Requests"
          value="334"
          subtext="184 completed pickups"
          trendText="94% Fulfilled"
          trendPositive={true}
          icon={TrendingUp}
          badge="Fleet Rate"
        />
        <StatCard
          label="Active Collection Nodes"
          value="20 / 22"
          subtext="2 temporarily under maintenance"
          icon={MapPin}
          badge="Coverage"
        />
        <StatCard
          label="Average Network Utilization"
          value="53.4%"
          subtext="Calculated capacity buffer across NCR"
          icon={BarChart3}
          badge="Healthy"
        />
      </div>

      {/* Section 1: Distribution & Trends (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Doughnut Chart: E-Waste Category Breakdown */}
        <div className="lg:col-span-6">
          <DoughnutChart
            title="1. E-Waste Material Category Distribution"
            data={analytics.categoryDistribution.map((c) => ({
              label: c.category,
              value: c.percentage,
              color: c.color,
              sublabel: `${c.volumeKg} kg`,
            }))}
            centerText="100%"
            centerSubtext="Electronic Streams"
          />
        </div>

        {/* Bar Chart: Monthly Collection Volumes */}
        <div className="lg:col-span-6">
          <BarChart
            title="2. Monthly Recovery Volume (Tonnes)"
            subtitle="Pilot program intake across Delhi NCR nodes"
            data={analytics.monthlyVolumes.map((m) => ({
              label: m.month.split(" ")[0],
              value: m.volumeTonnes,
              formattedValue: `${m.volumeTonnes} T (${m.requestsCount} reqs)`,
            }))}
            barColor="#172D49"
          />
        </div>
      </div>

      {/* Section 2: Collection Trends & Request Status */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Area Line Chart: Diversion Trends vs Target */}
        <div className="lg:col-span-7">
          <AreaLineChart
            title="3. Formal E-Waste Diversion Trends vs MoEFCC Benchmark"
            subtitle="Comparing actual collected tonnes against municipal recovery targets"
            data={analytics.collectionTrends.map((t) => ({
              label: t.month,
              value: t.formalDiverted,
              target: t.targetTonnes,
            }))}
          />
        </div>

        {/* Doughnut: Pickup Request Status Breakdown */}
        <div className="lg:col-span-5">
          <DoughnutChart
            title="4. Pickup Request Status Lifecycle"
            data={analytics.requestStatusBreakdown.map((s) => ({
              label: s.status,
              value: Math.round((s.count / 334) * 100),
              color: s.color,
              sublabel: `${s.count} total`,
            }))}
            centerText="334"
            centerSubtext="Logged Requests"
          />
        </div>
      </div>

      {/* Section 3: City Distribution & Capacity Rankings */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Bar Chart: City-wise Centre Distribution */}
        <div className="lg:col-span-6">
          <BarChart
            title="5. City-Wise Facility & Volume Allocation"
            subtitle="Tonnes collected per urban municipal cluster"
            data={filteredCityData.map((c) => ({
              label: c.city,
              value: c.volumeTonnes,
              formattedValue: `${c.volumeTonnes} T (${c.centresCount} hubs)`,
            }))}
            barColor="#5B7866"
          />
        </div>

        {/* Horizontal Bar: Depot Intake Capacity */}
        <div className="lg:col-span-6">
          <HorizontalBarChart
            title="6. Depot Intake Capacity Utilization Ranking"
            subtitle="Reported warehouse fill percentage before truck dispatch is triggered"
            data={analytics.capacityRanking.slice(0, 7).map((c) => ({
              label: c.centreName.split("—")[0].trim(),
              sublabel: c.city,
              value: c.capacityPct,
              status: c.status,
            }))}
          />
        </div>
      </div>

      {/* Section 4: Top Collection Areas Analytical Table */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#172D49]/10 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
              Geospatial Performance
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#172D49]">
              7. High-Volume Urban Collection Corridors
            </h3>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#172D49]/15 text-[#172D49]/60 font-display uppercase tracking-wider text-[11px]">
                <th className="py-3 px-3">Urban Area / District</th>
                <th className="py-3 px-3">City Cluster</th>
                <th className="py-3 px-3">Monitored Points</th>
                <th className="py-3 px-3">Pilot Volume (kg)</th>
                <th className="py-3 px-3">Dispatch Turnaround</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#172D49]/10">
              {analytics.topAreas.map((area, idx) => (
                <tr key={idx} className="hover:bg-[#FAF5EE]/60 transition-colors">
                  <td className="py-3 px-3 font-serif font-bold text-[#172D49]">
                    {area.area}
                  </td>
                  <td className="py-3 px-3 text-[#172D49]/70">{area.city}</td>
                  <td className="py-3 px-3 font-mono text-[#172D49]">{area.activeCentres} Hub</td>
                  <td className="py-3 px-3 font-mono font-bold text-[#F47C68]">
                    {area.volumeKg.toLocaleString()} kg
                  </td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1 font-mono text-[#5B7866] font-bold">
                      {area.turnaroundDays} days
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Analytical Insights Derived from Data */}
      <section className="bg-[#172D49] text-[#F4EBDD] rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <Info className="w-5 h-5 text-[#F47C68]" />
          <h3 className="font-serif text-lg font-bold text-white">
            Key Telemetry Insights (Computed from Dataset)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {demoAnalyticsInsights.map((insight, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-display font-bold text-[#F47C68] text-[11px] block">
                Insight 0{idx + 1}
              </span>
              <p className="text-[#F4EBDD]/80 leading-relaxed font-sans">{insight}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
